import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 699,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 499,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 249,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 799,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 299,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 399,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="py-10 md:px-20 px-10">
      <Navbar />
      <Menu />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="">
      <h1 className="w-fit mx-auto rounded-lg text-gray-700 bg-yellow-300 p-2 text-3xl font-bold">
        Choice Pizza Co.
      </h1>
    </nav>
  );
}

function Menu() {
  const pizzas = pizzaData;

  return (
    <section className="mt-8">
      <h2 className="mx-auto text-center text-2xl border-y-2 font-bold border-gray-800 w-max">
        OUR MENU
      </h2>
      {pizzas.length > 0 ? (
        <>
          <p className="text-center text-lg font-semibold py-4">
            Authentic Italian cuisine. {pizzas.length} creative dishes to choose
            from. All from our stone oven, all organic, all delicious.
          </p>
          <div className="grid mt-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
            {pizzas.map((pizza) => (
              <Pizza pizzaObject={pizza} />
            ))}
          </div>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </section>
  );
}

function Pizza({ pizzaObject }) {
  return (
    <div
      className={`flex mx-6 space-x-2 ${
        pizzaObject.soldOut ? "grayscale" : ""
      }`}
    >
      <img src={pizzaObject.photoName} alt="" className="w-24 h-24" />
      <div>
        <h3 className="text-lg font-semibold">{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <p>
          {pizzaObject.soldOut ? "SOLD OUT" : `Price: ₹${pizzaObject.price}`}
        </p>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="mt-8 text-center text-lg">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p className="">
          We're currently closed!! We serve between {openHour}.00 and{" "}
          {closeHour}.00
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. <br />
        Come visit us or order online.
      </p>
      <button className="py-2 px-6 rounded-lg mt-4 cursor-pointer hover:bg-[#e9bb24] font-semi uppercase bold bg-[#edc84b]">
        Order
      </button>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
