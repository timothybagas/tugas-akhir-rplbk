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
                })
        })()
    }, []);

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
                        className="p-3 rounded-xl bg-gray-200"
                    >
                        {obj?.quiz?.question}
                    </div>
                ))}
            </div>
        </Template>
    );
}