import "./App.css";
import ProductList from "./ProductList";
import CartItem from "./CartItem";

function App() {
    const path = window.location.pathname;

    if (path === "/plants") {
        return <ProductList />;
    }

    if (path === "/cart") {
        return <CartItem />;
    }

    return (
        <div className="landing-page">
            <div className="landing-content">
                <h1>Paradise Nursery</h1>
                <p>Bring nature into your home.</p>
                <a href="/plants">
                    <button className="get-started">Get Started</button>
                </a>
            </div>
        </div>
    );
}

export default App;