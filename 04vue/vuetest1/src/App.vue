<template>
   <NavbarView />

   <div class="container">
      <h2 class="mb-10">HOT & NEW</h2>
      <div class="cardWrap">
         <div class="card" v-for="(item, i) in data" v-bind:key="i">
            <div class="imgWrap">
               <img v-bind:src="`./images/${item.img}`" v-bind:alt="`${item.img}`" />
               <div class="hot" v-if="item.hoticon">HOT</div>
            </div>
            <div class="cardBody">
               <h4>😍{{ item.title }}</h4>
               <p>대여 {{ item.won }}</p>
               <p>👍 {{ item.like }} <button @:click="increaseLike(i)">클릭</button></p>
            </div>
            <div class="btn btn-primary" v-on:click="modalOpen(i)">상세보기</div>
         </div>
      </div>
   </div>

   <ModalView v-bind:mydata="data" :isModal="isModal" :num="selectedNum" @closeModal="closeM" />
</template>

<script>
import mdata from './assets/mdata';
import NavbarView from './components/NavbarView.vue';
import ModalView from './components/ModalView.vue';

export default {
   name: 'appView',
   data() {
      return {
         data: mdata,
         isModal: false,
         selectedNum: 0,
      };
   },
   methods: {
      increaseLike(i) {
         //   함수임 !!! i값 = index값 -> 인덱스 값 받아서 숫자 더함
         console.log(i);
         this.data[i].like += 1; // 값을 변경할 때는 this 붙여야함 !!
      },
      modalOpen(num) {
         this.isModal = true;
         this.selectedNum = num;
      },
      closeM() {
         this.isModal = false;
      },
   },
   components: {
      NavbarView: NavbarView,
      ModalView: ModalView,
   },
};
</script>

<style lang="scss" scoped>
$radius: 5px;
.container {
   width: 1000px;
   margin: 0 auto;

   @media screen and (max-width: 790px) {
      // 미디어 쿼리 ->  790보다 미만이 되어버리면 크기값을 100%로 쓰겠다
      width: 100%;
      padding: 0 16px;
   }
   img {
      display: block;
   }
}

.cardWrap {
   display: flex;
   flex-wrap: wrap;
   gap: 10px;

   .card {
      width: calc((100% - 30px) / 4);
      @media screen and (max-width: 790px) {
         width: calc((100% - 10px) / 2);
      }
      @media screen and (max-width: 560px) {
         width: 100%;
      }

      .imgWrap {
         width: 100%;
         position: relative;
         overflow: hidden;
         cursor: pointer;
         border-radius: $radius;

         img {
            width: 100%;
            transition: 0.3s;
         }
         &:hover img {
            transform: scale(1.1);
         }
         .hot {
            position: absolute;
            top: 10px;
            left: 10px;
            background-color: skyblue;
            padding: 2px 10px;
            border-radius: 5px;
            font-weight: bold;
            color: white;
         }
      }
   }
}

.mb-10 {
   margin-bottom: 10px;
}

.btn {
   background: pink;
   border-radius: $radius;
   padding: 5px 16px;
   text-align: center;
   cursor: pointer;
   color: white;
   border: 0 none;
   display: block;
   width: 100%;

   &.btn-primary {
      background-color: skyblue;
   }
   &.btn-info {
      background-color: greenyellow;
   }
}
</style>
