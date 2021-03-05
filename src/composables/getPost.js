import { ref } from "vue";

const getPost = (id) => {
    const post = ref(null);
    const error = ref(null);
    
    const load = async () => {
      try {
        //simulate delay
        await new Promise((resolve) => {
          setTimeout(resolve, 2000);
        });
        
        const data = await fetch("http://localhost:2000/posts/" + id);
        if (data.status !== 200) throw new Error("No data available");
        post.value = await data.json();
      } catch (err) {
        error.value = err.message;
        console.log(error.value);
      }
    };

    return { post, error, load };
}

export default getPost;