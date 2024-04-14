import data from "./data"


export default function App() {
  return (
    <div className="card">
      <Avatar />  
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  ); 
} 
function SkillList() {
  return (
    <div className="skill-list">

       {data.map((dt)=>(
        
      <Skill skill={dt.skill} emoji={dt.level} color={dt.color} key={dt.skill} />

    ))}
   
    </div>
  )
  
}

function Skill({skill,emoji,color}) {

  return (
    <div className="skill" style={{ backgroundColor:color }}>
      <span>{skill}</span>
      <span> 
      {emoji=== "advanced" && "😶‍🌫️"}
      {emoji === "intermediate" && "👍"}
      {emoji === "beginner" && "😣"}
      </span>

    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1> Fensley Rene</h1>
      <p>
        Full-stack web developer and teacher at Udemy.When not coding or
        preparing a course, I like to play board games, to cook (and eat ) , or
        to just enjoy the portuguess sun at the beach
      </p>
    </div>
  );
}
function Avatar() {
  return (
    <img
      className="avatar"
      src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt=""
    />
  );
}
