<template>
   <NavbarView />
   <ComponentView v-bind:newdata="data" :isModal="isModal" :num="selectedNum" @openModal="modalOpen" />
   <ModalView v-bind:mydata="data" :isModal="isModal" :num="selectedNum" @closeModal="closeM" />
</template>

<script>
import mdata from './assets/mdata';
import NavbarView from './components/NavbarView.vue';
import ModalView from './components/ModalView.vue';
import ComponentView from './components/ComponentView.vue';

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
         console.log('gfg0');
      },
      closeM() {
         this.isModal = false;
      },
   },
   components: {
      NavbarView: NavbarView,
      ModalView: ModalView,
      ComponentView: ComponentView,
   },
};
</script>

<style lang="scss" scoped></style>
