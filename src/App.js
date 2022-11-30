import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import NavigationMenu from "./components/NavigationMenu";
import CreateQuiz from "./pages/CreateQuiz";
import Home from "./pages/Home";
import Quizzes from "./pages/Quizzes";
import RandomQuiz from "./pages/RandomQuiz";

function App() {
  const pages = [
    {
      name: "Beranda",
      path: "/",
    },
    {
      name: "Jawab Quiz Random",
      path: "/quiz-random",
    },
    {
      name: "Buat Quiz",
      path: "/buat-quiz",
    },
    {
      name: "Semua Quiz",
      path: "/semua-quiz",
    },
  ];
  const [currentURL, setCurrentURL] = React.useState("/");
  
  React.useEffect(() => {
    const url = window.location.href;
    const path = "/" + url.split("/").at(-1);
    setCurrentURL(path);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <NavigationBar>
        {pages.map((page, index) => (
          <NavigationMenu
            key={index}
            isActive={currentURL === page.path}
            onClick={() => setCurrentURL(page.path)}
          >
            <Link to={page.path}>{page.name}</Link>
          </NavigationMenu>
        ))}
      </NavigationBar>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/quiz-random" exact element={<RandomQuiz />} />
        <Route path="/buat-quiz" exact element={<CreateQuiz />} />
        <Route path="/semua-quiz" exact element={<Quizzes />} />
      </Routes>
    </div>
  );
}

export default App;
