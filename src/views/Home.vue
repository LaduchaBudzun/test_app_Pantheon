<template>
  <div class="home">
    <div class="header_filter">
      <Dropdown v-model="sorting" :options="filterOptions" />
    </div>
    <div class="home_content" @scroll="onScroll">
      <Filter/>
      <div class="items"> 
        <Item v-for="item in items" :key="item"/>
        <button @click="scroolUp()">scroolUp</button>
      </div>
    </div>
   
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import Filter from '@/components/Filter/Filter.vue'
import Item from'@/components/Item.vue'

export default {
  name: 'Home',
  components: {
    Item,
    Filter
  },
  data() {
    return{
      filterOptions:[
        'Price: Low to high',
      ],
      sorting:'Price: Low to high',
      items:[
        1,2,3,4,5,6,7
      ]
    }
  },
  created () {
    window.addEventListener('scroll', this.onScroll);
  },
  unmounted () {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods:{
    ...mapActions(['NFT_items/']),
      onScroll(){
        // console.log(document.body.scrollHeight)
        // console.log(document.body.clientHeight)
      //   let scrollHeight = Math.max(
      //   document.body.scrollHeight, document.documentElement.scrollHeight,
      //   document.body.offsetHeight, document.documentElement.offsetHeight,
      //   document.body.clientHeight, document.documentElement.clientHeight
      // );
      // console.log(scrollHeight)
      console.log(window.pageYOffset )
        

        
  //делаем какие-то действия во время прокрутки
  },
  scroolUp(){
    window.scrollTo(0,0)
  }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/variables.scss";
.home {
}
.items {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}
.header_filter {
  max-width: 1420px;
  width: 100%;
  margin: 40px 40px;
  display: flex;
  justify-content: flex-end;
  .p-dropdown {
    right: 0;
    background-color: black;
    color: white;
  }
}
.home_content {
  display: flex;
  margin: 0 auto;
  gap: 30px;
}
.items {
  max-width: 1200px;
}
</style>
