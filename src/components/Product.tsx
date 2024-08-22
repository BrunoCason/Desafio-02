import { useEffect, useState } from "react";
import { ItemProps } from "../mocks/dataProps";

export default function Product({name, price, discountPercentage, imgUrl, label, isInSale, id}: ItemProps) {
  const [finalPrice, setFinalPrice] = useState<number | null>(null)
  const [type, setType] = useState<string | null>(null)
  
  useEffect (() => {
    const priceNumber = parseFloat(price.replace('$', ''))

    if (discountPercentage > 0) {
      const discountedPrice = priceNumber - (priceNumber * (discountPercentage / 100))
      setFinalPrice(parseFloat(discountedPrice.toFixed(2)))
    } else {
      setFinalPrice(priceNumber)
    }

    const typeFound = label.filter(item => item === 'indoor' || item === 'outdoor')[0]
    setType(typeFound)
  }, [price, discountPercentage, label])

  return (
    <div className="w-96 shadow-md bg-athena-grey relative transition-all hover:scale-105">
      <a href={`product/${id}`}>
        {
          !isInSale && (
            <>
              <div className="bg-black opacity-25 absolute h-full w-full p-2"></div>
              <p className="absolute ml-2 mt-2">Out of Stock</p>
            </>
          )
        }
        
        <div className="w-96 h-96 overflow-hidden">
          <img src={imgUrl} alt={name} className="w-full h-full object-cover" />
        </div>
        
        <div className="mt-4 px-8 pb-8">
          <h3 className="font-lato font-bold text-2xl text-lunar-green mb-1.5">{name}</h3>
  
          {
            discountPercentage ? (
              <div className="flex gap-4 mb-8">
                <p className="font-raleway text-lunar-green">${finalPrice}</p>
                <p className="font-raleway text-gray-plant line-through">{price}</p>
              </div>
            ) : (
              <p className="font-raleway mb-8 text-lunar-green">{price}</p>
            )
          }
  
          <span className="text-avacado border-2 border-avacado rounded-3xl h-10 px-3 inline-flex justify-center items-center">{type}</span>
        </div>
      </a>
    </div>
  )
}