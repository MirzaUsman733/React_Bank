import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../Config/Firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthenticatedContext } from "../../Context/AuthenticatedContext";
function Navbar() {
  const {
    isAuthenticated,
    setIsAuthenticated,
    setCountAccount,
    setCountTransaction,
  } = useContext(AuthenticatedContext);
  const handleClick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toast.success("User has been logged Out!", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setIsAuthenticated(false);
        // setCountAccount(0)
        // setCountTransaction(0)
      })
      .catch((error) => {
        // An error happened.
        // console.log(error)
        toast.error(error.message, {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  return (
    // <header>
    //     <nav class="navbar navbar-expand-lg navbar-dark " style={{ zIndex: '1000' }} > {/* navbar 2 */}
    //         <div class="container">
    //             <Link class="navbar-brand h1 " to="/">BANK-APP</Link>
    //             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //                 <span class="navbar-toggler-icon"></span>
    //             </button>
    //             <div class="collapse navbar-collapse " id="navbarSupportedContent">
    //                 {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
    //                     <li class="nav-item">

    //                         <Link class="nav-link active" aria-current="page" to="/">Home</Link>
    //                     </li>
    //                 </ul> */}
    //                 {/* <div class="nav-item"> */}
    //                 {!isAuthenticated
    //                 ?<Link type="button" class="btn btn-light ms-auto " to="/login">Login</Link>
    //                 :<div className='ms-auto'>
    //                 <Link type="button" class="btn btn-light me-2" to="/dashboard">Dashboard</Link>
    //                 <button type="button" class="btn btn-danger text-white" onClick={handleClick}>Logout</button>
    //                 </div>
    //                 }
    //                 {/* </li> */}
    //             </div>

    //         </div>
    //     </nav>
    // </header>
    <header class=" bg-primary text-white py-3">
      <div className="container h-14 d-flex align-items-center">
        <a class="d-flex align-items-center justify-content-center" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 256 256"
          >
            <path
              fill="white"
              d="M24 104h24v64H32a8 8 0 0 0 0 16h192a8 8 0 0 0 0-16h-16v-64h24a8 8 0 0 0 4.19-14.81l-104-64a8 8 0 0 0-8.38 0l-104 64A8 8 0 0 0 24 104m40 0h32v64H64Zm80 0v64h-32v-64Zm48 64h-32v-64h32ZM128 41.39L203.74 88H52.26ZM248 208a8 8 0 0 1-8 8H16a8 8 0 0 1 0-16h224a8 8 0 0 1 8 8"
            />
          </svg>
        </a>
        <nav class="ms-auto d-flex gap-2 gap-sm-6">
          <a class="nav-link text-sm font-medium text-white" href="#">
            Personal
          </a>
          <a class="nav-link text-sm font-medium text-white" href="#">
            Business
          </a>
          <a class="nav-link text-sm font-medium text-white" href="#">
            Loans
          </a>
          <a class="nav-link text-sm font-medium text-white" href="#">
            Investments
          </a>
          {!isAuthenticated ? (
            <a type="button" class="btn btn-light ms-auto " href="/login">
              Login
            </a>
          ) : (
            <div className="ms-auto">
              <a type="button" class="btn btn-light me-2" href="/dashboard">
                Dashboard
              </a>
              <button
                type="button"
                class="btn btn-danger text-white"
                onClick={handleClick}
              >
                Logout
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
