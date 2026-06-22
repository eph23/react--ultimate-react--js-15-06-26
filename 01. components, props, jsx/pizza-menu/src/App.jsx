import pizzaData from "./data";

function Header() {
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>;
        </header>
    );
}

function Pizza({ pizzaObj }) {
    return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>
                    {pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price + 3}
                </span>
            </div>
        </li>
    );
}

function Menu() {
    const pizzas = pizzaData;
    const numPizzas = pizzas.length;

    return (
        <main className="menu">
            <h2>Our Menu</h2>

            {numPizzas > 0 ? (
                <>
                    <p>
                        Authentic Italian Cuisine. 6 creative dishes to choose
                        from. All from our stone oven, all organic, all
                        delicious
                    </p>
                    <ul className="pizzas">
                        {pizzas.map((pizza) => {
                            return <Pizza key={pizza.name} pizzaObj={pizza} />;
                        })}
                    </ul>
                </>
            ) : (
                <p>We are still working on our menu. Please come back later</p>
            )}
        </main>
    );
}

function Order({ closeHour, openHour }) {
    return (
        <div className="order">
            <p>
                We are Open until {closeHour}:00. Come visit us or order online
            </p>
            <button className="btn">Order</button>
        </div>
    );
}

function Notice({ openHour, closeHour }) {
    return (
        <p>
            We are happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className="footer">
            {isOpen ? (
                <Order closeHour={closeHour} openHour={openHour} />
            ) : (
                <Notice closeHour={closeHour} openHour={openHour} />
            )}
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
