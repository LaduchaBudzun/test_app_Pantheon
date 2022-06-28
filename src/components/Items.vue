<template>
  <div class="items">
    <div v-for="item in items" :key="item">
        <Item :item="item" />
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
        
    }

}
</script>

<style lang='scss' scoped>
.items {
  max-width: 1200px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}
</style>