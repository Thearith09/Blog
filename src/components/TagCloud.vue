<template>
  <div class="tag-cloud">
    <h3>Tags</h3>
    <div v-for="tag in tags" :key="tag">
      <router-link :to="{ name: 'Tag', params: { tag: tag } }"
        >#{{ tag }}</router-link
      >
    </div>
  </div>
</template>

<script>
import getTags from "../composables/getTags";

export default {
  props: ["posts"],
  setup(props) {
    const { tags } = getTags(props.posts);

    return { tags };
  },
};
</script>

<style>
.tag-cloud {
  padding: 10px;
}
.tag-cloud h3 {
  border-bottom: 1px solid #eee;
  padding: 16px 8px;
  color: #444;
}
.tag-cloud div {
  display: inline-block;
  padding: 10px;
}
.tag-cloud a {
  color: #ccc;
  text-decoration: none;
}
.tag-cloud a.router-link-active {
  color: #f80;
  font-weight: bold;
}
</style>
