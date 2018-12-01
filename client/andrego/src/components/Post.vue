<template>
  <article class="postWrapper">
    <div class="postHeader">
      <h2>{{ title }}</h2>
    </div>
    <div class="postBody">
      <div class="postImg">
        <img src="https://sun1-18.userapi.com/c840726/v840726721/82904/rflCs3ntil8.jpg" alt="">
      </div>
      <div class="postText">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
    <div class="postFooter">
      <div class="authorSection">
        <p>Admin</p>
      </div>

        <router-link :to="{ name: 'fullPost', params: {id: number} }">
          Подробнее..
        </router-link>

      <div class="dateSection">
        <p>03.05.2018</p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      default: () => {
        return (`Post ${this.id}`)
      },
      required: true
    },
    img: {
      type: String,
      default: () => {
        return (``)
      },
      required: true
    },
    author: {
      type: String,
      default: () => {
        return (`User`)
      },
      required: true
    },
    data: {
      type: Date,
      default: () => {
        return (new Date())
      },
      required: true
    }
  }
}
</script>

<style lang="scss">

.postWrapper {
  padding: 1rem;
  padding-top: 0;
  width: 600px;
  margin-bottom: 2em;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
.postHeader {
  text-align: center;
}

.postBody {
  width: 100%;
}
.postBody p{
  text-indent: 1em;
}
.postImg {
  height: 200px;
  overflow: hidden;
}
.postFooter {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.authorSection {
  font-size: 0.75em;
}
</style>
