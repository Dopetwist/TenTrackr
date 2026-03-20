import { Routes, Route } from "react-router";
import './index.css';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Tenants from './pages/Tenants';
import PropertyAccordion from './components/PropertyAccordion';
import RegisterTenant from './pages/RegisterTenant';
import EmailPage from './pages/EmailPage';
import TenantDetails from "./pages/TenantDetails";

function App() {

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
            path='/tenantdetails'
            element={<TenantDetails />}
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
