import React, { useState } from 'react';
import '../style/general.css';

function WorkList({ workInfo, setWorkInfo }) {
   const [newEntry, setNewEntry] = useState([]);

   function addEntry(newEntry) {
      setWorkInfo([...workInfo, newEntry]);
   };

   function handleChange(e) {
      const {name, value} = e.target;
      setNewEntry((prev) => {
              return {...prev, [name]: value}
      })
   };

   function deleteEntry(index) {
      const updatedEntry = workInfo.filter((_, i) => i !== index);
      setWorkInfo(updatedEntry);
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
               <label className="input">Job Role: </label>
               <input 
                  className="input"
                  type="text" 
                  placeholder="Job role.." 
                  name="jobRole"
                  onChange={handleChange}
               />

               <label className="input">Company Name: </label>
               <input
                  className="input"
                  type="text" 
                  placeholder="Name of the Company.." 
                  name="companyName"
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

            <button type="submit" name="submitWork" className="Button">Add</button>
            </form>
         </div>
         
         
         <div className="list-list">
            <ul>
               {workInfo.map((entry, index) => 
                  <li key={index} className="list-card card">
                     <span className="subject-or-role">{entry.jobRole}</span><br/>
                     <span className="educator-or-company">{entry.companyName}</span>
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

export default WorkList;


