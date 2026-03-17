import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import './index.css'

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
      <Navbar />

      {test.map((tenant) => (
        <div key={tenant.id}>
          <h2>{tenant.full_name}</h2>
          <h2>{tenant.email}</h2>
          <h2>{tenant.phone}</h2>
        </div>
      ))}

    </>
  )
}

export default App;
