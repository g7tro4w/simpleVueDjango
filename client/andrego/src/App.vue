<template>
  <div id="app">
    <div class="applicationWrapper">
      <transition name="navigation-fade">
        <nav class="navigation" v-if="showNavigation">
          <a href="" @click.prevent="showNavigation = !showNavigation">Yaaaaaaaaaaaaa</a>
          <router-link :to="{ name: 'blog'}">Главная</router-link>
          <router-link :to="{ name: 'blog'}">Блог</router-link>
          <router-link :to="{ name: 'blog'}">Контакты</router-link>
          <router-link :to="{ name: 'blog'}">Вход</router-link>
        </nav>
      </transition>
      <transition name="view-fade">
        <div class="viewWrapper">
          <transition name="fade">
              <router-view></router-view>
          </transition>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return{
        showNavigation: true,
      }
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  body {
    margin: 0;
  }
  #app {
    font-family: 'Roboto', sans-serif;
  }
  .applicationWrapper {
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #edeef0;
  }
  .navigation {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 1em;
    width: 25vh;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    overflow: hidden;
  }
  .viewWrapper {
    height: 100vh;
    width: calc(100% - 25vh);
    overflow-y: scroll;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .navigation-fade-enter-active, .navigation-fade-leave-active {
    transition: width 0.5s linear;
  }
  .navigation-fade-enter, .navigation-fade-leave-to {
    width: 0;
  }
</style>
