import Layout from "../components/Layout";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../components/ProductsContext";

export default function CheckoutPage() {
  const { selectedProducts, setSelectedProducts } = useContext(ProductsContext);
  const [productsInfos, setProductsInfos] = useState([]);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const uniqIds = [...new Set(selectedProducts)];
    fetch("/api/products?ids=" + uniqIds.join(","))
      .then((response) => response.json())
      .then((json) => setProductsInfos(json));
  }, [selectedProducts]);

  function moreOfThisProduct(id) {
    setSelectedProducts((prev) => [...prev, id]);
  }
  function lessOfThisProduct(id) {
    const pos = selectedProducts.indexOf(id);
    if (pos !== -1) {
      setSelectedProducts((prev) => {
        return prev.filter((value, index) => index !== pos);
      });
    }
  }

  const deliveryPrice = 5;
  let subtotal = 0;
  if (selectedProducts?.length) {
    for (let id of selectedProducts) {
      const price = productsInfos.find((p) => p._id === id)?.price || 0;
      subtotal += price;
    }
  }
  const total = subtotal + deliveryPrice;

  return (
    <Layout>
      <div className="text-white text-lato">
      <h1 className="flex items-center justify-center text-[56px] text-white mt-[16px] mb-[42px]">
        Checkout
      </h1>
        {!productsInfos.length && <div>no products in your shopping cart</div>}
        {productsInfos.length &&
          productsInfos.map((productInfo) => {
            const amount = selectedProducts.filter(
              (id) => id === productInfo._id
            ).length;
            if (amount === 0) return;
            return (
              <div className="flex mb-5 items-center" key={productInfo._id}>
                <div
                  className="bg-gray-100 p-3 rounded-xl shrink-0"
                  style={{
                    boxShadow: "inset 1px 0px 10px 10px rgba(0,0,0,0.1)",
                  }}
                >
                  <img className="w-24" src={productInfo.picture} />
                </div>
                <div className="pl-4 items-center">
                  <h3 className="font-bold text-lg mb-1">{productInfo.name}</h3>
                  <p className="text-sm leading-4 text-gray-300 ">
                    {productInfo.description}
                  </p>
                  <div className="flex mt-1">
                    <div className="font-bold flex flex-row justify-between items-center grow">${productInfo.price}
                    <div>
                      <button
                        onClick={() => lessOfThisProduct(productInfo._id)}
                        className="border border-cyan-400 hover:border-white px-2 rounded-lg text-white hover:text-cyan-500 transition-all"
                      >
                        -
                      </button>
                      <span className="px-2">
                        {
                          selectedProducts.filter(
                            (id) => id === productInfo._id
                          ).length
                        }
                      </span>
                      <button
                        onClick={() => moreOfThisProduct(productInfo._id)}
                        className="bg-cyan-500 hover:bg-white hover:text-cyan-500 px-2 rounded-lg text-white transition-all"
                      >
                        +
                      </button>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        <form action="/api/checkout" method="POST">
        
          <div className="mt-8">
          <h1 className="flex items-center justify-center text-[56px] text-white mt-[16px] mb-[42px]">
        Information
      </h1>
            <div className="my-1 ml-1 mb-2">
              <h1>Name</h1>
            </div>
            <input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2 text-black"
              type="text"
              placeholder="Your name"
            />
            <div className="my-1 ml-1 mb-2">
              <h1>City</h1>
            </div>
            <input
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2 text-black"
              type="text"
              placeholder="City and postal code"
            />
            <div className="my-1 ml-1 mb-2">
              <h1>Address</h1>
            </div>
            <input
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2 text-black"
              type="text"
              placeholder="Street address, number"
            />
            <div className="my-1 ml-1 mb-2">
              <h1>Email Address</h1>
            </div>
            <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2 text-black"
              type="email"
              placeholder="Email address"
            />
          </div>
          <div className="mt-8">
            <div className="flex my-3">
              <h3 className="grow font-bold text-white">Subtotal:</h3>
              <h3 className="font-bold">${subtotal}</h3>
            </div>
            <div className="flex my-3">
              <h3 className="grow font-bold text-white">Delivery:</h3>
              <h3 className="font-bold">${deliveryPrice}</h3>
            </div>
            <div className="flex my-3 border-t pt-3 border-dashed border-cyan-400">
              <h3 className="grow font-bold text-white">Total:</h3>
              <h3 className="font-bold">${total}</h3>
            </div>
          </div>
          <input
            type="hidden"
            name="products"
            value={selectedProducts.join(",")}
          />
          <button
            type="submit"
            className="bg-cyan-400 hover:bg-cyan-500 transition-all px-5 py-2 rounded-xl font-bold text-gray-100 w-full my-4 shadow-cyan-600 hover:shadow-cyan-700 shadow-md"
          >
            Pay ${total}
          </button>
        </form>
      </div>
    </Layout>
  );
}
