import React from "react";

const HeroSection = () => {
  return (
    <div>
      <section class="w-full py-5 py-md-5 py-lg-5 py-xl-5">
  <div class="container d-flex flex-row justify-content-center align-items-center px-4 px-md-5 px-lg-5 px-xl-5 gap-4 gap-md-5 gap-lg-5 gap-xl-5">
    <div class="text-center text-md-start">
      <h1 class="fw-bold text-3xl" style={{fontFamily: "cursive"}}>
        Modern banking,
        simplified.
      </h1>
      <p class="mx-auto mx-md-0 mx-lg-0 mx-xl-0 max-w-600px text-gray-500 fs-5">
        Access your money anytime, anywhere. Enjoy seamless online and mobile banking with personalized service you can trust.
      </p>
      <div class="d-flex gap-3 gap-sm-4 gap-lg-4 gap-xl-4">
        <a href="#" class="btn btn-primary btn-lg">Sign Up</a>
        <a href="#" class="btn btn-outline-secondary btn-lg">Learn more</a>
      </div>
    </div>
    <img src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFuayUyMGljb258ZW58MHx8MHx8fDA%3D" alt="Image" class="mx-auto w-100 rounded-xl"/>
  </div>
</section>

    </div>
  );
};

export default HeroSection;
