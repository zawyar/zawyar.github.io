import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { useAuth } from "~/lib/firebase";

export const SignInButton = () => {
  const handleClick = () => {
    const provider = new GoogleAuthProvider();
    const auth = useAuth();

    signInWithRedirect(auth, provider);
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className="btn btn-primary normal-case min-w-60"
    >
      Sign In With Google
    </button>
  );
};
