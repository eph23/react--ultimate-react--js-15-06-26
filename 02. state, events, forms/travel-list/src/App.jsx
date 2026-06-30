const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 2, description: "Charger", quantity: 2, packed: true },
    { id: 2, description: "T-Shirts", quantity: 5, packed: true },
];

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

function Item({ item }) {
    return (
        <li>
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.description}
            </span>
            <button>❌</button>
        </li>
    );
}

function PackingList() {
    return (
        <div className="list">
            <ul>
                {initialItems.map((item) => (
                    <Item item={item} />
                ))}
            </ul>
        </div>
    );
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
