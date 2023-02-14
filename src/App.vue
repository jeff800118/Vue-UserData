<template>
  <div>
    <header></header>  
    <router-view></router-view>
    <footer></footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
  export default {
    components:{Header,Footer},
    // created(){
    //   this.$axios.get('/list').then((res)=>{
    //     this.list = res.data.data
    //     console.log(this.list);
    //   }).catch(err =>{
    //     console.log(err)
    //   });
    // },
    }
</script>

<style lang="scss" scoped>

</style>