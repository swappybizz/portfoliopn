import React from "react";

const Hero = ({props,pic}) => {
  return (
    <div>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            class="lg:w-screen md:w-3/6 w-5/6 mb-10 object-cover object-center rounded hover:scale-105 transition-all duration-700 cursor-cell"
            alt="hero"
            src={pic}
          />
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              {props}
            </h1>
            <p class="leading-relaxed mb-8">
              Meggings kinfolk echo park stumptown DIY, kale chips beard
              jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice
              godard disrupt ramps hexagon mustache umami snackwave tilde
              chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac
              mlkshk freegan photo booth af fingerstache pitchfork.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Know more about me
              </button>
        
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
