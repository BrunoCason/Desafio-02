import { useEffect, useState } from "react";
import axios from 'axios';
import { DataProps, ProductProps } from "../mocks/dataProps";
import { Product } from "../components";

export default function ProductsPage() {
  const [products, setProducts] = useState<DataProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/plants');
        setProducts({ plants: response.data });
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    document.title = 'Products';
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!products || !products.plants) {
    return (
      <div className="flex flex-col items-center bg-wisper">
        <h2 className="font-garamond text-6.5xl font-bold text-center mt-40">
          <span className="text-lunar-green">Product not</span>
          <span className="text-avacado"> Found</span>
        </h2>
        <button className="bg-lunar-green text-athena-grey font-raleway font-base w-48 h-16 mb-56 mt-10 lg:mb-96">
          <a href="/products">Return to Products</a>
        </button>
      </div>
    );
  }

  return (
    <main className="flex justify-center bg-wisper pb-24">
      <section className="container pt-16 flex flex-col items-center gap-16 px-10 sm:px-14 lg:px-24">
        <h1 className="capitalize font-garamond text-6.5xl font-bold text-center">
          <span className="text-lunar-green">products to</span>
          <span className="text-avacado"> buy</span>
        </h1>

        <div className="relative w-full flex flex-col items-center gap-10 lg:justify-center sm:flex-row sm:gap-0">
          <form action="" className="flex justify-between items-center max-w-496px border-2 rounded-3xl border-lunar-green px-5">
            <input className="flex-grow h-14 focus:outline-none bg-transparent" type="text" placeholder="Search" />
            <button type="submit">
              <img src="/src/assets/Search.png" alt="search" />
            </button>
          </form>

          <div className="flex gap-10 sm:absolute sm:right-0">
            <button className="text-lunar-green flex items-center gap-2">
              Filters
              <i>
                <img src="/src/assets/filter.png" alt="filter" />
              </i>
            </button>

            <button className="text-lunar-green flex items-center gap-2">
              Sort by
              <i>
                <img src="/src/assets/ExpandArrow.png" alt="arrow" />
              </i>
            </button>
          </div>
        </div>

        <div className="grid gap-10 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
          {
            products.plants.map((product: ProductProps, index: number) => (
              <Product key={index} name={product.name} price={product.price} discountPercentage={product.discountPercentage} imgUrl={product.imgUrl} label={product.label} isInSale={product.isInSale} id={product.id} />
            ))
          }
        </div>
      </section>
    </main>
  );
}
