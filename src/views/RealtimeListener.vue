<template>
  <h1>Realtime Listener</h1>
  <div v-for="post in posts" :key="post.id">
    {{ post.title }}
  </div>
</template>

<script>
import { ref } from "vue";
import { projectFirestore } from "../firebase/config";
export default {
  setup() {
    const posts = ref([]);

    projectFirestore
      .collection("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        let docs = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        posts.value = docs;
      });

    return { posts };
  },
};
</script>

<style></style>
