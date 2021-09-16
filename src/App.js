import React from "react";
import "./App.css";
import Wilder from "./components/Wilder";

function App() {
  const wilders = [
    {
      name: "Alain",
      skills: [
        { votes: 1, title: "react" },
        { votes: 2, title: "nodejs" },
      ],
    },
    {
      name: "bernard",
      skills: [
        { votes: 1, title: "react" },
        { votes: 2, title: "nodejs" },
      ],
    },
    {
      name: "Christophe",
      skills: [
        { votes: 1, title: "react" },
        { votes: 2, title: "nodejs" },
      ],
    },
  ];
  return (
    <div>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
        <h2>Wilders</h2>
        <section className="card-row">
          {wilders.map((wilder, index) => (
            <Wilder key={index} skills={wilder.skills} name={wilder.name} />
          ))}
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2020 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
