import { ref, watchEffect } from "vue";
import { projectFirestore } from "../firebase/config";

const getPost = (collection, id) => {
    const post = ref(null);
    const error = ref(null);

    const documentRef = projectFirestore.collection(collection).doc(id);

    const unsubscribe = documentRef.onSnapshot((doc) => {
      if (doc.data()) {
        post.value = { ...doc.data(), id: doc.id };
        error.value = null;

      } else {
        error.value = `The doc with the given ${id} doesn't exist`;
        post.value = null;
      }

    }, (err) => {
      error.value = err.message;
      post.value = null;

    });

    watchEffect((onInvalidate) => {
      onInvalidate(() => unsubscribe());
    });

    return { post, error };
}

export default getPost;