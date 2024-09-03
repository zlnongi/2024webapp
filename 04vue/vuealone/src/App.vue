<template>
   <div class="container secWrap">
      <h2>Hot & NEW</h2>
      <div class="cardWrap">
         <div class="card" v-for="(item, i) in data" v-bind:key="i">
            <div class="imgWrap">
               <img v-bind:src="`./images/${item.img}`" v-bind:alt="`${item.img}`" />
            </div>
            <div class="cardText">
               <h4>{{ item.title }}</h4>
               <p>💕{{ item.num }}</p>
               <p>대여: {{ item.won }}</p>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import mdata from './assets/mdata';

export default {
   name: 'App',
   data() {
      return {
         data: mdata,
      };
   },
};
</script>

<style lang="scss" scoped>
.secWrap {
   padding: 5px 16px;
}
.container {
   width: 1300px; // 최초값
   margin: 0 auto;
   // background: $primary-color;

   @media screen and (max-width: 1300px) {
      // 반응형
      width: 100%;
   }
}

.cardWrap {
   display: flex;
   gap: 10px;
   .card {
      width: 212px;
      .imgWrap {
         width: 100%;
         overflow: hidden; // 넘쳐나는걸 가려주겠다 (부모한테 줘야함 이미지의 부모)
         border-radius: 5px;

         img {
            display: block;
            width: 110%;
            transition: 0.3s;
         }
         &:hover {
            transform: scale(1.05);
         }
      }
      .cardText {
         padding: 5px;
      }
   }
}
</style>
