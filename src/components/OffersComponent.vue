<template>
    <section class="content__offers center">
      <h2 class="offers-title title-big">{{ $t("offers.title1") }}</h2>
      <h2 class="offers-title title-big">{{ $t("offers.title1_1") }}</h2>
      <ul class="offers-list list center__content">
        <li class="offers-item">
          {{ $t("offers.item1") }}
        </li>
        <li class="offers-item">
          {{ $t("offers.item2") }}
        </li>
        <li class="offers-item">
          {{ $t("offers.item3") }}
        </li>
      </ul>
      <button class="offers__btn btn" @click="openModal">
        {{ $t("offers.buttonText1") }}
      </button>
      <h2 class="offers-title title-big">{{ $t("offers.title2") }}</h2>
      <h2 class="offers-title title-big">{{ $t("offers.title2_1") }}</h2>
      <button class="offers__btn btn" @click="openModal">
        {{ $t("offers.buttonText2") }}
      </button>
      <div class="partners-img  ">
        <img class="partners-img_left" src="../assets/img/offers-left.png">
        <img class="partners-img_left" src="../assets/img/offers-right.png">
      </div>
    </section>
  </template>
  
  <script>
  export default {
    methods: {
      openModal() {
        this.$emit("openModal");
      }
    
  }
}
  </script>
  
  <style scoped>
  @import url("@/assets/common-styles.css");
  .content__offers{
    background-color: #F0EDEB;
    padding: 40px 0 0;    
}
    .offers-title{    
        text-align: center;
    }
    .offers-list{
        display: flex;
        flex-direction: column;
        gap: 22px;
        max-width: 650px;
        margin: 30px auto 0 ;
        text-align: center;
    }
    .offers__btn{
        display: flex;
        margin: 50px auto ;
        background-color:#F0EDEB ;
    }
    .partners-img{    
    justify-content: center;
    padding: 0;
    margin: 0 auto;
    display: flex;
    width: 100%;
}
    .partners-img_left{
        width: 50%;
    }
    .partners-title{
        margin-top: 50px;
        text-align: center;
    }    
    .partners-list{
        display: flex;
        flex-direction: column;
        gap: 22px;
        max-width: 650px;
        text-align: center;
        margin: 30px auto 0;
    }
    .partners__btn{
        display: flex;
        margin: 50px auto ;
    }
@media only screen and (max-width: 767px) {

    .offers-title{
        margin: 0 20px;         
    }      
    .offers-list{         
        gap: 16px;
        max-width: 300px;           
    }      
    .offers__btn{          
        margin: 40px auto ;          
    }
}
    
</style>