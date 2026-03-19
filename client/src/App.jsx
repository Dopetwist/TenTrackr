import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router";
import axios from 'axios';
import './index.css';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Tenants from './pages/Tenants';
import PropertyAccordion from './components/PropertyAccordion';
import RegisterTenant from './pages/RegisterTenant';
import EmailPage from './pages/EmailPage';

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
      <div id="main">
        <Routes>
          <Route
            path='/'
            element={<Landing />}
          />

          <Route
            path='/dashboard'
            element={<Dashboard />}
          />

          <Route
            path='/tenants'
            element={<Tenants />}
          />

          <Route
            path='/properties'
            element={<PropertyAccordion />}
          />

          <Route
            path='/register'
            element={<RegisterTenant />}
          />

          <Route
            path='/emails'
            element={<EmailPage />}
          />
        </Routes>
      </div>
    </>
  )
}

export default App;
