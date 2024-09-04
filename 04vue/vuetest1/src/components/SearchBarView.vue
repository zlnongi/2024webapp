<template>
   <div class="container">
      search
      <!-- <input type="search" @input="inputText = $event.target.value" placeholder="검색어를 입력하세요." /> -->
      <!-- <input type="search" v-model="inputText" placeholder=" 검색어를 입력하세요." /> -->
      <input type="search" @change="inputText = $event.target.value" />

      <button>검색</button>

      <p>{{ inputText }}</p>
      <!-- <p>{{ data }}</p> -->
   </div>
</template>

<script>
export default {
   name: 'SearchComp',
   props: {
      data: Object,
   },
   data() {
      return {
         inputText: 'test',
      };
   },
   watch: {
      inputText(name) {
         console.log(name);
         const findName = this.data.filter(movie => {
            return movie.title.includes(name); // 타이틀이 있는지 없는지 확인해주는 코드
         });
         console.log(findName.length);
         if (findName.length == 0) {
            alert('영화자료가 없습니다 !!!');
         }
      },
   },
};
</script>

<style lang="scss" scoped></style>
