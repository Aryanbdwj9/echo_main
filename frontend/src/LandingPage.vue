
<script setup lang="ts">
import { ref } from 'vue'
import StockResults from './components/StockResults.vue'

type Stock = {
    symbol: string
    name: string
    currency: string
    exchangeFullName: string
    exchange: string
}

const stock_name = ref<string>("")
const backend_base_url = "http://localhost:5001/stocks/"

   const array_stocks = ref<Stock[]>([])



    async function stock_search() {
        try{
       const response = await fetch(backend_base_url+stock_name.value)
       if (response.ok)
        { array_stocks.value = await response.json() 
             }
        
             else throw new Error
    }
    catch(Error){
            console.log(Error)
    }}



</script>

<template>

  
    <h1> Welcome to Echo! </h1>

    <p> Search for a stock below : </p>


<form @submit.prevent="stock_search">
  <label for="stock">Stock:</label>
  <br>

  <input
    type="text"
    id="stock"
    name="stockname"
    v-model="stock_name"
  >

  <button type="submit">
    <span>Search</span>
  </button>
</form>

<StockResults :stocks="array_stocks" />

 
</template>