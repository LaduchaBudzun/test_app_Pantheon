<template>
  <div class="item">
    <div class="img_container">
      <img src="https://img.seadn.io/files/c9e06301b47a05fb9ed01024ba181519.png?h=512&w=512&auto=format" alt="" >
    </div>
    <div class="info">
      <div class="top_info">
        <div class="info-type">
          <div class="collection">
            <span class="collection_name">TYLER</span>
            <img src="@/assets/img/verified.svg" alt="">
          </div>
          <div class="name-of-nft">Special form</div>
        </div>
        <div class="price_info">
          <button class="btn_buy-now">Buy now</button>
          <div class="price">0.001 ETH</div>
        </div>
      </div>
      <div class="bottom_info">
        <div class="bottom_info-type">Utility type</div>
        <div>Merchandise</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Item',
}
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";

.item {
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
  img {
    position: relative;
    top: 2px;
  }
  &_name {
    padding-right: 4px;
    font-size: 10px;
    font-weight: 700;
    color: rgb(100, 100, 100);
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
