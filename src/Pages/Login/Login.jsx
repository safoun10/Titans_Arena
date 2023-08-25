import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../../Contexts/Provider/AuthProvider";
import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";

const Login = () => {
  const { signin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signin(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        console.log("User created successfully");

        navigate(from, { replace: true });

        Swal.fire({
          title: "User Login Successful.",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200 bg-[url('https://themedox.com/demo/mykd/assets/img/bg/area_bg02.jpg')]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
            <h1 className="text-5xl mb-5 mt-5 text-center font-mono font-bold text-green-500">
              Login now!
            </h1>

            <div>
              <div className="flex justify-center items-center border p-3 border-green-500">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="bg-white   shadow-md rounded px-8 pt-6 pb-8 w-full"
                >
                  <div className="mb-4">
                    <label
                      className="block  text-green-400 text-xl font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register("email", { required: true })}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs italic">
                        Email is required.
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-green-400 text-xl  font-bold mb-2"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      {...register("password", { required: true })}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.password && (
                      <p className="text-red-500 text-xs italic">
                        Password is required.
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      type="submit"
                      className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p className="mx-4 mb-0 text-center font-semibold ">Or</p>
            </div>
            <div className="">
              <SocialLogin></SocialLogin>

              <p className="mt-4 text-center mb-3">
                Allready Have an Account
                <Link className="text-indigo-600 " to="/register">
                  Register{" "}
                </Link>{" "}
              </p>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <Player
              className=" rounded-lg  sm:w-[500px] sm:h-[500px]"
              autoplay
              loop
              src="https://assets6.lottiefiles.com/packages/lf20_nc1bp7st.json"
              // style={{ height: "500px", width: "700px" }}
            ></Player>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
