import checkOut from '../../assets/images/checkout/checkout.png'


const Banner = () => {
    return (
        <>
          <div className="relative  bg-cover bg-center rounded-2xl  h-96 mb-5" style={{ backgroundImage: `url("${checkOut}")` }}>

            <div className='text-5xl font-bold text-white absolute left-20 bottom-40  '>checkOut</div>
            
            </div>  
        </>
    );
};

export default Banner;