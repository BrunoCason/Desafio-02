const MainSteps = () => {
  return (
    <div className="bg-white-plant py-24 w-full">
      <div className="container mx-auto">
        <h2 className="capitalize font-garamond font-bold text-5xl sm:text-6.5xl pr-10 pl-10 text-center">
          <span className="text-lunar-green"> Steps To Take Care Of Your</span>{" "}
          <span className="text-avacado">Plants</span>
        </h2>
        <p className="font-raleway font-normal text-base text-gray-plant text-center pt-8 pr-20 pl-20 mx-auto sm:pr-20 sm:pl-20 xl:pt-0 xl:pr-28 xl:pl-28">
          By following these three steps - proper watering, appropriate
          sunlight, and providing essential nutrients - you'll be well on your
          way to maintaining healthy and thriving plants.
        </p>
        <div className="grid grid-cols-1 gap-8 pt-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          <div className="text-center">
            <img
              className="mx-auto"
              src="/src/assets/figure-1-page-2.png"
              alt=""
            />
            <p className="font-lato font-bold text-IBBNB text-2xl pt-10 pb-10">
              Watering
            </p>
            <p className="font-raleway text-base text-gray-plant pr-20 pl-20 mx-auto md:w-auto lg:pr-10 lg:pl-10 xl:pr-16 xl:pl-16">
              Water your plants when the top inch of soil feels dry to the
              touch. Avoid overwatering, as it can lead to root dehydration.
            </p>
          </div>
          <div className="text-center">
            <img
              className="mx-auto"
              src="/src/assets/figure-2-page-2.png"
              alt=""
            />
            <p className="font-lato font-bold text-IBBNB text-2xl pt-10 pb-10">
              Sunlight
            </p>
            <p className="font-raleway text-base text-gray-plant pr-20 pl-20 mx-auto md:w-auto lg:pr-10 lg:pl-10 xl:pr-16 xl:pl-16">
              Most plants need adequate sunlight to thrive. Place your plants in
              areas that receive the appropriate amount of light for their
              specific needs
            </p>
          </div>
          <div className="text-center md:col-span-2 lg:col-start-3">
            <img
              className="mx-auto"
              src="/src/assets/figure-3-page-2.png"
              alt=""
            />
            <p className="font-lato font-bold text-IBBNB text-2xl pt-10 pb-10 lg:">
              Nutrients and Fertilizing
            </p>
            <p className="font-raleway text-base text-gray-plant pr-20 pl-20 mx-auto md:pr-56 md:pl-56 lg:pr-10 lg:pl-10 xl:pr-16 xl:pl-16">
              Choose a suitable fertilizer based on the specific needs of your
              plants, whether it's a balanced or specialized formula.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 pt-20 gap-4 pb-10 sm:grid-cols-2 sm:pr-10 sm:pl-10 md:grid-cols-2 md:pr-10 md:pl-10 lg:grid-cols-3 lg:relative">
          <div>
            <img
              className="mx-auto"
              src="/src/assets/image-1-page-2.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="mx-auto"
              src="/src/assets/image-2-page-2.png"
              alt=""
            />
          </div>
          <div className="sm:col-span-2 lg:col-start-3 lg:mb-36 xl:relative">
            <img
              className="mx-auto sm:w-full md:w-full lg:w-auto"
              src="/src/assets/image-3-page-2.png"
              alt=""
            />
            <p className="font-raleway pr-10 pl-10 text-gray-plant pt-5 sm:pl-0 sm:pr-0 md:pl-0 md:pr-0 md:text-base lg:text-sm lg:pl-1 lg:pt-3 xl:text-base 2xl:pt-8 2xl:pl-6 2xl:pr-5 3xl:pl-14 3xl:pr-11">
              Our website offers a wide array of stunning plants, ranging from
              vibrant flowers to lush indoor foliage, allowing you to create
              your very own green oasis. In addition to our extensive plant
              selection, we also provide gardening kits and fertilizers to equip
              you with everything you need to nurture your plants and achieve
              gardening success. But we don't stop there! We believe that
              knowledge is the key to a thriving garden, so we offer a wealth of
              information and resources on gardening techniques, plant care
              tips, and landscaping ideas. Whether you're a seasoned gardener or
              just starting your green journey, our goal is to inspire and
              support you every step of the way. Get ready to explore our
              virtual garden and discover the joys of gardening with us!
            </p>
            <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 xl:translate-x-0 xl:left-0 xl:-mt-4 2xl:ml-5 3xl:ml-14 flex justify-center">
              <a
                className="flex justify-center items-center mt-10 mb-10 sm:mt-8 bg-lunar-green text-white-plant font-raleway font-base w-48 h-16 2xl:mt-20 hover:bg-avacado hover:shadow-md hover:shadow-zinc-500"
                href="/error"
              >
                See more photos
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSteps;
