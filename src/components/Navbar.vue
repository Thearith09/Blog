<template>
  <header>
    <h1>The Blog</h1>
    <nav v-if="user">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Create' }">Create Post</router-link>
      <a @click="handleLogout">Logout</a>
    </nav>
  </header>
</template>

<script>
import { projectAuth } from "@/firebase/config";
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

export default {
  setup() {
    const user = ref(projectAuth.currentUser);
    const router = useRouter();

    projectAuth.onAuthStateChanged((_user) => {
      user.value = _user;
    });

    const handleLogout = async () => {
      await projectAuth.signOut();
      router.push({ name: "Login" });
    };

    return { handleLogout, user };
  },
};
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 0 auto;
  padding: 10px;
}
header h1 {
  color: #dfdfdf;
  font-size: 48px;
}
header a {
  color: #bbb;
  text-decoration: none;
  margin-left: 20px;
  cursor: pointer;
}
header a.router-link-active {
  color: #444;
  font-weight: bold;
}
</style>
