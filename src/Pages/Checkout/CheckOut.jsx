import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const CheckOut = () => {

     const {user} = useContext(AuthContext)
    const service = useLoaderData()
    const {title,price,_id} = service

    const handleSubmitOrder = (e) => {
        e.preventDefault()
        
        const from = e.target ;
        const name = from.name.value;
        const date = from.date.value;
        const price = from.price.value;
        const email = from.email.value;
         const message = from.message.value;

        const order = { customerName: name,
            date,
            price,
            email,
            message,
            serviceTitle: title,
        serviceID:_id}

        console.log(order);
        
       fetch('http://localhost:5000/addorder',{
           method:'POST',
           headers:{'Content-Type':'application/json'},
           body:JSON.stringify(order)
         })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    alert('Your Order Placed Successfully')
                }
            }
            )
         


    }



    return (
        <div>
            <h1 className=" text-center text-orange-500 font-bold text-3xl"> Checkout {title}</h1>
           {/* from start  */}

     
    <div className="  rounded-lg bg-[#F3F3F3] my-10">
     <form onSubmit={handleSubmitOrder} className="p-5" >
     <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
        <div className="form-control">
         
          <input type="text" name="name" defaultValue={user?.name} placeholder="First Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          
          <input type="date" name="date" className="input input-bordered" />
         
        </div>
        <div className="form-control">
          
          <input type="text" name="price" defaultValue={`price:${price}`} placeholder="Price" className="input input-bordered" />
         
        </div>
        <div className="form-control">
          
          <input type="text" name="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" />
         
        </div>
        
      </div>

      <div className="form-control p-5 ">
          
          <input type="text" name="message"  placeholder="Your Message" className="input input-bordered h-40" />
         
        </div>
      <div className="form-control mt-6 p-5">
        
          <input type="submit" className="btn btn-block bg-orange-500 border-none" value="Order Confirm" />
        </div>
     </form>
    </div>
 





                 {/* from end  */}
        </div>
    );
};

export default CheckOut;