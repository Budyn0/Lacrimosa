import React from 'react';
import { Link } from 'react-router-dom';
import DashboardButton from '../atoms/dashboard-btn';

function Dashboard() {
  return (
    <div className="flex items-center justify-center "> 
      <div className="max-w-1440px grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 w-full">
        {[...Array(9)].map((_, index) => (
          <Link key={index} to={`/measurement-form/${index + 1}`}>
            <DashboardButton label={`Form ${index + 1}`} className="w-full" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
