import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogIn = () => {

 const { signInWithGoogle } = useContext(AuthContext);
 const navigate = useNavigate()
 const location = useLocation()

  const from = location.state?.pathname || "/"

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                // Signed in
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
                // ...
            })
            .catch((error) => {
                console.log(error);
                // ..

            });
    }


  return (
    <div>
      <div className="divider">OR sign-In with</div>

      <div className="text-center">
        <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">G</button>
      </div>
    </div>
  );
};

export default SocialLogIn;
