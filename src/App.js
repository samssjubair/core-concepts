import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const person={
    superhero: "Daredevil",
    name: "Matt Murdock"
  }
  const style={
    backgroundColor:'red'
  }
  const product=[
    {name: 'Mobile', price: '$199.99'},
    {name: 'Tablet', price: '$149.99'},
    {name: 'Laptop', price: '$399.99'},
    {name: 'Smart Watch', price: '$99.99'},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Count></Count>
        <User></User>
        {/* <Product name={product[0].name} price={product[0].price}></Product>
        <Product name={product[1].name} price={product[1].price}></Product>
        <Product name={product[2].name} price={product[2].price}></Product> */}
        {
          product.map(prod=><Product name={prod.name} price={prod.price}></Product>)
        }
        <p style={style}>
          {person.superhero} {person.name}
        </p>
        <Person name="Samss" gf="null"></Person>
        <Person name="Salman" gf="onek"></Person>
        
      </header>
    </div>
  );
}
function User(){
  const [users, setUser]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUser(data))
  },[])
  return(
    <div>
      <h2>Dynamic users: {users.length}</h2>
      <ul>
        {
          users.map(user=><li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
function Count(){
  const [count, setCount]= useState(0);

  return(
    <div>
      <h1>Count: {count} </h1>
      <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}
function Product(props){
  const divStyle={
    width: '200px',
    height: '200px',
    backgroundColor: 'light-gray',
    borderRadius: '5px',
    border: '5px solid white',
    margin: '10px'
  }
  return (
    <div style={divStyle}>
      <h2>{props.name}</h2>
      <h4>{props.price}</h4>
      <button>Buy now</button>
    </div>
  )
}
function Person(props){
  
  return (
    <div style={{backgroundColor: 'green',border: '3px solid black',margin: '15px'}}>
      <h1> Name: {props.name}</h1>
      <h2> Girlfriend: {props.gf}</h2>
    </div>
  )
}

export default App;
