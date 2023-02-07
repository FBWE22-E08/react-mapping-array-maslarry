
import './App.css';

function App() {

  const products = [
    { name: "xbox", price: "400€", image: "https://picsum.photos/300/200" },
    {
      name: "PlayStation",
      price: "550€",
      image: "https://picsum.photos/300/200",
    },
    { name: "Nintendo", price: "200€", image: "https://picsum.photos/300/200" },
  ];

  return (
    <div className="App">
       <div className="main">
        {products.map((item, i) => <div className="card" key={i}>
          <img src={item.image} alt={item.name} />
          <h1>{item.name}</h1>
          <p>{item.name}</p>
        </div>)}
      </div>
     
    </div>
  );
}

export default App;
