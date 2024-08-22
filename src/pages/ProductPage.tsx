import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import { ProductProps } from "../mocks/dataProps";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductProps | null>(null);
  const [allFeatures, setAllFeatures] = useState<string[] | null>(null);
  const [finalPrice, setFinalPrice] = useState<number | null>(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/plants/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);
  
  useEffect(() => {
    if (product === null) return

    const allItems = product.features.split('.')

    allItems.forEach((item, index, arr) => {
      arr[index] = item.trim()
    })

    allItems.forEach((_, index, arr) => {
      if (arr[index] === '') allItems.splice(index, 1)
    });

    setAllFeatures(allItems)

    const priceNumber = parseFloat(product.price.replace('$', ''))
    if (product.discountPercentage > 0) {
      const discountedPrice = priceNumber - (priceNumber * (product.discountPercentage / 100))
      setFinalPrice(parseFloat(discountedPrice.toFixed(2)))
    } else {
      setFinalPrice(priceNumber)
    }
  }, [product])

  useEffect(() => {
    if (product !== null) {
      document.title = product.name;
    }
  }, [product]);

  if (!product) {
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
    )
  }

  return (
    <main className="flex justify-center bg-wisper md:py-20 lg:py-36">
      <section className="container py-24 max-w-screen-2xl mx-10 sm:mx-14 lg:mx-24 flex justify-center">
        <div className="flex flex-col gap-20 3.5xl:flex-row">
          <div className="max-w-752px max-h-690px overflow-hidden">
            <img src={product.imgUrl} alt={product.name} className="object-cover" />
          </div>
          <div className="max-w-700px flex flex-col gap-6">
            <div>
              <h1 className="text-lunar-green font-garamond text-6.5xl font-bold mb-4 leading-none">{product.name}</h1>
              <h2 className="font-lato text-2xl font-bold text-gray-plant">{product.subtitle}</h2>
            </div>
            <div className="flex gap-4">
              {
                product.label.map((item) => (
                  <div className="py-2 border-2 p-4 border-light-green-100 rounded-3xl flex items-center justify-center text-light-green-200 font-raleway" key={item}>{item}</div>
                ))
              }
            </div>

            {
              product.discountPercentage > 0 ? (
                <div className="font-lato font-bold text-2xl flex gap-7">
                  <span>${finalPrice}</span>
                  <span className="text-gray-plant line-through">{product.price}</span>
                </div>
              ) : (
                <div className="font-lato font-bold text-2xl">${finalPrice}</div>
              )
            }

            {
              product.isInSale ? (
                <button className="flex items-center justify-center bg-lunar-green text-athena-grey font-raleway font-base w-48 h-16 hover:bg-avacado hover:shadow-md hover:shadow-zinc-500">
                  Check out
                </button>
              ) : (
                <button className="flex items-center justify-center bg-gray-700 text-athena-grey font-raleway font-base w-48 h-16 cursor-not-allowed" disabled>
                  Out of Stock
                </button>
              )
            }
            
            <h3 className="font-lato font-bold text-2xl">Features</h3>
            <ul>
              {
                allFeatures && allFeatures.map((item, index) => (
                  <li className="list-disc list-inside font-raleway leading-6" key={index}>{item}</li>
                ))
              }
            </ul>
            <div>
              <h3 className="font-lato font-bold text-2xl mb-4">Description</h3>
              <p className="font-raleway leading-6">{product.description}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}