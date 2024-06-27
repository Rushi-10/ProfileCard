import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];

function App(){
return (
  <div className='card'>
  <Avatar/>
  <div className='data'>
  <Intro/>
  <SkillList/>
  </div>
  </div>
);

}
function Avatar(){
  return <img className='avatar' src="rushiImage.png" alt="Rushi's_Image"/>;
}
function Intro(){
return (
  <div>
  <h1>Rushikesh Madhure</h1>
  <p>Software Engineer at Bytefusion Techsoft and walking in training of react js and having a knowledge of java and springboot.</p>
  </div>
)
}
function SkillList(){
return(
<div className='skill-list'>
{
  skills.map((skill)=>(<Skill skill={skill} key={skill.skill}/>))
}
</div>

);
}
console.log(skills);
function Skill({skill}){
return(
<div className='skill' style={{backgroundColor:skill.color}}>
<span>{skill.skill}</span>
<span>

{skill.level==="beginner" && "1️⃣"}
{skill.level==="intermediate" && "2️⃣" }
{skill.level==="advanced" && "3️⃣"}

</span>
</div>
);
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

