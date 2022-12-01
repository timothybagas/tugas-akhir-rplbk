import React from "react";

export default function AnswerChoice({ 
    inputID,
    radioOnChange,
    isChecked,
    choiceKey,
    inputOnChange,
 }) {
    return (
        <div className="flex items-center mt-4">
            <input
                id={`default-radio`}
                type="radio"
                defaultValue name={`default-radio`}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={radioOnChange}
                checked={isChecked}
            />
            <span className="font-bold px-3 h-auto">{choiceKey}</span>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={`text-${inputID}`}
                type="text"
                placeholder="Jawaban..."
                name={`text-${inputID}`}
                onChange={inputOnChange}
            />
        </div>
    );
}