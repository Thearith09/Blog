import { ref } from "@vue/reactivity";
import { projectAuth } from "../firebase/config";

const error = ref(null);

const signup = async (email, password, displayName) => {
    error.value = null;

    try {
        const response = await projectAuth.createUserWithEmailAndPassword(email, password);
        await  response.user.updateProfile({ displayName });

    } catch (err) {
        error.value  = err.message;
    }
};

const useSignup = () => {
    return { error, signup };
};

export default useSignup;
