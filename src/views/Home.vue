<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import PostList from "../components/PostList";
import TagCloud from "../components/TagCloud";
import getPosts from "../composables/getPosts";
import Spinner from "../components/Spinner";

export default {
  name: "Home",
  components: {
    PostList,
    Spinner,
    TagCloud,
  },
  setup() {
    let { posts, error, load } = getPosts();

    load();

    return { posts, error };
  },
};
</script>
<style>
.home {
  max-width: 2400px;
  margin: 0 auto;
  padding: 10px;
}
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
