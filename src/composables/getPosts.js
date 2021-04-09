import { ref, watchEffect } from "vue";
import { projectFirestore } from "../firebase/config";

const getPosts = (collection) => {
    const posts = ref([]);
    const error = ref(null);
    
    const collectionRef = projectFirestore.collection(collection)
    .orderBy("createdAt", "desc")
    
    const unsubscribe = collectionRef.onSnapshot((snapshot) => {
      const results = [];
      snapshot.docs.forEach((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      })

      posts.value = results;
      error.value = null;

    }, (err) => {
        posts.value = null;
        error.value = err.message;
    });

    watchEffect((onInvalidate) => {
      onInvalidate(() => unsubscribe());
    });

    return { posts, error };
}

export default getPosts;