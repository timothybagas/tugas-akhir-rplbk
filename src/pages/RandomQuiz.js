import React from "react";
import Template from "../components/Template";
import axios from "axios";
import { BASE_URL } from "../constants";

export default function RandomQuiz() {
    const [quiz, setQuiz] = React.useState([]);
    const [answer, setAnswer] = React.useState({})
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
    }, []);

    const handleAnswer = (quizID, isit) => {
        console.log(quizID);
        console.log(isit);
        (async function () {
            await axios
                .get(`${BASE_URL}/answer/${quizID}?key=${isit}`)
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





    return (
        <Template title="Jawab Quiz Random">
            <div className="mt-4">
                <span className="text-xl">
                    <p>
                        {quiz.question}
                    </p>
                </span>
                {quiz.quiz.answers.map((obj, index) => (
                    <div
                        key={index}
                        className={`p-4 rounded-xl bg-gray-200 flex justify-between items-center ${index > 0 ? "mt-4" : ""}`}
                    >
                        <button
                            type="button"
                            className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={() => handleAnswer(obj?.id, obj?.key)}
                        >
                            {obj?.key}
                        </button>
                    </div>
                ))}
                <span className="text-xl">
                    <p>
                        Hasil:{answer.result}
                    </p>
                </span>
            </div>
        </Template>
    );
}