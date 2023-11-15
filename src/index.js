import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import me from "./assets/me.png" ;
import { ReactComponent as LinkedinLogo } from './assets/linkedin2.svg';


function App() {
  return (
    <div className="container">
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
        <LinkList />
      </div>
    </div>
    </div>
  );
}


const Avatar = () => {
  return (
  
    <img src={me} alt="test" className="avatar" /> 
  
  )
  
}
const Intro = () => {
  return (
    <div>
      <h1>Zijie Luo</h1>
    <p>
    I'm a BCTC Full-Stack Web Developer and IT Technician. 
    Beyond coding and work tasks, you'll find me immersed in video games, 
    whipping up delicious meals in the kitchen, or basking in the sunshine on the beach.
    </p>
    </div>
  )

}
const SkillList = () => {
  return (
    <div className="skill-list">
      <Skill skill="HTML+CSS" emoji="💪" color="#48a197"/>
      <Skill skill="JaveScript" emoji="💪" color="#c3eee2"/>
      <Skill skill="Web Design" emoji="💪" color="#fd72ee"/>
      <Skill skill="Git and GitHub" emoji="💪" color="#7bf961"/>
      <Skill skill="React" emoji="💪" color="#7bf961"/>
      <Skill skill="Django" emoji="💪" color="#b6c36b"/>
      <Skill skill="Python" emoji="💪" color="#6a29ce"/>
      <Skill skill="Mysql" emoji="💪" color="#1bb760"/>
      <Skill skill="Java" emoji="👶" color="#7bfbc2"/>
      
    </div>
  )

}

const Skill = (props) => {
  return (
    <div className="skill" style={{background: props.color}}>
      <span >{props.skill}</span>
      <span>{props.emoji}</span>

    </div>
  ) 
}

const LinkList = () => {
  return (
    <div className="skill-list">
      <Link link="linkedin.com/zijie-luo12" icon={<LinkedinLogo />} color="#cbd5e7"/>

    </div>
  )
}

const Link = (props) => {
  return (  
      <a href="https://www.linkedin.com/in/zijie-luo12/" className="bottom" style={{background: props.color}}> 
        <span> {props.icon}</span>
        <span> {props.link}</span>
      </a>  
  )
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
