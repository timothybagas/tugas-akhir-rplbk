import axios from "axios";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import AnswerChoice from "../components/AnswerChoice";
import Template from "../components/Template";
import { BASE_URL } from "../constants";

const OPTIONS_QUANTITY = 4;

export default function CreateQuiz() {
    const [question, setQuestion] = React.useState("");
    const [answers, setAnswers] = React.useState(
        Array.from({ length: OPTIONS_QUANTITY }, (_, index) => ({
            key: String.fromCharCode(index + 65), value: "", isCorrect: index === 0,
        }))
    );
    const [previousChoice, setPreviousChoice] = React.useState(0);

    const handleOnSubmit = e => {
        e.preventDefault();
        (async function () {
            await axios
                .post(`${BASE_URL}/quiz`, { question, answers })
                .then(response => {
                    const result = response.data;
                    toast.success("Quiz berhasil dibuat!");
                    console.log(result.data);
                })
                .catch(error => {
                    toast.error("Gagal membuat Quiz");
                    console.error(error);
                });
        })();
    };

    const handleRadioOnChange = index => {
        const arr = [...answers];
        arr[previousChoice] = {
            ...arr[previousChoice],
            isCorrect: false,
        };
        arr[index] = {
            ...arr[index],
            isCorrect: true,
        };
        setAnswers([...arr]);
        setPreviousChoice(index);
    };

    const handleInputOnChange = (index, value) => {
        const arr = [...answers];
        arr[index] = {
            ...arr[index],
            value,
        };
        setAnswers([...arr]);
    };

    return (
        <Template title="Buat Quiz">
            <div className="w-full max-w-2xl mt-4">
                <form
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    onSubmit={handleOnSubmit}
                >
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="question">
                            Pertanyaan
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="question"
                            type="text"
                            placeholder="Pertanyaan"
                            name="question"
                            onChange={e => setQuestion(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="opsi">
                            Opsi Jawaban
                        </label>
                        {answers.map((answer, index) => (
                            <AnswerChoice
                                key={index}
                                inputID={index}
                                radioOnChange={() => handleRadioOnChange(index)}
                                isChecked={answer.isCorrect}
                                choiceKey={answer.key}
                                inputOnChange={e => handleInputOnChange(index, e.target.value)}
                            />
                        ))}
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Buat Quiz
                        </button>
                    </div>
                </form>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </Template>
    );
}
