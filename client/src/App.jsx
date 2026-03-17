import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import './index.css'

function App() {
  const [ test, setTest ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api/tenants");
                setTest(response.data);
            } catch (error) {
                console.error("Error fetching tenants:", error);
            }
        };

        fetchData();
    }, []);

  return (
    <>
      <Navbar />

      {test}
    </>
  )
}

export default App;
