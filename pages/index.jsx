import { useEffect, useState } from "react";
import Product from "../components/Product";
import { initMongoose } from "../lib/mongoose";
import { findAllProducts } from "./api/products";
import Layout from "../components/Layout";

export default function Home({ products }) {
  const [phrase, setPhrase] = useState("");

  const categoriesNames = [...new Set(products.map((p) => p.category))];

  if (phrase) {
    products = products.filter((p) => p.name.toLowerCase().includes(phrase));
  }

  return (
    
    <Layout>
   
      <h1 className="flex items-center justify-center text-[60px] text-white mt-[16px] mb-[42px] text-shadow">
        Products
      </h1>
      <input
        value={phrase}
        onChange={(e) => setPhrase(e.target.value)}
        type="text"
        placeholder="Search for products..."
        className="bg-gray-200 py-2 px-4 rounded-xl h-[50px] w-full text-lg"
      />
      <div className="text-white ">
        {categoriesNames.map((categoryName) => (
          <div key={categoryName}>
            {products.find((p) => p.category === categoryName) && (
              <div>
                <div className="flex justify-center items-center">
                  <div className="mt-[35px] mb-[35px] h-14 flex justify-center items-center rounded-xl w-[490px] ">
                    <h2 className="text-5xl py-5 capitalize xd2 text-shadow">
                      {categoryName}
                    </h2>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center -mx-5">
                  {products
                    .filter((p) => p.category === categoryName)
                    .map((productInfo) => (
                      <div key={productInfo._id} className="px-5 snap-start">
                        <Product {...productInfo} />
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

    </Layout>
  );
}

export async function getServerSideProps() {
  await initMongoose();
  const products = await findAllProducts();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
