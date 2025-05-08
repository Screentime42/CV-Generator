import React, { useState } from 'react';
import '../style/general.css';

function EducationList({ educationInfo, setEducationInfo }) {
   const [newEntry, setNewEntry] = useState([]);

   function addEntry(newEntry) {
      setEducationInfo([...educationInfo, newEntry]);
   };

   function handleChange(e) {
      const {name, value} = e.target;
      setNewEntry((prev) => {
              return {...prev, [name]: value}
      })
   };

   function deleteEntry(index) {
      const updatedEntry = educationInfo.filter((_, i) => i !== index);
      setEducationInfo(updatedEntry);
   };

   function handleSubmit(e) {
      e.preventDefault();
      console.log(newEntry);
      addEntry(newEntry);
   };

   return (
      <div id="list-container">
         <div className="list-input">
            <form onSubmit={handleSubmit} className="form">
               <label className="input">Subject: </label>
               <input 
                  className="input"
                  type="text" 
                  placeholder="Subject studied.." 
                  name="subject"
                  onChange={handleChange}
               />

               <label className="input">Educational Institution: </label>
               <input
                  className="input"
                  type="text" 
                  placeholder="Where you studied.." 
                  name="educator"
                  onChange={handleChange}
               />

               <label className="input">Date Started: </label>
               <input
                  className="input"
                  type="month" 
                  placeholder="e.g. Jan 2025" 
                  name="dateFrom"
                  onChange={handleChange}
               />

               <label className="input">Date Ended: </label>
               <input
                  className="input"
                  type="month" 
                  placeholder="e.g. Dec 2025" 
                  name="dateTo"
                  onChange={handleChange}
               />

               <label className="input">Additional Information: </label>
               <textarea
                  className="input"
                  type="text" 
                  placeholder="Additional information.." 
                  name="note"
                  onChange={handleChange}
                  rows="10"
               />

            <button type="submit" name="submitEducation" className="Button">Add</button>
            </form>
         </div>
         
         
         <div className="list-list">
            <ul>
               {educationInfo.map((entry, index) => 
                  <li key={index} className="list-card card">
                     <span className="subject-or-role">{entry.subject}</span><br/>
                     <span className="educator-or-company">{entry.educator}</span>
                     <span className="date-card">{entry.dateFrom} - {entry.dateTo}</span>
                     <br/><br/>
                     <span className="note-card">{entry.note}</span>
                     <button onClick={() => deleteEntry(index)} className="xButton">X</button>
                     
                  </li>
               )}
            </ul>
         </div> 
      </div>
   )
}

export default EducationList;


