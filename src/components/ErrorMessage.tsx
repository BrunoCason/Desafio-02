import { useState, useEffect } from "react";

const ErrorMessage = () => {
  const [showFirstImage, setShowFirstImage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirstImage(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-wisper">
      <section className="container mx-auto pt-20 pb-20">
        <div className="flex flex-col items-center justify-center">
          <div>
            <img
              className="animate-bounce"
              src="/src/assets/image-error.png"
              alt="Error Image"
            />
          </div>
          <div className="bg-white shadow-[-20px_20px_rgba(232,_232,_232,_1)] flex flex-col items-center pr-10 pl-10 pt-8 pb-10 sm:shadow-[-30px_30px_rgba(232,_232,_232,_1)] sm:pr-20 sm:pl-20 md:shadow-[-40px_40px_rgba(232,_232,_232,_1)] md:pl-32 md:pr-32 lg:shadow-[-50px_50px_rgba(232,_232,_232,_1)] lg:pl-40 lg:pr-40">
            <h1 className="text-lunar-green font-garamond font-bold text-9xl flex">
              4{" "}
              <span>
                {showFirstImage ? (
                  <img
                    className="block pt-7"
                    src="/src/assets/vase.png"
                    alt=""
                  />
                ) : (
                  <img
                    className="block pt-7"
                    src="/src/assets/broken-vase.png"
                    alt=""
                  />
                )}
              </span>{" "}
              4
            </h1>
            <p className="w-60 text-center font-garamond font-bold text-avacado text-xl md:text-2xl lg:text-3xl">
              Page Not Found
            </p>
          </div>
          <button className="flex items-center justify-center bg-lunar-green text-athena-grey font-raleway font-base w-48 h-16 mt-24 hover:bg-avacado hover:shadow-md hover:shadow-zinc-500">
            {" "}
            <a href="/">Return to Home</a>
          </button>
        </div>
      </section>
    </main>
  );
};

export default ErrorMessage;
