import { useState, useEffect } from "react";


function App(){

    /*
    * use state and Effect
    */
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [doller, setdoller] = useState(0);
    const [coinsValue, setCoinsValue] = useState(0);

    useEffect(() =>{
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then(response => response.json())
        .then(json => {
            //console.log(json);
            setCoins(json);
            setLoading(false);
        })

    },[])

    /*
    * User Function
    */
    const onDollerChange = (e) => {
        setdoller(e.target.value);
    }


    const fnCoinIdxChange = (e) =>{
        console.log(Math.floor(e.target.value.split(' ')[2]*100)/100);
        setCoinsValue(Math.floor(e.target.value.split(' ')[2]*100)/100);
        
    }


    /*
    * HTML {javascript}
    */
    return(
        <div>
            
            {(coinsValue !== "" && doller !== "" )? 
                <h3>{(doller/coinsValue)} 개를 살 수 있습니다</h3>
            : null}

            <input
                type="number"
                placeholder="$$$$$$$$$$$$$$$$"
                onChange={onDollerChange}
            >
            </input>

            <h1>the coins { loading ? "" :`(${coins.length})`}</h1>

            <strong>Loading</strong>

            <select onChange={fnCoinIdxChange}>
                {coins.map(coins => (
                <option key={coins.id}>
                    {coins.id} {coins.symbol} {coins.quotes.USD.price}
                </option>
                ))}
            </select>

        </div>
    )
}

export default App;