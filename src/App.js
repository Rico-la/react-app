import React, { useState, useEffect } from "react";
import "./App.css";
import Wilder from "./components/Wilder";
import axios from "axios";
import AddWilder from "./components/AddWilder";

function App() {
  const [wilders, setWilders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          "http://localhost:5000/api/wilder"
        );
        setWilders(result.data.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  

  return (
    <div>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <AddWilder />
      <main className="container">
        <h2>Wilders</h2>
        <section className="card-row">
          {wilders.map(wilder => (
            <Wilder key={wilder._id} skills={wilder.skills} name={wilder.name} />
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
