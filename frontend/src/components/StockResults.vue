
<script setup lang="ts">
import { computed } from 'vue'



type Stock = {
  symbol: string
  name: string
  currency: string
  exchangeFullName: string
  exchange: string
}

const props = defineProps<{
  stocks: Stock[]
}>()


const array_of_stocks = computed(() => props.stocks.slice(0, 10))


</script>


<template>
<table>
    <thead>
        <tr>
        <th>symbol</th>
        <th>name</th>
        <th>currency</th>
        <th>exchange</th>
        </tr>
    </thead>


<tbody>
    <tr v-for="stock in array_of_stocks" :key="`${stock.symbol}-${stock.exchange}`">
        <td>{{stock.symbol}}</td>
        <td>{{stock.name}}</td>
        <td>{{stock.currency}}</td>
        <td>{{stock.exchange}}</td>
    </tr>

</tbody>
</table>









    </template>
