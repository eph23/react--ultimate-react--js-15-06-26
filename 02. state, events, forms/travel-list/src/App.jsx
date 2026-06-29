
function Logo() {
    return (
        <heading>
            <h1>🌴Far Away🧳</h1>
        </heading>
    );
}

function Form() {
    return (
        <div className="add-form">
            <h3>What do you need for your trip? 📸</h3>
        </div>
    );
}
function PackingList() {
    return <div className="list">LIST</div>;
}
function Status() {
    return (
        <footer className="stats">
            <p>
                <em>
                    You have X items in your list, and you already packed X (X%)
                </em>
            </p>
        </footer>
    );
}

function App() {
    return (
        <div className="app">
            <Logo />
            <Form />
            <PackingList />
            <Status />
        </div>
    );
}

export default App;
