import React from "react";
import Template from "../components/Template";
import axios from "axios";
import { BASE_URL } from "../constants";

export default function Quizzes() {
    const [quizzes, setQuizzes] = React.useState([]);

    React.useEffect(() => {
        (async function () {
            await axios
                .get(`${BASE_URL}/quizzes`)
                .then(response => {
                    const result = response.data;
                    setQuizzes(result.data);
                    console.log(result.data);
                })
                .catch(error => {
                    console.error(error);
                });
        })()
    }, []);

    const handleDeleteButton = (quizID, index) => {
        (async function () {
            await axios
                .delete(`${BASE_URL}/quiz/${quizID}`)
                .then(response => {
                    console.log(response.data);
                    let arr = quizzes;
                    arr.splice(index, 1);
                    console.log(arr);
                    setQuizzes([...arr]);
                })
                .catch(error => {
                    console.error(error);
                });
        })()
    };

    return (
        <Template title="Semua Quiz">
            {/* search bar */}
            <div className="flex">
                <div className="mt-4 xl:w-96">
                    <input
                        type="search"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleSearch2"
                        placeholder="Cari quiz kuy..."
                    />
                </div>
            </div>

            {/* quizzes */}
            <div className="mt-4">
                {quizzes.map((obj, index) => (
                    <div
                        key={index}
                        className={`p-4 rounded-xl bg-gray-200 flex justify-between items-center ${index > 0 ? "mt-4" : ""}`}
                    >
                        <span className="text-xl">
                            {obj?.quiz?.question}
                        </span>
                        <button
                            type="button"
                            className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={() => handleDeleteButton(obj?.id, index)}
                        >
                            Hapus
                        </button>
                    </div>
                ))}
            </div>
        </Template>
    );
}