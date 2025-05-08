import '../style/general.css';

import React, { useState } from 'react';

export default function KeySkills({ skills, setSkills }) {
   const [currentSkill, setCurrentSkill] =useState(""); 

   function handleChange(e) {
     setCurrentSkill(e.target.value)
   }


   function handleSubmit(e) {
         e.preventDefault();
         if (currentSkill.trim() !== "") {
            setSkills((prev) => [...prev, currentSkill]);
            setCurrentSkill("");
         } else {
            alert("Skill cannot be empty!");
         }
   }

   function deleteEntry(index) {
      setSkills((prev) => prev.filter((_, i) => i !== index));
   }

   return (
      <div id="skills">
         <div id="skills-input">
            <form onSubmit={handleSubmit} className="form" id="skills-form">
               <label className="input" htmlFor="skill-input">Skill: </label>
               <input 
                  type="text" 
                  placeholder="Skill to add.."
                  className="input"
                  name="skill"
                  id="skill-input"
                  onChange={handleChange}
                  value={currentSkill}
               />
               <button 
                  type="submit" 
                  name="submitSkill" 
                  className="Button"
                  id="skills-add"
               >Add</button>
            </form>
         </div>

         <div className="skills-list">
               {skills.map((entry, index) => 
                  <div key={index} className="skill-card card">
                     <p>{entry}</p>
                     <button 
                        onClick={() => deleteEntry(index)} 
                        id="xSkillButton"
                     >X</button>
                  </div>
               )}
         </div>
      </div>
   )


};
