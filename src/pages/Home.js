import React from "react";
import Template from "../components/Template";

export default function Home() {
    return (
        <Template title="Beranda">
            <div class="text-center m-8">
                <p class="text-2xl capitalize">
                    QuizApp
                </p>
                <p class="text-l capitalize\">
                   Kuis merupakan tes kecil untuk menguji kemampuan mahasiswa terhadap suatu materi. Frekuensi dan jadwal kuis ditentukan oleh dosen atau kampus yang bersangkutan.
                </p>
            </div>
            <div class="text-center hover:uppercase">
                <p class="text-2xl capitalize">
                    Kelompok 19
                </p>
                <p class="text-l capitalize\">
                    Timothy
                </p>
                <p class="text-l capitalize\">
                    Apriyandro
                </p>
                <p class="text-l capitalize\">
                    Dheyan
                </p>
                <p class="text-l capitalize\">
                    Iqbal
                </p>
            </div>
        </Template>
    );
}