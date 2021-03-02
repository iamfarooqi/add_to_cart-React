import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'

function App() {

  const [cart, setCart] = useState([])
  const [tasks, setTasks] = useState([
    {
      title: "Dairy Milk",
      image: "https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Spinach-Tomato-Pasta-bowl-500x375.jpg",
      price: "Rs-150"
    },
    {
      title: "Samosa",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbOnMjevaMMqw_MqDxiJNMz7TXLtjDsJi97A&usqp=CAU",
      price: "Rs-200"

    },
    {
      title: "Burger",
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhISEhETEBAWFRUTFRYWExUVFREYFxYZGBUYFxgYHCkgGBsnGxcWLT0hJjUrLi8wFx83ODMsOSgtLisBCgoKDg0OGxAQGy8iICYrLSsrLy0rLS0yLS8yLS01Ly4tLS8rLS0rLSsvNSstLy8tLTItLS0rNS0tLS0tLy0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABQEDBAYHAv/EAD0QAAICAQMCBQIDBgMGBwAAAAECABEDEiExBEEFBhMiUWFxMoGhFEKRscHwI1LRFVNicuHxBxYzQ2OCkv/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMFBP/EACoRAQACAgEDAwMEAwEAAAAAAAABAgMRIQQSMRRBURMi8FJhcYFCkcEj/9oADAMBAAIRAxEAPwDuMREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERASgipWAiIgIiIFJWIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICJS4jYrEoTKiNhERAREQEREBERAREQEREBERAREQEREBERAREQEREBKVKxApUrE8s4G5IA+sgeokdl8b6dbvKu13Vnjnj47/HeRr+bMGttORDjQe5jsOLLBroqP5zO2alfdeMd58Q2OJqn/m06gCqKDdaiRQ7XyQaI2IEx83mnI50BPSNqVat3H/CjFSbI2347TL1eNp6fJ8Nziaz03mJ8g2QA1VmhoI51BSSO/IH6y3h81gsq0AR7WBKqWN0dJJr8u8n1eNH0L/DaokNi8xYyLIK2dt1JIvY6Qbkh0/W48m6urVzRG33+JrXLS3iVLUtXzDJiUBlZooREQEREBERAREQEREBERAREQEREBMLxPxJOnXU53OyqOWPwJheYvFxhRlBK5CAA1qAmo0GJbbbc8Hjic+6jq8uZlDZDem2Le8oBbWOWFAXe17UAOfJ1HU9n218vTg6eb8z4bJ4v5uyFtGCsKA0+TIjORtsFVeGO+x+P4a91fjefJRye8diybMtURpIrfmxMN+rJFBsu5onVpRhxQQb9hYOw4o9rOXrVChfTzNR/wB4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",
      price: "Rs-250"

    }
  ]);

  function add(index) {
    var cartProducts = {
      title: tasks[index].title,
      price: tasks[index].price
    }
    // console.log(A)

    setCart([...cart, cartProducts])
    console.log(cart)





  }


  // function add() {
  //   setTasks(tasks + 1)
  // }
  // function sub() {
  //   setTasks(tasks - 1)

  // }

  return (<>

    { tasks.map((e, index) => (

      <div key={index}>

        <div style={{ border: "1px solid black", width: "20%", marginTop: "2%", textAlign: "center" }}>

          <h2>{e.title}</h2>
          <img style={{ width: "70%" }} src={e.image} />
          <p>{e.price}</p>

          <button onClick={() => add(index)} >Add to Cart</button>

          {/* <button onClick={{add}}>+</button>
        <button onClick={{sub}}>-</button> */}
        </div>
      </div>
    ))}


    <div>
      <h1>Cart</h1>
      {cart.map((e, index) => (

        <div key={index}>

          <div style={{borderBottom:"2px solid black"}}>
          <p>{index}- {e.title} {e.price}</p>
          <p></p>

          </div>

        </div>

      ))}
    </div>



  </>)

}

export default App;