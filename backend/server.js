const express = require('express')
const app = express();
const cors = require("cors");
app.use(cors());

require("dotenv").config()

const apikey= process.env.api_key;

const get_names_base_url = "https://financialmodelingprep.com/stable/search-name?query=" ;


app.get("/stocks/:name",async (req, res)=> {

const stock_name = req.params.name;
const get_names_api_url = `https://financialmodelingprep.com/stable/search-name?query=${ stock_name }&apikey=${apikey}`;
    try {
    const get_list_of_stocks = await fetch(get_names_api_url);

if(get_list_of_stocks.ok){

    const array_stocks = await get_list_of_stocks.json();


res.status(200).send(array_stocks);


}
else {
    throw new Error ("smth went wrong")
}
}
    catch(error)
    {
        res.status(500).send("error from server");
    }


    
});


app.get("/stock/details/:symbol", async (req,res)=>
{
try {
    const stock_symbol = req.params.symbol ;
    const stock_details_url = `https://financialmodelingprep.com/stable/profile?symbol=${stock_symbol}&apikey=${apikey}`;


    const stock_details = await fetch(stock_details_url);
    if(stock_details.ok)
    {
        const stock_info = await stock_details.json();
        res.status(200).send(stock_info);
    }
    else
        {
        throw new Error ;
    }
}
catch{
    res.status(500).send("smth went wrong");
}
} );

app.listen(5001);














