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

function Skill(props) {
    return (
        <div className="skill-list">
            <div className="skill" style={{ background: props.color }}>
                <span>{props.skill}</span>
                <span>{props.emoji}</span>
            </div>
        </div>
    );
}

function SkillList() {
    return (
        <div className="skill-list">
            <Skill skill="React" emoji="👶" color="lightblue" />
            <Skill skill="JavaScript" emoji="💪" color="yellow" />
            <Skill skill="CSS" emoji="💪" color="red" />
            <Skill skill="HTML" emoji="💪" color="green" />
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
