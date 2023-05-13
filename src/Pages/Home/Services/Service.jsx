import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


 
 

const Service = () => {


    const [serviceData, setServiceData] = useState([])
  
   const [showAll, setShowAll] = useState(false)
    
    useEffect(() => {    
     fetch('https://car-doctor-server-eight-eta.vercel.app/services')
     .then(res => res.json())
     .then(data => setServiceData(data))
     }, [])



    const moreService = showAll? serviceData : serviceData.slice(0,3)



    return (
        <div className=" my-7">
             {/* our service area text section  */}
             <div className="text-center space-y-3">
                <h3 className="text-2xl font-bold text-orange-500"> Service</h3>
                <h2 className=" text-black font-bold text-5xl">Our Service Area</h2>
                <p className="text-gray-500">the majority have suffered alteration in some form, by injected humour, or randomized <br /> words which do not look even slightly believable. </p> 

             </div>
                {/* our service area card section  */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
                   
                   {
                    moreService?.map(service=><ServiceCard service={service} key={service._id}/> )
                   }    

                
                  </div>
                    
                    <div className=" text-center my-5 ">
                       {
                        moreService.length ===3 ?  <button onClick={()=>setShowAll(true)} className="btn btn-outline  text-orange-500">More Services</button> :  <button onClick={()=>setShowAll(false)} className="btn btn-outline  text-orange-500">less Services</button>
                       }
                    </div>

        </div>
    );
};

export default Service;