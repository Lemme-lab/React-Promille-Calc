import logo from './logo.svg';
import './App.css';
import { useState } from "react";



function Main() {

  const [inputs, setInputs] = useState({});

  const handleChange1 = (event) => {
    console.log(parseInt(inputs.bier));
    console.log(parseInt(inputs.wein));
    console.log(parseInt(inputs.sekt));
    console.log(parseInt(inputs.likör));
    console.log(parseInt(inputs.cocktail));
    console.log(parseInt(inputs.schnaps));
  }


  
  return (
    <div className="lmdaa">
    <div className="field1">

    <label>Bier: &nbsp; &nbsp; &nbsp;&nbsp;
    <input
      type="number"
      name="bier"
      value={inputs.bier}
    />
    </label>

    <label for="bier_amount">Amount['Liters']</label>
    <select name="bier_amount" id="b_am">
    <option value="0.25">0.25L</option>
    <option value="0.33">0.33L</option>
    <option value="0.5">0.5L</option>
    <option value="0.75">0.75L</option>
    </select>

    <label>Alkohol in %:
    </label>
    <input 
    type="number" 
    placeholder="5" 
    name="bier"
    value={inputs.bier_p}/>
    </div>

    <div className="field2">
    <label>Wein: &nbsp; &nbsp;&nbsp;
    <input
      type="number"
      name="wein"
      value={inputs.wein}
    />
    </label>

    <label for="bier_amount">Amount['Liters']</label>
    <select name="bier_amount" id="b_am">
    <option value="0.125">0.125L</option>
    <option value="0.25">0.25L</option>
    </select>

    <label>Alkohol in %:
    </label>
    <input 
    type="number" 
    placeholder="11" 
    name="bier"
    value={inputs.wein_p}/>
    
    </div>

    <div className="field3">
    <label>Sekt: &nbsp; &nbsp;&nbsp; 
    <input
      type="number"
      name="sekt"
      value={inputs.sekt}

    />
    </label>

    <label for="bier_amount">Amount['Liters']</label>
    <select name="bier_amount" id="b_am">
    <option value="0.25">0.25L</option>
    <option value="0.33">0.33L</option>
    <option value="0.5">0.5L</option>
    <option value="0.75">0.75L</option>
    </select>

    <label>Alkohol in %:
    </label>
    <input 
    type="number" 
    placeholder="10" 
    name="bier"
    value={inputs.sekt_p}/>

    </div>

    <div className="field4">
    <label>Likör: &nbsp; &nbsp;&nbsp;
    <input
      type="number"
      name="likör"
      value={inputs.likör}
    />
    </label>

    <label for="bier_amount">Amount['cl']</label>
    <select name="bier_amount" id="b_am">
    <option value="2cl">2cl</option>
    <option value="4cl">4cl</option>
    </select>

    <label>Alkohol in %:
    </label>
    <input 
    type="number" 
    placeholder="18" 
    name="bier"
    value={inputs.likör_p}/>

    </div>

    <div className="field5">
    <label>Cocktail:
    <input
      type="number"
      name="sekt"
      value={inputs.cocktail}
    />
    </label>

    <label for="bier_amount">Amount['Liters']</label>
    <select name="bier_amount" id="b_am">
    <option value="0.125">0.125L</option>
    <option value="0.25">0.25L</option>
    <option value="0.33">0.33L</option>
    </select>
    <label>Alkohol in %:
    </label>
    <input 
    type="number" 
    placeholder="30" 
    name="bier"
    value={inputs.cocktail_p}/>

    </div>

    <div className="field6">
    <label>Schnaps:
    <input
      type="number"
      name="sekt"
      value={inputs.schnaps}

    />
    </label>

    <label for="bier_amount">Amount['Liters']</label>
    <select name="bier_amount" id="b_am">
    <option value="0.25">2cl</option>
    <option value="0.33">4cl</option>
    </select>
    <label>Alkohol in %:
    </label>
    <input 
    type="number" 
    placeholder="40" 
    name="bier"
    value={inputs.schnaps_p}/>
    </div>

    <br></br>
    <br></br>
    <div>

      <button onClick={handleChange1} className="button1">Calculate</button>

    </div>

 </div>
  );
}

function Table(props) {
  const values = [];
  const values2 = [];
  const values3 = [];


  for (let i = 40; i <= 55; i++) {
       values[i] = {id:i+1, U:i, I:(i/props.r).toFixed(3)};
       values2[i] = {id2:i+14, U:i+14, I:(i/props.r).toFixed(3)};
       values3[i] = {id3:i+29, U:i+29, I:(i/props.r).toFixed(3)};
  }
  const table = {};
  const table_style = {color : 'black', border: '1px solid'};

  return (
    <div className="tables">
      <table>
            <tbody>
            <tr style = {table_style}>
                <th style = {table_style}>Weight[kg]</th>
                <th style = {table_style}>Promille[%]</th>
            </tr>
            {values.map(({id, U, I}) => (
                <tr key={id} style = {table_style }>
                    <td style = {table_style}>{U}</td>
                    <td style = {table_style}>{I}</td>
                </tr>
            ))}
            </tbody>
        </table>

        <table>
            <tbody>
            <tr style = {table_style}>
                <th style = {table_style}>Weight[kg]</th>
                <th style = {table_style}>Promille[%]</th>
            </tr>
            {values2.map(({id2, U, I}) => (
                <tr key={id2} style = {table_style }>
                    <td style = {table_style}>{U}</td>
                    <td style = {table_style}>{I}</td>
                </tr>
            ))}
            </tbody>
        </table>

        <table>
            <tbody>
            <tr style = {table_style}>
                <th style = {table_style}>Weight[kg]</th>
                <th style = {table_style}>Promille[%]</th>
            </tr>
            {values3.map(({id3, U, I}) => (
                <tr key={id3} style = {table_style }>
                    <td style = {table_style}>{U}</td>
                    <td style = {table_style}>{I}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  );
}

function App() {

  const [alcg, setalcg] = useState();

return (
 <div className="App">

     <Main changerg={setalcg}/>
     <Table g={alcg}/>

 </div>
);
}

export default App;
