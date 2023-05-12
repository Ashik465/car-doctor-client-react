import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import OrderTableRow from "./OrderTableRow";


const Order = () => {
   
    const {user} = useContext(AuthContext)
    const [order,setOrder] = useState([])
 
    const url =`http://localhost:5000/orders?email=${user?.email}`

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {setOrder(data)
        console.log(data);
        })
    }, [])




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
        <th>Name</th>
        <th>Price</th>
        <th>Date</th>
        <th>Datails</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
     {
        order.map((order) => <OrderTableRow order={order} key={order._id}></OrderTableRow>)
     }
    
      
     
    </tbody>
  
    
  </table>
</div>


              {/* order table end */}
        </div>
    );
};

export default Order;
