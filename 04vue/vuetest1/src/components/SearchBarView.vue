<template>
   <div class="container">
      search
      <!-- <input type="search" @input="inputText = $event.target.value" placeholder="검색어를 입력하세요." /> -->
      <!-- <input type="search" v-model="inputText" placeholder=" 검색어를 입력하세요." /> -->

      <!-- <input
         type="search"
         @change="
            $emit('searchMovie',$event.target.value); // 값을 보내는것을 받음
            inputText = $event.target.value;
            $event.target.value = '';
         "
      /> -->

      <input type="search" @change="handleSearch" placeholder="검색어를 입력하세요." />
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
   methods: {
      handleSearch(event) {
         //event -> e로 바꿔도됨
         this.$emit('searchMovie', event.target.value); // searchMovie 값이 전송됨
         // this.$emit -> 자식 컴포넌트에서 이벤트를 발생시켜 부모 컴포넌트로 전달함
         // searchMovie라는 이름의 이벤트를 발생시킴 event.target.value는 input 요소의 값 (이벤트가 발생한 요소의 현재 값을 가져올 때 사용)
         this.inputText = event.target.value; // test값을 내가 친 걸로 바꿔줌
         event.target.value = '';
      },
   },
   watch: {
      inputText(name) {
         console.log(name);
         const findName = this.data.filter(movie => {
            // 객체 이름은 영향을 미치지 않으므로 아무거나 써도 됨 item으로 써도 됨
            // 단 return 문 안에는 movie. <<으로 잘 써야함
            // 프로그래머스 1단계 문제 자스로???
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
