import { useState } from 'react';
import Sidebar from './components/Sidebar';
import DoctorList from './components/DoctorList';
import ApplicationDetails from './components/ApplicationDetails';
import './App.css';
import { supabase } from './supa​baseClient';






export default function App() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [doctors, setDoctors] = useState([]);


  async function handleApprove(doc) {
    await supabase
      .from('doctor')
      .update({ verify_status: 'approved' })
      .eq('id', doc.id);
  
      console.log(doc)
      window.location.reload();
  }
  
  async function handleReject(doc) {
    await supabase
      .from('doctor')
      .update({ verify_status: 'rejected' })
      .eq('id', doc.id);
  
      window.location.reload(); 
  }

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
            onDataLoaded={setDoctors}

          />

          <ApplicationDetails
            doctor={selectedDoctor}
            onApprove={handleApprove}
            onReject={handleReject}
          />
        </div>
      </main>
    </div>
  );
}
