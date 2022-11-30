import React from "react";
import Template from "../components/Template";

export default function RandomQuiz() {
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
    
    return (
        <Template title="Jawab Quiz Random">
            
        </Template>
    );
}