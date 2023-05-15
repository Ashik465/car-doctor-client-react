import checkOut from "../../assets/images/checkout/checkout.png";

const GlobalBanner = ({ children }) => {
  return (
    <>
      <div
        className="relative  bg-cover bg-center rounded-2xl  h-96 mb-5"
        style={{ backgroundImage: `url("${checkOut}")` }}
      >
        {children}
      </div>
    </>
  );
};

export default GlobalBanner;
