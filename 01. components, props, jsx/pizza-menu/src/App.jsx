import pizzaData from "./data";

function Header() {
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>;
        </header>
    );
}
function Menu() {
    return (
        <main className="menu">
            <h2>Our Menu</h2>
            <Pizza />
        </main>
    );
}

function Pizza() {
    return (
        <div>
            <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" />
            <h3>Pizza Spinaci</h3>
            <p>Tomato, mozarella, spinach, and ricotta cheese</p>
        </div>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    console.log(isOpen);

    return (
        <footer className="footer">
            {new Date().toLocaleTimeString()}We are currently open
        </footer>
    );
}

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

export default App;
