import React from "react";

const FeatureSection = () => {
  return (
    <div>
      {" "}
      <section class="w-full py-5 py-md-5 py-lg-5 bg-light dark:bg-dark">
        <div class="container">
          <div class="row justify-content-center align-items-center gap-4 text-center">
            <div class="col">
              <div class="space-y-3">
                <h1 class="fw-bold text-3xl" style={{fontFamily: 'cursive'}}>
                  Personalized Banking Experience
                </h1>
                <p class="mx-auto max-w-600px text-gray-500">
                  Enjoy a range of banking services designed to meet your
                  financial needs.
                </p>
              </div>
            </div>
            <div class="col-sm-8 col-md-10 col-lg-12">
              <div class="container-sm row justify-content-center mx-auto" style={{maxWidth: '50%'}}>
                <div class="col-6 col-md-3">
                <div className="py-4">
                  <div class="d-flex flex-column align-items-center gap-1">
                    <span class="icon">
                      <i class="far fa-credit-card fa-3x rounded-circle"></i>
                    </span>
                    <span class="text-sm font-medium">Credit Cards</span>
                  </div>
                  </div>
                </div>
                <div class="col-6 col-md-3">
                <div className="py-4">
                  <div class="d-flex flex-column align-items-center gap-1">
                    <span class="icon">
                      <i class="fas fa-wallet fa-3x rounded-circle"></i>
                    </span>
                    <span class="text-sm font-medium">Digital Wallet</span>
                  </div>
                  </div>
                </div>
                <div class="col-6 col-md-3">
                    <div className="py-4">
                  <div class="d-flex flex-column align-items-center gap-1">
                    <span class="icon">
                      <i class="fas fa-money-bill fa-3x rounded-circle"></i>
                    </span>
                    <span class="text-sm font-medium">Savings</span>
                  </div>
                  </div>
                </div>
                <div class="col-6 col-md-3">
                <div className="py-4">
                  <div class="d-flex flex-column align-items-center gap-1">
                    <span class="icon">
                      <i class="fas fa-chart-line fa-3x rounded-circle"></i>
                    </span>
                    <span class="text-sm font-medium">Investments</span>
                  </div>
                </div>
                </div>
                <div class="col-6 col-md-3">
                <div className="py-4">
                  <div class="d-flex flex-column align-items-center gap-1">
                    <span class="icon">
                      <i class="far fa-save fa-3x rounded-circle"></i>
                    </span>
                    <span class="text-sm font-medium">Insurance</span>
                  </div>
                </div>
                </div>
                <div class="col-6 col-md-3">
                <div className="py-4">
                  <div class="d-flex flex-column align-items-center gap-1">
                    <span class="icon">
                      <i class="fas fa-exchange-alt fa-3x rounded-circle"></i>
                    </span>
                    <span class="text-sm font-medium">Money Transfer</span>
                  </div>
                  </div>
                </div>
                <div class="col-6 col-md-3">
                <div className="py-4">
                  <div class="d-flex flex-column align-items-center gap-1">
                    <span class="icon">
                      <i class="far fa-calendar-check fa-3x rounded-circle"></i>
                    </span>
                    <span class="text-sm font-medium">Loans</span>
                  </div>
                  </div>
                </div>
                <div class="col-6 col-md-3">
                    <div className="py-4">
                  <div class="d-flex flex-column align-items-center gap-1">
                    <span class="icon">
                      <i class="fas fa-piggy-bank fa-3x rounded-circle"></i>
                    </span>
                    <span class="text-sm font-medium">Youth Banking</span>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureSection;
