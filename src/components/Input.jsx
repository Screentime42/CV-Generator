import '../App.css'
import General from '../components/General'
import KeySkills from '../components/KeySkills'
import Education from '../components/Education'
import Work from '../components/Work'


export default function Input() {
   return (
      <>
         <div>
         <h1>CV Generator</h1>
         <p>A quick and simple approach to formatting a CV for you.</p>
         <div id="app">
            <h2>1. General Information</h2>
            <General 
               generalInfo={generalInfo} 
               setGeneralInfo={setGeneralInfo} 
            />
            <br/>
            <h2>2. Key Skills</h2>
            <p>Please add in order you would like displayed.</p>
            <KeySkills
               skills={skills}
               setSkills={setSkills}
            />
            <br/>
            <h2>3. Career History</h2>
            <p>Please add in order you would like displayed.</p>
            <Work
               workInfo={workInfo}
               setWorkInfo={setWorkInfo}
            />
            <br/>
            <h2>4. Qualifications / Education</h2>
            <p>Please add in order you would like displayed.</p>
            <Education
               educationInfo={educationInfo}
               setEducationInfo={setEducationInfo}
            />
         </div>
         <hr/>

         <div className="section-to-print">
            <h2 id="testtext">{generalInfo.name}</h2>
            <p>{generalInfo.profile}</p>

         </div>
         <button onClick={window.print}>Print / Save as PDF</button>
         </div>
      </>
   )
};