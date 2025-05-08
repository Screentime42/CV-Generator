import '../style/general.css';

function CvCompiled({ generalInfo, educationInfo, skills, workInfo }) {
   
   return (
      <div>
         <div className="details">
            <hr/>
               <h2>{generalInfo.name}</h2>
            <hr/>
               <p>{generalInfo.town}, {generalInfo.postcode}   |   {generalInfo.phone}   |   {generalInfo.email}</p>
            <hr/>
               <h3>PROFESSIONAL PROFILE</h3>
            <hr/>
               <p>{generalInfo.profile}</p>
            <hr/>
               <h3>KEY SKILLS</h3>
            <hr/>
               <div className="skills-list">
               {skills.map((entry, i ) => (
                  <div key={i} className="skills-list">
                     <li className="skills-list-entry">{entry}</li>
                  </div>
               ))}
               </div>
           
               <hr/>
                  <h3>CAREER HISTORY</h3>
               <hr/>
               <div id="cv-work-list">
              
                  {workInfo.map((entry, i) => (
                     <div key={i} className="list-item">
                        <h4 className="list-role">{entry.jobRole}</h4>
                        <div className="role-date-container">
                           <p className="list-company">{entry.companyName}</p>
                           <p className="list-dates"> {entry.dateFrom} - {entry.dateTo}</p>
                        </div>
                        <p className="list-note">{entry.note}</p>
                     </div>
               ))}
               </div>
            
               <hr/>
                     <h3>EDUCATION & QUALIFICATIONS</h3>
                  <hr/> 
               <div id="cv-edu-list">
                  {educationInfo.map((entry, i) => (
                     <div key={educationInfo.id} className="list-item">
                        <h4 className="list-subject">{entry.subject}</h4>
                        <div className="edu-date-container">
                           <p className="list-educator">{entry.educator}</p>
                           <p className="list-dates">{entry.dateFrom} - {entry.dateTo}</p>
                        </div>
                        <p className="list-note">{entry.note}</p>
                     </div>
                  ))}
               </div>
            <hr/>
              
                     
                  
            
         </div>
      </div>
   )
}

export default CvCompiled;