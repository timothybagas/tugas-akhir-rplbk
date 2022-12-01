import React from "react";
import Template from "../components/Template";

export default function Home() {
    return (
        <Template>
            <div className="flex flex-col items-center space-y-8">
                <h2 className="font-bold text-5xl">
                    Selamat Datang di QuizApp!
                </h2>
                <div className="text-xl max-w-xl text-justify w-full">
                    <h3 className="font-bold">QuizApp tuh apasih?</h3>
                    <p className="mt-3">
                        QuizApp adalah aplikasi yang bisa digunakan untuk menjawab quiz, membuat quiz, dan lainnya.
                    </p>
                </div>
                <div className="text-xl max-w-xl text-justify w-full">
                    <h3 className="font-bold">Yang bikin QuizApp siapa sih?</h3>
                    <p className="mt-3">
                        Halo, kami dari kelompok 19 praktikum RPLBK 2022. Anggota kami:
                    </p>
                    <ul className="list-inside list-disc">
                        <li >Mohamad Iqbal Amrullah</li>
                        <li>Timothy Bagaskara H</li>
                        <li>Apriyandro Triandito Kusumo</li>
                        <li>Dheyan Rifai Bagaskoro</li>
                    </ul>
                </div>
                <div className="text-xl max-w-xl w-full">
                    <button
                        className="inline-block px-6 py-2.5 bg-sky-600 text-white font-medium rounded-xl shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg transition duration-150 ease-in-out m-auto"
                    >
                        <a href="/quiz-random">Coba Jawab Quiz!</a>
                    </button>
                </div>
            </div>
        </Template>
    );
}
