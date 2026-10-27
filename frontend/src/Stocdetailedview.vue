<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue' 


type StockData = {
  symbol: string
  price: number
  marketCap: number
  beta: number
  lastDividend: number
  range: string
  change: number
  changePercentage: number
  volume: number
  averageVolume: number
  companyName: string
  currency: string
  exchangeFullName: string
  exchange: string
  industry: string
  website: string
  description: string
  ceo: string
  sector: string
  country: string
  fullTimeEmployees: string
  phone: string
  address: string
  city: string
  state: string
  zip: string
  image: string
  ipoDate: string
  isEtf: boolean
  isActivelyTrading: boolean
  isAdr: boolean
  isFund: boolean
}


const route = useRoute()
const symbol = route.params.symbol

const stock_data = ref<StockData | null >(null)


const fetch_url = "http://localhost:5001/stock/details/" + symbol;

 async function get_stock_detailed_info()
 {
    try {
        const response = await fetch(fetch_url)
             if(response.ok)
    {
        const parsed_data: StockData[] = await response.json()

        stock_data.value = parsed_data[0]
    }
        
        
    } catch (error) {
        console.log("smth went wrong")
    }

 }
onMounted(get_stock_detailed_info)
</script>


<template>
  <div v-if="stock_data">

    <section class="stock-header">
      <img :src="stock_data.image" :alt="stock_data.companyName">

      <div>
        <h1>{{ stock_data.companyName }}</h1>
        <p>{{ stock_data.symbol }} · {{ stock_data.exchangeFullName }}</p>

        <h2>
          {{ stock_data.price }} {{ stock_data.currency }}
        </h2>

        <p>
          {{ stock_data.change }}
          ({{ stock_data.changePercentage }}%)
        </p>
      </div>
    </section>

    <section class="market-stats">
      <h2>Market Data</h2>

      <p>Market Cap: {{ stock_data.marketCap }}</p>
      <p>Volume: {{ stock_data.volume }}</p>
      <p>Average Volume: {{ stock_data.averageVolume }}</p>
      <p>Beta: {{ stock_data.beta }}</p>
      <p>52 Week Range: {{ stock_data.range }}</p>
      <p>Last Dividend: {{ stock_data.lastDividend }}</p>
    </section>

    <section class="company-info">
      <h2>Company</h2>

      <p>Sector: {{ stock_data.sector }}</p>
      <p>Industry: {{ stock_data.industry }}</p>
      <p>CEO: {{ stock_data.ceo }}</p>
      <p>Employees: {{ stock_data.fullTimeEmployees }}</p>
      <p>IPO Date: {{ stock_data.ipoDate }}</p>
      <p>Country: {{ stock_data.country }}</p>
    </section>

    <section class="company-description">
      <h2>About</h2>

      <p>{{ stock_data.description }}</p>

      <a :href="stock_data.website" target="_blank">
        Company Website
      </a>
    </section>

  </div>
</template>

