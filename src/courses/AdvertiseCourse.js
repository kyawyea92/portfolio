function AdvertiseCourse(){
    return(
        <div className= 'flex justify-center py-5'>
            <div className='grid grid-cols-2c w-4/5 gap-2 justify-center'>
             <img src='./images/JavaSE.gif' alt='FOC' className='h-96' />
             <div className='flex flex-col'>
             <span className='text-left text-xl sm:text-5xl leading-8'>Register Now!!!</span>
             <span className='text-left leading-8'>I'll teach by our mother language(Burmese).<br/>You just need one laptop and internet connection.This is online class.<br/> This course is absolutely beginner course.</span>
             </div>
            </div>
        </div>
    );
}

export default AdvertiseCourse;