import { ref } from "vue";

const getPosts = () => {
    const posts = ref([]);
    const error = ref(null);
    
    const load = async () => {
      try {
        //simulate delay
        await new Promise((resolve) => {
          setTimeout(resolve, 2000);
        })

        const data = await fetch("http://localhost:2000/posts");
        if (data.status !== 200) throw new Error("No data available");
        posts.value = await data.json();
      } catch (err) {
        error.value = err.message;
        console.log(error.value);
      }
    };

    return { posts, error, load };
}

export default getPosts;