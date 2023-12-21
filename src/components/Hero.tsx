import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const nav = navigation.map((item) => (
    <a
      key={item.name}
      href={item.href}
      className="text-sm font-semibold leading-6 text-gray-900"
    >
      {item.name}
    </a>
  ));
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-betwen p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
            >
              <div className="sr-only">Open main menu</div>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {nav}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#/" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Hero;
