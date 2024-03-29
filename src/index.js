import React from "react"; 
import ReactDOM from "react-dom/client"; 
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



function App() {
     
     return <div className="container">
          <Header />
          <Menu />
          <Footer/>
     </div>
}



function Header() {
    
     return( <header className="header"><h1>Fast React Pizza CO.</h1> </header>)
    
     
 }

 
function Menu() {
     
     return (<div className="menu"> <h2>Our Menu</h2>
          <>
          <p>Authentic Italian cusin. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
        
          <ul className="pizzas">
               {pizzaData.map((pizza) => <Pizza pizzaObj={pizza} />)}
               </ul>
               </>
          {//used to manually render the piza menu
          /*  <Pizza name='Pizza Spinacchi' ingredients='Tomato, mozarella, spinach, and ricotta cheese' photoName='pizzas/spinaci.jpg' price={10} />;
          <Pizza name='Pizza Funghi' ingredients='Tomato, mushroom' photoName='pizzas/funghi.jpg' price={12} />; */}
     </div>

     
)}

function Pizza({ pizzaObj }) {
     //if (props.pizzaObj.soldOut) return null;
     return <li className={`pizza ${pizzaObj.soldOut? "sold-out": " "}`}>
     
          <img src={pizzaObj.photoName} alt={pizzaObj.name} />
          <div>
          <h3>{pizzaObj.name}</h3>
           <p>{pizzaObj.ingredients}</p>
               <span><p>{pizzaObj.soldOut ? "SOLD OUT" : "$"+pizzaObj.price}</p></span> 
          </div>
          
     </li>
}

function Footer() {
     const hour= new Date().getHours();
     const openHour = 5;
     const closedHour = 20;
     const isOpen = hour >= openHour && hour <= closedHour;
     return (
          <footer className="footer">
               {isOpen ? (<Order closedHour={closedHour} openHour={openHour} />):(<div className="order"><p>we are welcome to serve you between {openHour}:00 - {closedHour}:00</p>
                    <button className="btn">Order</button></div>)}

          </footer>
     );

}

function Order({ closedHour, openHour }) {
     return(<div className="order"><p>we are open from {openHour}:00 to {closedHour}:00.</p></div>)
}




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App /></React.StrictMode>);
 

