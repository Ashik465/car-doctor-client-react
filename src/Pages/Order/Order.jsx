import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import OrderTableRow from "./OrderTableRow";
import Swal from "sweetalert2";

const Order = () => {
  const { user } = useContext(AuthContext);
  const [order, setOrder] = useState([]);

  const url = `http://localhost:5000/orders?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOrder(data);
        console.log(data);
      });
  }, [url]);

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
        fetch(`http://localhost:5000/deleteOrder/${id}`, {
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
    fetch(`http://localhost:5000/updateOrder/${id}`, {
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
