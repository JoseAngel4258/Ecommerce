import { useContext } from "react";
import { ProductsContext } from "./ProductsContext";

export default function Product({ _id, name, price, description, picture }) {
  const { setSelectedProducts } = useContext(ProductsContext);
  function addProduct() {
    setSelectedProducts((prev) => [...prev, _id]);
  }
  return (
    <div>
      <div className="w-56 h-[430px] p-6 rounded-xl flex flex-col justify-between bg-[#12235c] xd">
        <div>
          <div className=" bg-[#0b1149b2] p-5 rounded-xl">
            <img src={picture} className="drop-shadow-2xl" />
          </div>
        </div>
        <div className="mt-2 flex items-center">
          <h3 className="font-bold text-xl">{name}</h3>
        </div>
        <p className="text-sm mt-2 leading-4 text-gray-300 inline">
          {description}
        </p>
        <div className="flex mt-2 ">
          <div className="text-2xl font-bold grow">${price}</div>
          <button
            onClick={addProduct}
            className="flex justify-center items-center bg-cyan-500 hover:bg-cyan-600 transition-all text-white text-xl font-bold w-10 h-10 rounded-full"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
