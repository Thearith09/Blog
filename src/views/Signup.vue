<template>
  <form @submit.prevent="handleSignup">
    <h1>Signup</h1>
    <input type="text" placeholder="Username" v-model="displayName" />
    <input type="emial" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <input
      type="password"
      placeholder="confirm password"
      v-model="confirmPassword"
    />
    <div v-if="error" class="error">{{ error }}</div>
    <button v-if="!isPending">Singup</button>
    <button v-if="isPending">Loading...</button>
    <h4>
      already have account? <span @click="handleLink" class="link">Login</span>
    </h4>
  </form>
</template>

<script>
import useSignup from "@/composables/useSignup";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const email = ref("");
    const displayName = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const { error, signup } = useSignup();
    const router = useRouter();
    const isPending = ref(false);

    const handleSignup = async () => {
      isPending.value = true;
      if (confirmPassword.value == password.value) {
        await signup(email.value, password.value, displayName.value);

        if (!error.value) {
          router.push({ name: "Home" });
        }
      } else {
        error.value = "Password doesn't match!";
      }

      isPending.value = false;
    };

    const handleLink = () => {
      router.push({ name: "Login" });
    };

    return {
      confirmPassword,
      email,
      password,
      displayName,
      isPending,
      error,
      handleSignup,
      handleLink,
    };
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
