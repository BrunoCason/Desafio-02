import { useState } from "react";
import FormContext from "../contexts/register-plant/form-context";
import { Validation } from "../protocols/validation";
import Input from "../components/Input";
import InputMaskPrice from "../components/InputMaskPrice";
import TextArea from "../components/TextArea";
import { SaveProduct } from "../domain/usecases/saveProduct";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";

export type NewProduct = {
  name: string;
  subtitle: string;
  label: string;
  type: string;
  price: string;
  quantity: number;
  isInSale: boolean;
  discountPercentage: number;
  features: string;
  description: string;
  imgUrl: string;
};

type ProductToSave = {
  id: string;
  name: string;
  subtitle: string;
  label: string[];
  price: string;
  quantity: number;
  sales: number;
  isInSale: boolean;
  discountPercentage: number;
  features: string;
  description: string;
  imgUrl: string;
};

type Props = {
  validation: Validation;
  saveProduct: SaveProduct;
};

export default function PlantRegistration({ saveProduct, validation }: Props) {
  const [plantType, setPlantType] = useState<string>("indoor");
  const [newProduct, setNewProduct] = useState<NewProduct>({
    name: "",
    subtitle: "",
    label: "",
    type: "",
    quantity: 0,
    price: "",
    isInSale: true,
    discountPercentage: 0,
    features: "",
    description: "",
    imgUrl: "",
  });

  function productToSaveWithoutTypeProp(): ProductToSave {
    return Object.entries(newProduct)
      .filter(([prop]) => {
        return prop !== "type";
      })
      .reduce(
        (acc: ProductToSave, [prop, value]) => ({ ...acc, [prop]: value }),
        {} as ProductToSave
      );
  }

  function resetForm() {
    setPlantType("indoor");
    setNewProduct({
      ...Object.keys(newProduct).reduce((acc: NewProduct, prop) => {
        let newCleanProduct = {};
        if (prop === "discountPercentage" || prop === "quantity") {
          newCleanProduct = { ...newCleanProduct, [prop]: 0 };
        } else if (prop === "isInSale") {
          newCleanProduct = { ...newCleanProduct, [prop]: true };
        }
        newCleanProduct = { ...newCleanProduct, [prop]: "" };
        return { ...acc, ...newCleanProduct };
      }, {} as NewProduct),
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const images = [
      "/src/assets/descriptionPlants/cactos-echinocereus-rigidissimo.png",
      "/src/assets/descriptionPlants/monstera-deliciosa.png",
      "/src/assets/descriptionPlants/snake-plant.png",
      "/src/assets/descriptionPlants/fiddle-leaf-fig.png",
      "/src/assets/descriptionPlants/zz-plant.png",
      "/src/assets/descriptionPlants/golden-pothos.png",
      "/src/assets/descriptionPlants/spider-plant.png",
      "/src/assets/descriptionPlants/rubber-tree.png",
      "/src/assets/descriptionPlants/aloe-vera.png",
      "/src/assets/descriptionPlants/spathiphyllum-peace-lily.png",
      "/src/assets/descriptionPlants/parlor-palm.png",
      "/src/assets/descriptionPlants/bird-of-paradise-plant.png",
      "/src/assets/descriptionPlants/chinese-money-plants.png",
      "/src/assets/descriptionPlants/calathea-foliage.png",
    ];
    const toastId = toast.loading("Salvando Produto...");
    const toastMessage = "Produto salvo com sucesso!";
    const productToSave: ProductToSave = {
      ...productToSaveWithoutTypeProp(),
      id: uuid(),
      label: [newProduct.label, newProduct.type],
      quantity: Math.floor(Math.random() * 100) + 1,
      discountPercentage: Number(newProduct.discountPercentage),
      sales: Math.floor(Math.random() * 100) + 1,
      imgUrl: images[Math.floor(Math.random() * images.length)],
    };
    try {
      await saveProduct.save(productToSave);
      resetForm();
      toast.update(toastId, {
        render: toastMessage,
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="flex justify-center bg-wisper">
      <section className="container flex xl:justify-between justify-center">
        <FormContext.Provider
          value={{
            newProduct,
            setNewProduct,
            validation,
          }}
        >
          <form className="p-12 max-w-572px" onSubmit={handleSubmit}>
            <h2 className="font-inter font-semibold pb-2 text-moss-green text-2xl border-b border-gray-plant">
              Plant registration
            </h2>
            <div className="mt-9">
              <label
                className=" font-inter text-IBBNB text-lg font-medium"
                htmlFor="name"
              >
                Plant Name
              </label>
              <Input
                className="mt-2  shadow appearance-none border-2 font-inter text-base rounded w-full py-3 px-4 text-secondary placeholder:text-gray-plant leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                name="name"
                type="text"
                placeholder="Echinocereus Cactus"
                value={newProduct.name}
              />
            </div>
            <div className="mt-6">
              <label
                className="font-inter text-IBBNB text-lg font-medium"
                htmlFor="subtitle"
              >
                Plant subtitle
              </label>
              <Input
                className="mt-2 shadow appearance-none border-2 font-inter text-base font-normal rounded w-full py-3 px-4 text-secondary placeholder:text-gray-plant leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                name="subtitle"
                type="text"
                placeholder="A majestic addition to your plant collection"
                value={newProduct.subtitle}
              />
            </div>
            <div className="mt-9">
              <label
                className="font-inter text-IBBNB text-lg font-medium"
                htmlFor="type"
              >
                Plant type
              </label>
              <Input
                className="mt-2 shadow appearance-none border-2 font-inter text-base font-normal rounded w-full py-3 px-4 text-secondary placeholder:text-gray-plant leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                name="type"
                type="text"
                placeholder="Cactus"
                value={newProduct.type}
              />
            </div>
            <div className="flex justify-between gap-4 flex-wrap mt-9">
              <div className="max-w-56">
                <label
                  className="font-inter text-IBBNB text-lg font-medium"
                  htmlFor="price"
                >
                  Price
                </label>
                <InputMaskPrice
                  className="mt-2 shadow appearance-none border-2 font-inter text-base font-normal rounded w-full py-3 px-4 text-secondary placeholder:text-gray-plant leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                  name="price"
                  type="text"
                  placeholder="$139.99"
                  value={newProduct.price}
                />
              </div>
              <div className="max-w-56 relative">
                <label
                  className="block font-inter text-IBBNB text-lg font-medium"
                  htmlFor="discountPercentage"
                >
                  Discount Percentage
                </label>
                <Input
                  className="mt-2 shadow appearance-none border font-inter text-base font-normal rounded w-full py-3 px-4 placeholder:text-gray-plant text-secondary leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                  name="discountPercentage"
                  type="number"
                  placeholder="20"
                  min={0}
                  max={100}
                  value={newProduct.discountPercentage}
                />
                <img
                  className="absolute bottom-3 left-10"
                  src="src/assets/por-cento.png"
                  alt=""
                />
              </div>
            </div>
            <div className="mt-9">
              <p className="block font-inter text-IBBNB text-lg font-medium">
                Label:
              </p>
              <div className="flex gap-10">
                <div className="inline-flex items-center">
                  <label
                    className="relative flex items-center p-3 rounded-full cursor-pointer"
                    htmlFor="indoor"
                  >
                    <input
                      onChange={(e: React.FormEvent<HTMLInputElement>) => {
                        setPlantType(e.currentTarget.value);
                      }}
                      checked={plantType === "indoor"}
                      name="indoor"
                      value="indoor"
                      type="radio"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                    />
                    <span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <circle
                          data-name="ellipse"
                          cx="8"
                          cy="8"
                          r="8"
                        ></circle>
                      </svg>
                    </span>
                  </label>
                  <label
                    className="mt-px font-light text-gray-700 cursor-pointer select-none"
                    htmlFor="indoor"
                  >
                    Indoor
                  </label>
                </div>
                <div className="inline-flex items-center">
                  <label
                    className="relative flex items-center p-3 rounded-full cursor-pointer"
                    htmlFor="outdoor"
                  >
                    <input
                      onChange={(e: React.FormEvent<HTMLInputElement>) => {
                        setPlantType(e.currentTarget.value);
                      }}
                      checked={plantType === "outdoor"}
                      name="outdoor"
                      type="radio"
                      value="outdoor"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                    />
                    <span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <circle
                          data-name="ellipse"
                          cx="8"
                          cy="8"
                          r="8"
                        ></circle>
                      </svg>
                    </span>
                  </label>
                  <label
                    className="mt-px font-light text-gray-700 cursor-pointer select-none"
                    htmlFor="outdoor"
                  >
                    Outdoor
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-9">
              <label
                className="block font-inter text-IBBNB text-lg font-medium"
                htmlFor="features"
              >
                Features
              </label>
              <TextArea
                name="features"
                rows={5}
                className="block mt-2 shadow appearance-none border font-inter text-base font-normal rounded w-full py-3 px-4 text-secondary placeholder:text-gray-plant leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                placeholder="Species: Echinocereus..."
                value={newProduct.features}
              />
            </div>
            <div className="mt-4">
              <label
                className="block font-inter text-IBBNB text-lg font-medium"
                htmlFor="description"
              >
                Description
              </label>
              <TextArea
                name="description"
                rows={5}
                className="block mt-2 shadow appearance-none border font-inter text-base font-normal rounded w-full py-3 px-4 text-secondary placeholder:text-gray-plant leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                placeholder="Ladyfinger cactus..."
                value={newProduct.description}
              />
            </div>
            <div className="mt-72px">
              <button
                type="submit"
                className="bg-lunar-green border-none rounded text-white-plant w-full h-52px font-inter font-bold"
              >
                Register
              </button>
            </div>
          </form>
        </FormContext.Provider>
        <img
          className="mix-blend-luminosity xl:block hidden"
          src="/src/assets/plant-form.png"
          alt=""
        />
      </section>
    </main>
  );
}

