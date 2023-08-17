
function App() {

  return (
    <div className=" w-1/2 md:w-4/5 xl:w-3/5 mx-auto items-center md:mt-36">
      <section className='flex-column md:flex items-center py-10 md:py-0 justify-content'>
        <div className='bg-orange p-10 md:h-96'>
          <img src="./src/assets/images/icon-sedans.svg"/>
          <h1 className='font-bigShoulders text-grey text-3xl my-5'>Sedans</h1>
          <p className="font-lexend text-white">
            Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
            or on your next road trip.
          </p>
          <div className="mt-5">
            <button className="text-orange font-lexend bg-grey rounded-full p-3 hover:bg-orange hover:text-grey hover:ring hover:ring-grey">
              Learn more
            </button>
          </div>
        </div>
        <div className='bg-cyan p-10 md:h-96'>
          <img src="./src/assets/images/icon-suvs.svg"/>
          <h1 className='font-bigShoulders text-grey text-3xl my-5'>SUVs</h1>
          <p className="font-lexend text-white">
          Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
            and off-road adventures.
          </p>
          <div className="mt-5">
            <button className="text-cyan font-lexend bg-grey rounded-full p-3 hover:bg-cyan hover:text-grey hover:ring hover:ring-grey">
              Learn more
            </button>
          </div>
        </div>
        <div className='bg-darkCyan p-10 md:h-96'>
          <img src="./src/assets/images/icon-luxury.svg"/>
          <h1 className='font-bigShoulders text-grey text-3xl my-5'>Luxury</h1>
          <p className="font-lexend text-white">
            Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
            rental and arrive in style.
          </p>
          <div className="mt-5">
            <button className="text-cyan font-lexend bg-grey rounded-full p-3 hover:bg-darkCyan hover:text-grey hover:ring hover:ring-grey">
              Learn more
            </button>
          </div>
        </div>
      </section>
  
  
  <div className='text-center text-xs font-lexend mt-5'>
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" className='text-blue' target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#" className='text-blue' >Mona Granerud</a>.
  </div>
    </div>
  )
}

export default App
