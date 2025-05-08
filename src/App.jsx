import React, { useState } from 'react'
import './App.css'
import General from './components/General'
import KeySkills from './components/KeySkills'
import Education from './components/Education'
import Work from './components/Work'
import CvCompiled from './components/CvCompiled'



function App() {

  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
    town: "",
    postcode: "",
    profile: ""
  });

  const [skills, setSkills] = useState([]);

  const [workInfo, setWorkInfo] = useState([
    {
        id: 1,
        jobRole: "Admin",
        companyName: "Admin Ltd",
        dateFrom: "Jan 2025",
        dateTo: "Present",
        note: "Admin"
    },
  ]);

  const [educationInfo, setEducationInfo] = useState([
    {
        id: 1,
        subject: "BSc in Web Development",
        educator: "The University of Universitying",
        dateFrom: "Jan 2025",
        dateTo: "Present",
        note: "Still doing..."
    },
    {
        id: 2,
        subject: "GCSE Maths",
        educator: "The School of Schooling",
        dateFrom: "Jan 2024",
        dateTo: "Dec 2025",
        note: "Added things together."
    }
  ]);

  return (
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
        <br/>
        <button onClick={window.print}>Print / Save as PDF</button>
        <br/>

        <div class="print-me">
           <CvCompiled 
              generalInfo={generalInfo}
              educationInfo={educationInfo}
              skills={skills}
              workInfo={workInfo}            
          />
        </div>
        
      </div>

      

  )
}

export default App
