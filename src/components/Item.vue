<template>
  <div class="item">
    <div class="img_container">
      <img v-if="urlImg" :src="item.image" alt="" class="nft_img">
      <img v-else src="@/assets/img/img_none.jpg" alt="" class="nft_img">
    </div>
    <div class="info">
      <div class="top_info">
        <div class="info-type">
          <div class="collection">
            <div class="collection_name">{{item.collectionName.toUpperCase()}}</div>
            <img src="@/assets/img/verified.svg" alt="">
          </div>
          <div class="name-of-nft">{{item.name}}</div>
        </div>
        <div class="price_info">
          <button class="btn_buy-now">Buy now</button>
          <div v-if="item.price" class="price">{{item.price.toFixed(3)}} ETH</div>
          <div v-else class="price">~ ETH</div>
        </div>
      </div>
      <div class="bottom_info">
        <div class="bottom_info-type">Utility type</div>
        <div>{{item.utilityType}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props:{
    item:Object
  },
  data(){
    return {
      urlImg:''
    }
  },
  mounted (){
    this.getImgbyURL(this.item.image)
  },
  methods: {
      async getImgbyURL(url){
        const response = await fetch(url)
        if(response.status == 200){
          this.urlImg = true
        }else {
          this.urlImg = false 
        }
        
      },
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.btn_buy-now {
  cursor: pointer;
}
.nft_img {
  max-height: 340px;
  max-width: 350px;
  width: 100%;
}
.name-of-nft {
  max-width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item {
  height: 580px;
  background-color: #ffffff;
  color: black;
  max-width: 380px;
  min-width: 280px;
  width: 100%;
  border-radius: 20px;
}
.info {
  margin-top: 20px;
}
.img_container {
  padding: 20px;
  img {
    max-width: 100%;
    border-radius: 20px;
  }
}
.btn_buy-now {
  font-weight: 700;
  border: none;
  background-color: #ffffff;
  color: $orange;
}
.collection {
  display: flex;
  img {
    position: relative;
    top: 2px;
  }
  &_name {
    padding-right: 4px;
    font-size: 10px;
    font-weight: 700;
    color: rgb(100, 100, 100);
    max-width: 120px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.top_info {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  padding-bottom: 30px;
}
.bottom_info {
  text-align: center;
  padding: 20px;
  &-type {
    font-family: "Proxima_Nova";
    color: #ccc;
  }
}
</style>
