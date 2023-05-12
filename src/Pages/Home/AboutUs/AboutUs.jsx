import pic1 from "../../../assets/images/about_us/person.jpg";
import pic2 from "../../../assets/images/about_us/parts.jpg";

const AboutUs = () => {
  return (
    <>
      <div id="about" className="hero min-h-screen mt-10">
        <div className="hero-content  flex-col lg:flex-row">
          <div className=" lg:w-1/2 relative">
            <img src={pic1} className="w-3/4 rounded-lg shadow-2xl" />

            <img src={pic2} className="w-1/2  absolute right-5 top-1/2 rounded-lg  border-8 border-white shadow-2xl" />
          </div>
          <div className="lg:w-1/2 p-20 space-y-5">

            <h1 className=" text-xl font-bold text-[#FF3811]">About-Us</h1>
            <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
            <p className="">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
            </p>
            <p className="">
            the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable.  
            </p>
            <button className="btn btn-primary bg-[#FF3811] border-none">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
