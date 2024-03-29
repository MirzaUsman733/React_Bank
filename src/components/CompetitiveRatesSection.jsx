import React from 'react'

const CompetitiveRatesSection = () => {
  return (
    <div><section class="w-full py-5 py-md-5 py-lg-5">
    <div class="container">
      <div class="row justify-content-center align-items-center gap-4 text-center text-md-start">
        <div class="col-md-6">
          <div class="space-y-3">
            <h2 class="fw-bold text-center text-3xl"  style={{fontFamily: "cursive"}}>
              Experience the workflow the best frontend teams love.
            </h2>
            <p class="mx-auto max-w-600px text-gray-500 text-center">
              Let your team focus on shipping features instead of managing infrastructure with automated CI/CD.
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="w-full max-w-sm space-y-2">
            <form class="d-flex flex-column flex-md-row gap-2">
              <input class="form-control flex-grow-1" type="email" placeholder="Enter your email"/>
              <button class="btn btn-primary w-25" type="submit">Sign Up</button>
            </form>
            <p class="text-xs text-gray-500 text-center mt-1">
              Sign up to get notified when we launch.
              <a href="#" class="text-decoration-none">Terms & Conditions</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
 </div>
  )
}

export default CompetitiveRatesSection