<template>
  <div class="home">
   <div class="header_filter-container">
      <div class="header_filter">
        <Dropdown v-model="sorting" :options="filterOptions" />
      </div>
   </div>
      
      <div class="home_content" >
        <div><Filter/></div>
        <div class="items" v-if="items.length > 0"> 
          <Items :items="items"/>
          <Button v-if="pageYOffset>1000" @click="scroolUp()" icon="pi pi-arrow-up" class="p-button-rounded p-button-warning btn-up" /> 
          <div v-if="items.length == 0 || loadingNewItems && showWarn <= 0" class="loading">
            <ProgressSpinner/>
          </div>
          <div class="end_items" >
            <Toast />
          </div>
        </div>
        <div v-else class="loading">
            <ProgressSpinner/>
        </div>
         
      </div>
   
  </div>
</template>

<script>
import {mapActions,mapGetters,mapMutations} from 'vuex'
import { debounce } from 'vue-debounce'
import Toast from 'primevue/toast'
import Filter from '@/components/Filter/Filter.vue'
import Items from'@/components/Items.vue'

export default {
  name: 'Home',
  components: {
    Items,
    Filter,
    Toast
  },
  data() {
    return{
      filterOptions:[
        'Price: Low to high',
      ],
      sorting:'Price: Low to high',
      pageYOffset:0,
      page:0
    }
  },
  mounted () {
    window.addEventListener('scroll', debounce(this.onScroll,'200ms'));
    this.getItemsNFT(0)
  },
  unmounted () {
    window.removeEventListener('scroll', this.onScroll);
  },
  computed:{
    ...mapGetters(['items','loadingNewItems','showWarn'])
  },
  watch: {
    showWarn(){
      this.showWarnFunc()
    }
  },
  methods:{
    ...mapMutations(['changeLoadingNewItems']),
    ...mapActions(['getItemsNFT']),

      onScroll(){
        this.pageYOffset = window.pageYOffset // find user by Y
        const pageForGetItems = this.page 
        
        if(Math.trunc(this.pageYOffset / 1500)  >= (pageForGetItems + 10) / 10){//checking for the user's location relative to the pages
            
          this.changeLoadingNewItems(true)
          
          if((pageForGetItems + 10) == this.items.length || (pageForGetItems + 10) == this.items.length + 1){// 
              this.page = pageForGetItems + 10
              this.getItemsNFT(this.page)
          }
          
        }      
  },
  showWarnFunc() {
    this.$toast.add({severity:'warn', summary: 'Warn Message', detail:'All NFTs loaded', life: 30000});
  },
  scroolUp(){
    window.scrollTo(0,0)
  }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/variables.scss";

.loading {
  padding: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.home {
}
.btn-up {
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 2;
}
.items {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 20px;
  margin-left: 10px;
}
.header_filter-container {
  display: flex;
  justify-content: center;
  max-width: 1348px;
  margin: 0 auto;
}
.header_filter {
  width: 100%;
  margin: 40px 0 40px 0;
  display: flex;
  justify-content: flex-end;
  .p-dropdown {
    right: 0;
    background-color: black;
    color: white;
  }
}
.home_content {
  height: 100%;
  display: flex;
  margin: 0 auto;
  gap: 30px;
  max-width: 1450px;
}
</style>
