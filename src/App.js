// fecth("https://api.currencyfreaks.com/latest?apikey=YOUR_APIKEY")
// .then((response)=>console.log(response))
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
const api = "https://api.currencyfreaks.com/latest?apikey=80fa68d8da98444a8cc3443010286839";

function App() {
  const [data, setData] = useState([])
    const  fetchData = async () =>  {
  try{
    const response = await axios.get(api);
    // console.log('response ===>', response);
    setData(response.data.rates);
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
            <td>{console.log(data.rates[key])}</td>
          </tr>
        ))}
      </tbody>
            {/* <tbody>
              <tr>
                <td>CAD</td>
                <td>{data.rates[key]+data.rates[key]/100*5}</td>
                <td></td>
                <td>{[]}</td>
              </tr>
            </tbody>
             
            <tbody>
              <tr>
                <td>EUR</td>
                <td>{[0.9933+0.9933/100*5]}</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>IDR</td>
                <td>{[14925.373134328358+14925.373134328358/100*5]}</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>JPY</td>
                <td>{[142.66+142.66/100*5]}</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>CHF</td>
                <td>{[0.9599302092340678+0.9599302092340678/100*5]}</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>GBP</td>
                <td>{[0.8612522607871846+0.8612522607871846/100*5]}</td>
                <td></td>
                <td></td>
              </tr>
            </tbody> */}
    </table>
            
           
    </div>
  );
  }

export default App;