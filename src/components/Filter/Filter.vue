<template>
  <div class="filter">
      <div class="currency">
        <span>Currency</span>
        <div class="currency_switch">
          <div class="eth" :class="{activeCurrency: filter.currency == 'eth'}" @click="changeFilter('currency' ,'eth')">ETH</div>
          <div class="usd" :class="{activeCurrency: filter.currency == 'usd'}" @click="changeFilter('currency' ,'usd')">USD</div>
        </div>
      </div>
      <Availability/>
      <div class="price_range">
        <span>Price range</span>
        <div class="price_range-inputs">
          <div class="price">
            <span>Min</span>
            <input type="number">
          </div>
          <div class="price">
            <span>Max</span>
            <input type="number">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Availability from './availability.vue'
export default {
    name:'Filter',
    components:{
      Availability
    },
    data() {
    return{
      filter:{
        currency:'usd',
        sorting:''
      },

    }
  },
  methods:{
    changeFilter(obj,value){
        this.filter[`${obj}`] = value
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.filter {
  max-width: 270px;
  border-radius: 10px;
  background: $black;
  position: sticky; /* Липкое позиционирование */
  left: 0;
  top: 100px;
  z-index: 2;
}
.price_range {
  margin-top: 50px;
  max-width: 262px;
}
.price_range-inputs {
  margin-top: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  div {
    padding: 16px;
    width: 45%;
    display: flex;
    border-radius: 10px;
    border: 1px solid white;
  }
  .price {
    span {
      color: #ccc;
    }
    input {
      width: 40px;
      height: 30px;
      border: none;
      background-color: black;
      color: #fff;
    }
  }
}
.currency {
  max-width: 245px;
}
.currency_switch {
  padding-top: 20px;
  max-width: 245px;
  width: 100%;
  display: flex;
  cursor: pointer;
  div {
    padding: 17px 41px;
    transition: 0.4s;
  }
  .eth {
    border-radius: 10px 0px 0px 10px;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
  }
  .usd {
    border-radius: 0px 10px 10px 0px;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
  }
  div:hover {
    border-color: $orange;
  }
}
.activeCurrency {
  background: $orange;
  border-color: $orange !important;
}
.availability {
  margin-top: 65px;
  max-width: 245px;
}
</style>