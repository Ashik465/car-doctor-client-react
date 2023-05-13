import { Link, useLocation, useNavigate } from "react-router-dom";
import logimg from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import SocialLogIn from "../Shared/SocialLogin/SocialLogIn";

const Login = () => {
  const { signInWithEmail } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.pathname || "/";

  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInWithEmail(email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        
      })
      .catch((error) => {
        console.log(error);
        // ..
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 lg:pr-20">
          <img src={logimg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login </h1>
            <form onSubmit={handleSignIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-orange-500 border-none"
                  type="submit"
                  value="Log-In"
                />
              </div>

              <p className="my-4">
                new to car doctor{" "}
                <Link
                  className=" text-orange-500"
                  state={location.state}
                  to="/signup"
                >
                  {" "}
                  Sign-up
                </Link>{" "}
              </p>
            </form>

            <SocialLogIn></SocialLogIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
