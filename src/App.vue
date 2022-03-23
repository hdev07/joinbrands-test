<template>
  <div>
    <Navbar/>
    <section id="Home">
      <Home/>
    </section>
    <section id="Products">
      <Products/>
      
    </section>
    <section id="Subs">
      
    </section>
  </div>
</template>

<script>
import Navbar from './components/Navbar/navbar.vue'
import Home from './components/Home/home.vue'
import Products from './components/Products/products.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    Products
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
