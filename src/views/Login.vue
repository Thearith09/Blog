<template>
  <form @submit.prevent="handleLogin">
    <h1>Login</h1>
    <input type="emial" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <div v-if="error" class="error">{{ error }}</div>
    <button v-if="!isPending">Login</button>
    <button v-if="isPending" disabled>Loading...</button>
    <h4>
      registered yet? <span @click="handleLink" class="link">Signup</span>
    </h4>
  </form>
</template>

<script>
import useLogin from "@/composables/useLogin";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const { error, login } = useLogin();
    const router = useRouter();
    const isPending = ref(false);

    const handleLogin = async () => {
      isPending.value = true;
      await login(email.value, password.value);

      if (!error.value) {
        router.push({ name: "Home" });
      } else {
        isPending.value = false;
      }
    };

    const handleLink = () => {
      router.push({ name: "Signup" });
    };

    isPending.value = false;
    return { error, handleLogin, email, password, isPending, handleLink };
  },
};
</script>

<style scoped>
form {
  max-width: 400px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 1px 2px 3px rgba(50, 50, 50, 0.5);
  border: 2px solid #ebebeb;
  background-color: white;
}
input,
textarea {
  border: 0;
  border-bottom: 1px solid #ebebeb;
  padding: 10px;
  outline: none;
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin: 20px auto;
}
.error {
  color: #da0f41;
  font-size: 14px;
  margin: 16px 0;
}

.link {
  cursor: pointer;
  text-decoration: underline;
  color: #f80;
}
</style>
