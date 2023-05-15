import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import OrderTableRow from "./OrderTableRow";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import GlobalBanner from "../../components/banner/GlobalBanner";

const Order = () => {
  const { user,logout } = useContext(AuthContext);
  const [order, setOrder] = useState([]);
  const navigate = useNavigate();

  const url = `https://car-doctor-server-eight-eta.vercel.app/orders?email=${user?.email}`;

  useEffect(() => {
    fetch(url , { method: "GET"  ,
     headers: { 

       authorization: `Bearer ${localStorage.getItem("car-access-token")}`,

      } })
      .then((res) => res.json())
      .then((data) => {
        if(!data.error){
           setOrder(data);
        }
        else{
           //log out 
           logout()
           .then(() => {
             // Sign-out successful.
     
            // localStorage.removeItem("car-access-token");
          navigate('/login')

     
           })
           .catch((error) => {
             // An error happened.
             console.log(error);
           });      
        }
       
       
      });
  }, [url,navigate]);

  const handleOrderDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://car-doctor-server-eight-eta.vercel.app/deleteOrder/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your order has been deleted.", "success");

              const remainingOrder = order.filter((order) => order._id !== id);

              setOrder(remainingOrder);
            }
          });
      }
    });
  };

    
   const handleConfirmOrder = (id) => {
 console.log(id);
    fetch(`https://car-doctor-server-eight-eta.vercel.app/updateOrder/${id}`, {
      method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "Confirmed" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Order Confirmed Successfully",
            showConfirmButton: false,
            timer: 1500,
          });

          const remainingOrder = order.filter((order) => order._id !== id);
          const updatedOrder = order.find((order) => order._id === id);
            updatedOrder.status = "Confirmed";
            setOrder([updatedOrder, ...remainingOrder]);
        }
      });


   }






  return (
    <div className="my-10">

             <GlobalBanner>
             <div className='text-5xl font-bold text-white absolute left-20 bottom-40  '>Order</div>

             </GlobalBanner>

      <h1 className="text-center text-3xl my-3 font-bold"> Order details</h1>

      {/* order table start */}

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Price</th>
              <th>Date</th>
              <th>Datails</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {order.map((order) => (
              <OrderTableRow
                handleOrderDelete={handleOrderDelete}
                order={order}
                key={order._id}
                handleConfirmOrder={handleConfirmOrder}
              ></OrderTableRow>
            ))}
          </tbody>
        </table>
      </div>

      {/* order table end */}
    </div>
  );
};

export default Order;
