import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
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
<Skill skill="React" emoji="✌" colour="red"/>
<Skill skill="Java" emoji="👍" colour="blue"/>
<Skill skill="Spring Boot" emoji="🎉" colour="yellow"/>
<Skill skill="Javascript" emoji="🤞" colour="orange"/>
<Skill skill="HTML+CSS" emoji="👌" colour="green"/>
<Skill skill="SQL" emoji="🙌" colour="violet"/>
</div>

);
}

function Skill(props){
return(
<div className='skill' style={{backgroundColor:props.colour}}>
<span>{props.skill}</span>
<span>{props.emoji}</span>
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

