import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { ItemProps, ProductProps } from "../mocks/dataProps";
import Product from "./Product";

type ProductsSlicerProps = {
  products: ProductProps[]
}

export default function ProductSlider({products}: ProductsSlicerProps) {
  return (
    <Splide
      className="my-24"
      tag="section"
      options={ {
        rewind: false,
        width : '100%',
        autoWidth: true,
        padding: { left: 100, right: 0 },
        gap: 48,
        pagination: false,
        arrows: false,
      } }
    >
      {
        products.map((product: ItemProps, index: number) => (
          <SplideSlide key={index}>
            <div className="my-10">
              <Product name={product.name} price={product.price} discountPercentage={product.discountPercentage} imgUrl={product.imgUrl} label={product.label} isInSale={product.isInSale} id={product.id} />
            </div>
          </SplideSlide>
        ))
      }
    </Splide>
  )
}
