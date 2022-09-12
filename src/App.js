import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
const api = "https://api.currencyfreaks.com/latest?apikey=80fa68d8da98444a8cc3443010286839&symbols=CAD,EUR,IDR,JPY,CHF,GBP";

function App() {
  const [data, setData] = useState([])
    const  fetchData = async () =>  {
  try{
    const response = await axios.get(api);
    
    setData(response.data);
  } catch (error) {
    console.log('error', error)
  }
}
useEffect(() => {
  fetchData();
}, [])


  return (
    <div className="App">
      <table>
        <thead>
              <tr>
                <td>Currency</td>
                <td>We Buy</td>
                <td>Excange Rate</td>
                <td>We Sell</td>
              </tr>
            </thead>
      <tbody>
        {data.rates && Object.keys(data.rates).map((key, index) => (
          <tr key={index}>
            <td>{key}</td>
            <td>{(data.rates[key]*(1+0.05))}</td>  
            <td>{(data.rates[key])}</td>
            <td>{(data.rates[key]*(1-0.05))}</td>
          </tr>
        ))}
      </tbody>
    </table>
            
           
    </div>
  );
  }

export default App;