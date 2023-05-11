import { Link } from 'react-router-dom';
import logimg from '../../assets/images/login/login.svg'







const SignUp = () => {

    const handleSignUp = (e) => {
    e.preventDefault();
}


    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 lg:pr-20">
         <img src={logimg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
          <h1 className="text-3xl text-center font-bold">Sign-Up now</h1>
           <form onSubmit={handleSignUp} >
           <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name='name'
                className="input input-bordered"
              />
            </div>
           <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name='email'
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name='password'
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
             
              <input className="btn bg-orange-500 border-none" type="submit" value="Sign-up" />
            </div>

             <p className='my-4'>Already have an account? <Link className=' text-orange-500' to='/login'> Log-In</Link>   </p>
           </form>
            
          </div>
        </div>
      </div>
    </div>
    );
};

export default SignUp;