import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  // "1"

  // var person = {
  //   name: "Rifat",
  //   job : "student"
  // }

  // var person2 = {
  //   name: "Sakib",
  //   job : "student"
  // }

  // var style = {

  //   color : "red",
  //   backgroundColor : "yellow"

  // }
  const nayoks = ["Rajjak", "Alamgir", 'Anwar', 'Joshim', 'Manna'];
  const products = [
    {name: 'photoshop', price:'$90.99'},
    {name: 'illustrator', price:'$60.99'},
    {name: 'PDF Reader', price:'$20.99'},
    {name: 'Microsoft Word', price:'$30.99'}
  ]
const nayokNames = nayoks.map(nayok => nayok);
console.log(nayokNames);
  return ( 
    <div className="App">
      <header className="App-header">
        {/* "2" 
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done bois!! <code>src/App.js</code> and save to reload.
        </p>
        <h1 style={{backgroundColor: "white", color: "red"}}> info: {person.name +" "+ person.job}</h1>
        <h1> info: {person2.name +" "+ person2.job}</h1>

        <p style={style}> My first create paragraph </p> */}
        <h1>This is React!!!</h1>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {nayoks.map(nayok => <li>{nayok}</li>)}
        
        </ul>

      
    {/*for static: */}

        {/* "4" <Product name={products[0].name} price= {products[0].price}></Product> */}
       
        {/* "5" <Product product = {products[0] }></Product>
        <Product product = {products[1] }></Product>      */}
 
    {/*for dynamic: */}

        {
          products.map(pd => <Product product = {pd}></Product> ) 
        }       
        
        

        <Person name = " Sakib khan" job=" student"></Person>
        <Person name = " Rakib hasan raz" job=" Doctor"></Person>
        <Person name = { " "+ nayoks[0] + " mahtaj"} job=" Engineer"></Person>
        <Person name = { " "+ nayoks[1]+ " chowdhuri"} job=" shopkeeper"></Person>
       
      </header>
    </div>
  );
} 

function Product (props){
const productStyle= {
border: "1px solid gray",
borderRadius: "5px",
backgroundColor:"purple",
height: "400px",
width: "200px",
float: "left"
}
const {name, price}= props.product;
// console.log(name,price);
 return(

  <div style={productStyle}>
    
    {/* "3"  

    here name = props.product.name 
    
    */}
    <h2>{name} </h2> 
    <h1>{price}</h1>
    <button>Buy Now!!</button>
  </div>
)
   
}


function Person(props){

var style = {
color:"red",
backgroundColor:"blue",
border:" 4px solid green",
margin: "10px"
}


return (
/* <div style={{border:"2px solid red",margin: "10px"}}> */
<div style={style}>
<h1>Name:{props.name} </h1>
<h3>Job: {props.job}</h3>
</div>
)


}

export default App;


function Counter(){
const[count, setCount]= useState(0);
const handleIncrease = () => {

setCount(count+1);

};
return(
<div>

<h1>count: {count}</h1>
<button onClick={handleIncrease}>Increase</button>
<button onClick={()=> setCount(count-1)}>Decrease</button>

</div>


)

}


function Users(){

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));

  },[])

  return(

<div>
  <h3> Dynamic Users:{users.length} </h3>
  <ul>
      {
        console.log(users)
      }

      {
      users.map(user=> <li>{user.email}</li>)
      }
  </ul>

  
  </div>


  )
}