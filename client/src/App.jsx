import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router";
import axios from 'axios';
import './index.css'
import Header from './components/Header';

function App() {
  const [ test, setTest ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/tenants");
                setTest(response.data);
            } catch (error) {
                console.error("Error fetching tenants:", error);
            }
        };

        fetchData();
    }, []);

  return (
    <>
      <section id="main">
        <Header />
      </section>
    </>
  )
}

export default App;
