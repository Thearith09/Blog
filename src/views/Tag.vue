<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="postsWithTag.length" class="layout">
      <PostList :posts="postsWithTag" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import getPosts from "../composables/getPosts";
import Spinner from "../components/Spinner";
import PostList from "../components/PostList";
import TagCloud from "../components/TagCloud";
import { computed } from "vue";
export default {
  components: {
    Spinner,
    PostList,
    TagCloud,
  },
  setup() {
    const route = useRoute();
    const { posts, error } = getPosts("posts");

    const postsWithTag = computed(() => {
      return posts.value.filter((post) => post.tags.includes(route.params.tag));
    });

    return { error, postsWithTag, posts };
  },
};
</script>

<style>
.tag {
  max-width: 2400px;
  margin: 0 auto;
  padding: 10px;
}
</style>
