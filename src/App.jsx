import { useState } from 'react';
import Sidebar from './components/Sidebar';
import DoctorList, { DOCTORS } from './components/DoctorList';
import ApplicationDetails from './components/ApplicationDetails';
import './App.css';

export default function App() {
  const [selectedDoctor, setSelectedDoctor] = useState(DOCTORS[0]);

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="app-main">
        <header className="app-header">
          <h1 className="app-title">Pending Applications (5)</h1>
          <p className="app-subtitle">Manage all approved doctors on the platform</p>
        </header>

        <div className="app-content">
          <DoctorList
            selectedId={selectedDoctor?.id}
            onSelect={setSelectedDoctor}
          />

          <ApplicationDetails
            doctor={selectedDoctor}
            onApprove={(doc) => alert(`Approved: ${doc.name}`)}
            onReject={(doc) => alert(`Rejected: ${doc.name}`)}
          />
        </div>
      </main>
    </div>
  );
}
