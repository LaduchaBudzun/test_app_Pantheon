<template>
  <div class="items">
    <div v-for="item in items" :key="item">
        <Item :item="item" class="item"/>
    </div>
  </div>
</template>

<script>
import Item from './Item.vue'
export default {
    name:'Items',
    components:{
        Item
    },
    props:{
        items:Array,
        
    },
    data() {
      return{
        show:false
      }
    }

}
</script>

<style lang='scss' scoped>
.item {
  opacity: 0;
  animation: ani 2.5s forwards;
}
@keyframes ani {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.items {
  max-width: 1200px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 20px;
}
</style>