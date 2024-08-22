export default function Footer() {
  return (
    <footer className="bg-background-footer">
      <div className="container mx-auto">
        <div className="flex justify-between flex-wrap flex-grow sm:justify-center md:justify-start md:flex-grow-0">
          <div className="flex-grow">
            <h2 className="font-garamond font-bold text-white text-4xl sm:text-6xl pt-8 sm:pt-32 pl-4 sm:pl-24">
              Stay Fresh
            </h2>
            <p className="font-raleway font-normal text-white pt-2 sm:pt-4 pl-4 sm:pl-24">
              compassinhos@gmail.com
            </p>
            <p className="font-raleway font-normal text-white pt-2 sm:pt-4 pl-4 sm:pl-24">
              +55 41 99999-9999
            </p>
          </div>
          <nav className="pt-9 pr-7 3xl:pr-32 2xl:pr-32 ml-auto sm:pt-36 sm:pr-20 lg:pr-32 mx-auto">
            <ul>
              <li>
                <p className="text-white font-lato font-bold text-xl sm:text-2xl pb-4 sm:pb-8">
                  Links
                </p>
              </li>
              <li className="text-white font-raleway font-normal pb-2 sm:pb-4">
                <a className="hover:text-light-green-100" href="/about-us">About us</a>
              </li>
              <li className="text-white font-raleway font-normal pb-2 sm:pb-4">
                <a className="hover:text-light-green-100" href="/products">Products</a>
              </li>
              <li className="text-white font-raleway font-normal">
                <a className="hover:text-light-green-100" href="/error">Blogs</a>
              </li>
            </ul>
          </nav>
          <nav className="pt-9 pr-5 3xl:pr-32 2xl:pr-32 ml-auto md:pr-32 md:pt-36 lg:pr-32 mx-auto">
            <ul>
              <li>
                <p className="text-white font-lato font-bold text-xl sm:text-2xl pb-4 sm:pb-8 ">
                  Community
                </p>
              </li>
              <li className="text-white font-raleway font-normal pb-2 sm:pb-4">
                <a className="hover:text-light-green-100" href="/about-us">About us</a>
              </li>
              <li className="text-white font-raleway font-normal pb-2 sm:pb-4">
                <a className="hover:text-light-green-100" href="/products">Products</a>
              </li>
              <li className="text-white font-raleway font-normal">
                <a className="hover:text-light-green-100" href="/error">Blogs</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="border-t border-solid border-avacado mx-auto 3xl:mr-32 mt-12 sm:mt-24 ml-4 sm:ml-24 mr-4 sm:mr-32 md:mr-32 2xl:mr-32 xl:mr-32 lg:mr-32 flex justify-between items-center">
          <div>
            <a href="/">
              <img
                className="mt-3 sm:mt-7 mb-7 sm:mb-14"
                src="/src/assets/logo-footer.svg"
                alt="logo-site"
              />
            </a>
          </div>
          <p className="font-raleway text-center font-normal text-white text-xs sm:text-base">
            Compassinhos ®. All rights <br /> reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}