import React from "react";
import Template from "../components/Template";
import axios from "axios";
import { BASE_URL } from "../constants";
import toast, { Toaster } from "react-hot-toast";
export default function RandomQuiz() {
    const [quiz, setQuiz] = React.useState([]);
    const [answer, setAnswer] = React.useState({})
    const [newQuiz, setNewQuiz] = React.useState(false);

    React.useEffect(() => {
        (async function () {
            await axios
                .get(`${BASE_URL}/quiz`)
                .then(response => {
                    const result = response.data;
                    setQuiz(result.data);
                    console.log(result.data);
                })
                .catch(error => {
                    console.error(error);
                })
        })()
    }, [newQuiz]);

    const handleAnswer = isit => {
        console.log(isit);
        (async function () {
            await axios
                .get(`${BASE_URL}/answer/${quiz?.id}?key=${isit}`)
                .then(response => {
                    const result = response.data;
                    setAnswer(result.data);
                    console.log(result.data);
                })
                .catch(error => {
                    console.error(error);
                });
        })()
    };

    React.useEffect(() => {
        if (answer !== null) {
            if (answer.result) {
                toast.success("Jawaban mu benar!");
            } else {
                toast.error("Jawabanmu salah :(");
            }
        }
    }, [answer]);

    const handleChangeQuiz = () => {
        setNewQuiz(!newQuiz);
        setAnswer(null);
    };

    return (
        <Template title="Jawab Quiz Random">
            <div className="mt-4">
                <h3 className="text-xl font-bold">
                    {`Q: ${quiz?.quiz?.question}`}
                </h3>
                <div className="max-w-3xl">
                    {quiz?.quiz?.answers?.map((obj, index) => (
                        <button
                            key={index}
                            type="button"
                            className="p-4 rounded-xl bg-gray-200 flex justify-between items-center w-full mt-4 hover:bg-sky-500 hover:text-white ease-in duration-200"
                            onClick={() => handleAnswer(obj?.key)}
                        >
                            <span className="flex items-center rounded-xl w-full">
                                <p className="font-bold">
                                    {obj?.key}
                                </p>
                                <p className="ml-5">
                                    {obj?.value}
                                </p>
                            </span>
                        </button>
                    ))}
                </div>
                <div className="mt-4 flex">
                </div>
                <div className="mt-2">
                    <button
                        type="button"
                        className="p-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white ease-in duration-200"
                        onClick={handleChangeQuiz}
                    >
                        <span className="font-bold text-white">Ganti Quiz</span>
                    </button>
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </Template>
    );
}