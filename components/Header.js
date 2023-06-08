import React from "react";

const Header = () => {
  return (
    <div className="citybackground bg-cover backgroundoptions h-screen relative mdd:-top-[63px] -top-[76px]">
      <div className="relative overflow-hidden bg-no-repeat city-background h-screen">
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center text-white md:px-12">
              <img src="/public/products/airpods.png" alt="" />
              <h1 className="mb-6 text-5xl font-bold text-shadow">E-commerce</h1>
              <h3 className="mb-8 text-3xl font-bold text-shadow">Phones, laptops and audio devices!</h3>
              <a
                href="#products"
                type="button"
                className="text-shadow inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Buy now!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Header;
