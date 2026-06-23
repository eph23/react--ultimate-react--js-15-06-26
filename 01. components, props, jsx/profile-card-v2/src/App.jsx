import skills from "./data";

function Avatar() {
    return <img src="PP.jpg" alt="" className="avatar" />;
}
function Intro() {
    return (
        <div>
            <h2>Ephraim S.</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                ipsum culpa quisquam, quo minima exercitationem ex cum,
                cupiditate non nam, possimus ducimus fuga ea dicta!
            </p>
        </div>
    );
}

function Skill({ skill }) {
    console.log(skill);
    return (
        <div className="skill-list">
            <div className="skill" style={{ background: skill.color }}>
                <span>{skill.skill}</span>
                <span>
                    {skill.level === "advanced" && "💪"}
                    {skill.level === "intermediate" && "👍"}
                    {skill.level === "beginner" && "👶"}
                </span>
            </div>
        </div>
    );
}

function SkillList() {
    return (
        <div className="skill-list">
            {skills.map((skill) => (
                <Skill skill={skill} />
            ))}
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <div className="card">
                <Avatar />
                <div className="data">
                    <Intro />
                    <SkillList />
                </div>
            </div>
        </div>
    );
}

export default App;
