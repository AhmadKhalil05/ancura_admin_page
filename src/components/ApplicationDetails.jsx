import './ApplicationDetails.css';

const FileIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5 1.5H5.5C4.7 1.5 4 2.2 4 3V17C4 17.8 4.7 18.5 5.5 18.5H14.5C15.3 18.5 16 17.8 16 17V6L11.5 1.5Z" stroke="#6D7EB5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.5 1.5V6H16" stroke="#6D7EB5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 11H13M7 13.5H13" stroke="#6D7EB5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronLeftIcon = () => (
  <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.5 10.5L2 6L6.5 1.5" stroke="#6D7EB5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CERTIFICATIONS = [
  'Clinical Psychology License - California Board',
  'Cognitive Behavioral Therapy Certification',
  'Trauma-Informed Care Certificate',
];

const DOCTOR_DETAILS = {
  licenseNumber: 'PSY-2014-7823',
  email: 's12323576@stu.najah.edu',
  licensingAuthority: 'Jordan',
  yearsOfExperience: '8 Years',
  issueDate: '2026-02-12',
  expiryDate: '2027-02-12',
};

export default function ApplicationDetails({ doctor, onApprove, onReject }) {
  if (!doctor) {
    return (
      <div className="application-details-panel application-details-panel--empty">
        <p className="application-details-empty-msg">Select a doctor to view their application details.</p>
      </div>
    );
  }

  return (
    <div className="application-details-panel">
      <h2 className="application-details-heading">Application Details</h2>

      <div className="application-details-body">
        <h3 className="application-details-doctor-name">{doctor.name}</h3>

        <div className="application-details-fields">
          <div className="detail-field">
            <span className="detail-field-label">License Number</span>
            <span className="detail-field-value">{doctor.licenseNumber || DOCTOR_DETAILS.licenseNumber}</span>
          </div>
          <div className="detail-field">
            <span className="detail-field-label">Email</span>
            <span className="detail-field-value">{DOCTOR_DETAILS.email}</span>
          </div>
          <div className="detail-field">
            <span className="detail-field-label">Licensing Authority</span>
            <span className="detail-field-value">{DOCTOR_DETAILS.licensingAuthority}</span>
          </div>
          <div className="detail-field">
            <span className="detail-field-label">Years of Experience</span>
            <span className="detail-field-value">{DOCTOR_DETAILS.yearsOfExperience}</span>
          </div>
          <div className="detail-field">
            <span className="detail-field-label">Issue Date</span>
            <span className="detail-field-value">{doctor.dateApplied || DOCTOR_DETAILS.issueDate}</span>
          </div>
          <div className="detail-field">
            <span className="detail-field-label">Expiry Date</span>
            <span className="detail-field-value">{DOCTOR_DETAILS.expiryDate}</span>
          </div>
        </div>

        <div className="application-certifications">
          <span className="detail-field-label">Licenses &amp; Certifications</span>
          <div className="certification-list">
            {CERTIFICATIONS.map((cert, i) => (
              <div key={i} className="certification-item">
                <FileIcon />
                <span className="certification-name">{cert}</span>
                <button className="certification-view-btn" aria-label="View certificate">
                  <ChevronLeftIcon />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="application-actions">
        <button className="action-btn action-btn--approve" onClick={() => onApprove && onApprove(doctor)}>
          Approve Registration
        </button>
        <button className="action-btn action-btn--reject" onClick={() => onReject && onReject(doctor)}>
          Reject Application
        </button>
      </div>
    </div>
  );
}
