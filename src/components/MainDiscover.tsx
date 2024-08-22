export default function MainDiscover() {
  return (
    <section className="container relative">
      <section className="max-w-616px flex-col justify-center flex gap-6 mx-10 sm:mx-14 lg:mx-24">
        <div className="w-45 flex items-center gap-4">
          <img src="/src/assets/Rectangle31.svg"/>
          <div className="font-pacifico text-black font-normal text-center text-base">Love for Nature</div>
        </div>

        <div>
          <h1>
            <span className="font-garamond text-lunar-green text-6.5xl font-bold capitalize">Discover your</span>
            <span className="text-6.5xl font-garamond capitalize text-avacado font-bold"> Green</span>
            <span className="font-garamond text-lunar-green text-6.5xl font-bold capitalize"> Side</span>  
          </h1>
          <div>
            <p className="font-raleway text-base font-normal leading-normal">We are your one-stop destination for all things green and growing. Our website offers a wide array of stunning plants, ranging from vibrant flowers  to lush indoor foliage, allowing you to create your very own green oasis. 
            </p>
          </div>
        </div>
        
        <a className="w-48 h-16 flex justify-center items-center bg-lunar-green py-9 text-white font-raleway hover:bg-avacado hover:shadow-md hover:shadow-zinc-500" href="/products">Shop Now</a>
      </section>

      <div>
        <img className="mix-blend-luminosity" src="src/assets/plant-left-page-1.png" />
        <a className="flex absolute bottom-10 left-24 items-center gap-2" href="/error">
          <p className="text-neutral-700 font-raleway">Learning Gardening</p>
          <i>
            <img src="/src/assets/Arrow 1.png"/>
          </i>
        </a>
      </div>

      <div className="absolute -top-64 right-0">
        <img className="mix-blend-luminosity hidden 2xl:block" src="src/assets/plant-page-1.png" />
      </div>
    </section>
  )
}
