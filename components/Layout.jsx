import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "./ProductsContext";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  const { setSelectedProducts } = useContext(ProductsContext);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    if (window.location.href.includes("success")) {
      setSelectedProducts([]);
      setSuccess(true);
    }
  }, []);
  return (
    <div className="font-italiana">
      <Navbar />
      <Header  />
      <section id="products">
      <div  className="relative p-5 -mt-[76px] w-[100%] overflow-hidden canvas">
        {success && (
          <div className="mb-5 bg-cyan-600 text-white text-lg p-5 rounded-xl ">
            Thanks for your order!
          </div>
        )}
        {children}
      </div>

      <div className="w-full h-[54px] canvas"></div>
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
}
