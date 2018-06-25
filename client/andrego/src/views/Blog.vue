<template>
  <main class="blogWrapper">
    <div class="postListWrapper">
      <post
        v-for="number in array"
        :number="number"
      />
    </div>
    <div class="blogNavigation">
      <div class="">
        <ul>
          <li><router-link :to="{ name: 'blog'}">Главная</router-link></li>
          <li><router-link :to="{ name: 'blog'}">Главная</router-link></li>
          <li><router-link :to="{ name: 'blog'}">Главная</router-link></li>
          <li><router-link :to="{ name: 'blog'}">Главная</router-link></li>
        </ul>
      </div>
      <div class="">
        <ul>
          <li><router-link :to="{ name: 'blog'}">Главная</router-link></li>
          <li><router-link :to="{ name: 'blog'}">Главная</router-link></li>
          <li><router-link :to="{ name: 'blog'}">Главная</router-link></li>
          <li><router-link :to="{ name: 'blog'}">Главная</router-link></li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>

import Post from '@/components/Post.vue'

export default {
  components: {
    Post
  },
  data () {
    return {
      array: [1, 2, 3, 4, 5, 6, 7, 8],
    }
  }
}
</script>

<style lang="css">
  .blogWrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;

  }
  .postListWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 2em;
  }
  .blogNavigation {
    border: 1px solid #FAFAFA;
    width: 25vh;

  }
</style>
