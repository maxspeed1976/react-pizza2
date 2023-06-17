//import React from 'react';
import React from "react";
import ReactDOM from "react-dom/client"
import "./index.css"

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];

  

function App(){

    return <div>
        <Header />  
        <Menu />
        <Footer />
        </div>

}

function Pizza(props){
    return (<div className="pizza">
        
            <h2>{props.name}</h2>
            <img src={props.img} />
            <h3>Price:$ {props.price} </h3>
        
    </div>)
}


function Menu (){

    const hour = new Date().getHours();
    const openHour = 9
    const closeHour = 22
    const isOpen = openHour <= hour && closeHour>= hour;

    return (
      <main className="menu">
    <h2>Our Menu</h2>
     <div>
      {pizzaData.map((pizza) =>(
        <Pizza name={pizza.name} img={pizza.photoName} price={pizza.price} />
      ))}
    </div>
    </main>
)}

function Header(){

   return  <header className="header">
            <h1>Welcome to Pizza React!</h1>

    </header>
   
}

function Footer(){

    return <footer>{new Date().toLocaleTimeString()} We're currently open!</footer>
}
const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
