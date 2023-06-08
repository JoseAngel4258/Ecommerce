import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ProductsContext } from "./ProductsContext";
import { useContext } from "react";
import dynamic from "next/dynamic";
import { BsXLg } from "react-icons/bs";

function Navbar() {
  const router = useRouter();
  const path = router.pathname;
  const { selectedProducts } = useContext(ProductsContext);

  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 bg-slate-500 backdrop-filter backdrop-blur-md bg-opacity-40 shadow-lg mx-0 text-[17px] text-white ">
      <nav>
        <div className="px-5 xl:px-12 py-6 flex w-full items-center justify-between">
          <a className="text-3xl font-bold font-heading" href="#">
            <span className="flex items-center text-[17px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-[28px] h-[28px] hover:animate-spin hover:text-cyan-300 transition-all"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>
              <Link href={"/"}>
              <div className="ml-[7px] text-lg hover:text-cyan-300 transition-all">
                E-commerce
              </div>
              </Link>
            </span>
          </a>
          <ul className="hidden md:flex px-4 mx-auto font-heading space-x-12">
            <li>
              <Link href={"/"}>
                <div
                  className={
                    (path === "/" ? "text-cyan-400 hover:text-white" : "") +
                    " flex justify-center items-center flex-col hover:text-cyan-400 transition-all"
                  }
                >
                  <span>Home</span>
                </div>
              </Link>
            </li>
            <li>
              {path === "/" ? (
                <a
                  className="hover:text-cyan-400 transition-all "
                  href="#products"
                >
                  Products
                </a>
              ) : (
                <a
                  className="hover:text-cyan-400 transition-all "
                  href="#products"
                >
                  Checkout
                </a>
              )}
            </li>
            <li>
              <a className="hover:text-cyan-400 transition-all" href="#">
                Collections
              </a>
            </li>
            <li>
              <a className="hover:text-cyan-400 transition-all" href="https://joseangel4258.github.io/Portfolio/">
                Contact Us
              </a>
            </li>
          </ul>

          <div className="flex items-center justify-between space-x-5 ">
            <div className="md:hidden flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                <button
                  onClick={() => {
                    let open = document.getElementById("open");
                    open.classList.add("hidden");
                    let close = document.getElementById("close");
                    close.classList.remove("hidden");
                    setOpen(true);
                  }}
                  id="open"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 hover:text-gray-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    let open = document.getElementById("open");
                    open.classList.remove("hidden");
                    let close = document.getElementById("close");
                    close.classList.add("hidden");
                    setOpen(false);
                  }}
                >
                  <BsXLg
                    id="close"
                    className="h-[24px] w-[24px] font-extrabold hidden"
                  />
                </button>
              </div>
            </div>

            <a
              className="flex items-center hover:text-cyan-300 transition-all"
              href="#products"
            >
              <Link href={"/checkout" + "#products"}>
                <div
                  className={
                    (path === "/checkout"
                      ? "text-cyan-400 hover:text-cyan-300"
                      : "") + " flex justify-center items-center flex-row"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="flex absolute -mt-5 ml-4">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-cyan-300 opacity-75"></span>

                    <span className="relative rounded-full h-[14px] w-[14px] bg-cyan-400 flex items-center justify-center">
                      <div>
                        <div className="text-white text-[12px]">
                          {selectedProducts.length}
                        </div>
                      </div>
                    </span>
                  </span>
                  <span></span>
                </div>
              </Link>
            </a>
            <a
              className="flex items-center hover:text-gray-200 transition-all"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-cyan-300 transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>
          </div>
        </div>
      </nav>
      {/* Drop menu */}
      {open ? (
        <div className="absolute right-8 top-[90px] w-[180px] background-[rgba(255,255,255,0.1)] bg-slate-500 bg-opacity-50 backdrop-blur-lg rounded-lg overflow-hidden">
          <ul className="md:hidden flex flex-col items-center justify-center px-4 mx-auto font-heading ">
            <li>
              <Link href={"/"}>
                <div
                  className={
                    (path === "/" ? "text-cyan-400 hover:text-cyan-300" : "") +
                    "font-semibold hover:text-cyan-400 transition-all mt-1"
                  }
                >
                  <span>Home</span>
                </div>
              </Link>
            </li>
            <li li className="my-1">
              <a className="hover:text-cyan-300 transition-all" href="#">
                Products
              </a>
            </li>
            <li className="my-1">
              <a className="hover:text-cyan-300 transition-all" href="#">
                Collections
              </a>
            </li>
            <li className="mb-1">
              <a className="hover:text-cyan-300 transition-all" target="_blank" href="https://joseangel4258.github.io/Portfolio/">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </header>
  );
}

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
