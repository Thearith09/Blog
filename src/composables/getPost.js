import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const getPost = (id) => {
    const post = ref(null);
    const error = ref(null);
    
    const load = async () => {
      try {
        const result = await projectFirestore.collection("posts").doc(id).get();
        if (!result.exists) throw new Error("A post with the given id doesn't exist!"); 

        post.value = { ...result.data(), id: result.id };
        
      } catch (err) {
        error.value = err.message;
      }
    };

    return { post, error, load };
}

export default getPost;