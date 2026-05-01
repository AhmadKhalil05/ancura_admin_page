import './DoctorList.css';
import { useEffect, useState } from 'react';
import { supabase } from '../supa​baseClient';
import './DoctorList.css';

const EyeIcon = () => (
  <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#eyeClip)">
      <path d="M13.3529 8.56466C10.7932 9.57705 7.97126 9.589 5.41265 8.60283C3.30119 7.79907 1.46445 6.3805 0 4.66643C1.52235 2.8883 3.42205 1.44258 5.62213 0.652472C8.08103 -0.238592 10.7662 -0.215924 13.2106 0.713992C15.3418 1.51755 17.1808 2.93217 18.6667 4.66662C17.2225 6.35208 15.4349 7.7474 13.3529 8.56466ZM11.8532 7.38476C13.5569 5.82629 13.4291 3.13686 11.6045 1.74023C10.1846 0.653447 8.16538 0.730079 6.83296 1.92879C5.22072 3.37919 5.19923 5.88142 6.78328 7.35907C8.198 8.67878 10.4187 8.6971 11.8532 7.38476Z" fill="white"/>
      <path d="M10.6956 4.92762C10.5663 5.59771 9.97565 6.05018 9.32101 6.04502C8.6601 6.03985 8.08033 5.56787 7.96429 4.90315C7.81344 4.03894 8.49812 3.26653 9.3704 3.29008C10.2163 3.31294 10.8597 4.07735 10.6956 4.92757V4.92762Z" fill="white"/>
    </g>
    <defs>
      <clipPath id="eyeClip">
        <rect width="18.6667" height="9.33333" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const DOCTORS = [
  { id: 1, name: 'Dr.Madre meen', licenseNumber: 'PSY-2014-7823', dateApplied: '2026-02-12' },
  { id: 2, name: 'Dr. Sarah Johnson', licenseNumber: 'PSY-2015-1122', dateApplied: '2026-01-30' },
  { id: 3, name: 'Dr. Ali Hassan', licenseNumber: 'PSY-2016-4455', dateApplied: '2026-02-05' },
  { id: 4, name: 'Dr. Lena Müller', licenseNumber: 'PSY-2013-9988', dateApplied: '2026-02-10' },
  { id: 5, name: 'Dr. Omar Youssef', licenseNumber: 'PSY-2017-3366', dateApplied: '2026-02-01' },
];

export default function DoctorList({ selectedId, onSelect, onDataLoaded  }) {

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  
  async function fetchDoctors() {
    const { data, error } = await supabase
      .from('doctor')
      .select('*');

    if (error) {
      console.error(error);
    } else {
      setDoctors(data);
    }

    if (onDataLoaded) {
      onDataLoaded(data);
    }
  
  }

    
  return (
    <div className="doctor-list-panel">
      <div className="doctor-list-header">
        <h2 className="doctor-list-title">All doctors ({doctors.length * 2})</h2>
      </div>

      <div className="doctor-list-table-header">
        <span>Doctor Name</span>
        <span>Date Applied</span>
        <span>Verify Status</span>
        <span>Actions</span>
      </div>

{doctors.map((doc) => (
  <div
    key={doc.id}
    className={`doctor-row ${
      selectedId === doc.id ? 'doctor-row--selected' : ''
    }`}
  >
    <div className="doctor-row-info">
      <span className="doctor-row-name">{doc.fullname}</span>
      <span className="doctor-row-license">ID</span>
    </div>

    <span className="doctor-row-date">
      {new Date(doc.created_at).toLocaleDateString()}
    </span>

    <span className={`doctor-status status-${doc.verify_status}`}>
      {doc.verify_status}
    </span>

    <button
      className="view-details-btn"
      onClick={() => onSelect(doc)}
    >
      <EyeIcon />
      View Details
    </button>

   
  </div>
))}


 </div>
  );
}

export { DOCTORS };
