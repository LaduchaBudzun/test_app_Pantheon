<template>
  <div class="filter">
      <div class="currency">
        <span>Currency</span>
        <div class="currency_switch">
          <div class="eth" :class="{activeCurrency: filter.currency == 'ETH'}" @click="changeFilter('currency' ,'ETH')">ETH</div>
          <div class="usd" :class="{activeCurrency: filter.currency == 'USD'}" @click="changeFilter('currency' ,'USD')">USD</div>
        </div>
      </div>
      <Availability/>
      <div class="price_range">
        <span>Price range</span>
        <div class="price_range-inputs">
          <div class="price">
            <input type="number" placeholder="Min">
            <span>{{filter.currency}}</span>
          </div>
          <div class="price">
            <input type="number" placeholder="Max">
            <span>{{filter.currency}}</span>
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
        currency:'ETH',
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
  width: 245px;
  border-radius: 10px;
  background: $black;
  position: sticky; /* Липкое позиционирование */
  left: 0;
  top: 100px;
  margin-left: 30px;
  z-index: 2;
}
.price_range {
  margin-top: 50px;
  max-width: 245px;
  span {
    font-weight: 800;
  }
}
.price_range-inputs {
  margin-top: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  div {
    height: 60px;
    width: 48%;
    display: flex;
    border-radius: 10px;
    border: 1px solid white;
  }
  .price {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: 14px;
      margin-right: 10px;
    }
    input {
      padding-left: 15px;
      font-size: 16px;
      width: 100%;
      height: 80%;
      border: none;
      background-color: black;
      color: #fff;
      outline: none;
    }
    input::placeholder {
      font-size: 14px;
      color: rgb(146, 146, 146);
    }
    input[type="number"] {
      -moz-appearance: textfield;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
}
.currency {
  max-width: 245px;
  font-weight: 800;
}
.currency_switch {
  font-weight: 700;
  padding-top: 20px;
  max-width: 245px;
  width: 100%;
  display: flex;
  cursor: pointer;
  div {
    width: 50%;
    padding: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
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
</style>