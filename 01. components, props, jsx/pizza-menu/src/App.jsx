import pizzaData from "./data";

function Pizza() {
    return (
        <div>
            <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" />
            <h2>Pizza Spinaci</h2>
            <p>Tomato, mozarella, spinach, and ricotta cheese</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Pizza</h1>
            <Pizza />
            <Pizza />
            <Pizza />
            <Pizza />
        </div>
    );
}

export default App;
