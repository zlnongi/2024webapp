<template>
   <div class="container secWrap">
      <h3>HOT & NEW</h3>
      <div class="cardWrap">
         <div class="card" v-for="(item, i) in data" v-bind:key="i">
            <div class="imgWrap">
               <img v-bind:src="`./images/${item.img}`" alt="" />
            </div>
            <div class="cardText">
               <h3>{{ item.title }}</h3>
               <!-- title에 binding해줌 -->
               <p>💕{{ item.num }}</p>
               <p>대여 : {{ item.won }}</p>
            </div>
         </div>
      </div>
   </div>

   <!-- <ul> -->
   <!-- <li v-for="item in array">{{ item }}</li> array: todos item: 몇번돌리냐 -->
   <!-- <li v-for="(item, i) in todos" v-bind:key="i">
            {{ item }}
         </li>
      </ul>

      <div v-for="(item, index) in todos" :key="index">{{ item }}</div> -->
</template>

<script>
export default {
   name: 'App',
   data() {
      return {
         todos: ['서울', '부산', '대구'],
         data: [
            { title: '핸섬가이즈', num: '8.6', won: '11,000', img: 'handsome.jpg' },
            { title: '탈주', num: '8.1', won: '11,000', img: 'movie.jpg' },
            { title: '하이재킹', num: '8.7', won: '10,900', img: 'high.jpg' },
         ],
      };
   },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/style.scss';
.secWrap {
   padding: 5px 16px;
}

.cardWrap {
   display: flex;
   gap: 10px;
   .card {
      width: 212px;

      .imgWrap {
         width: 100%;
         overflow: hidden;
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
