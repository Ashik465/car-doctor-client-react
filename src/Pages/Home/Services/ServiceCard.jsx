import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
  return (
    <>
      <div className="card w-full  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={service?.img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title font-bold text-2xl">{service?.title}</h2>
          <p className="font-bold text-xl text-orange-500 "> price: {service?.price}</p>
          <div className="card-actions">
          <Link to={`/checkout/${service?._id}`}>  <button className="btn btn-primary">Book Now</button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
