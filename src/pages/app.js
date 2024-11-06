import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navtop from '../molecules/nav-top';
import Navleft from '../molecules/nav-left';
import Dashboard from '../organisms/dashboard';
import Calendar from '../organisms/calendar'; 
import Settings from '../organisms/settings';
import MeasurementForm from '../molecules/measurement-form';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navtop />
        <div className="flex flex-grow">
          <div className="flex"> 
            <Navleft />
          </div>
          <div className="flex-grow flex items-center justify-center p-8"> 
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/measurement-form/:formId" element={<MeasurementForm />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
