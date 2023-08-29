import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Player } from "@lottiefiles/react-lottie-player";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../Contexts/Provider/AuthProvider";
import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser, user, updateUserData, updateUserProfile } =
    useContext(AuthContext);

  const [error, setErr] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    const { password, confirmPassword, ...rest } = data;

    if (password !== confirmPassword) {
      setErr("Passwords do not match");
    } else {
      createUser(data.email, data.password)
        .then(() => {
          updateUserProfile(data.name, data.photoUrl)
            .then(() => {
              setErr("");

              const saveUser = {
                name: data.name,
                email: data.email,
                photoURL: data.photoUrl,
              };

              fetch("https://titans-arena-server.vercel.app/users", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(saveUser),
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.insertedId) {
                    Swal.fire({
                      title: "User Registered Successfully",
                      icon: "success",
                      timer: 2000,
                    }).then(() => {
                      navigate("/");
                    });
                  }
                })
                .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => {
          setErr(error.message);
          Swal.fire({
            title: "Error",
            text: error.message,
            icon: "error",
          });
        });
    }
  };
  return (
    <div className="">
      <Helmet>
        <title>TitanArena || Register</title>
      </Helmet>
      <div>
        <div className="hero min-h-screen bg-base-200 pt-20">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <h1 className="text-5xl mt-5 text-center font-bold text-green-500 mb-5 font-mono">
                Register now!
              </h1>

              <div>
                <div className="flex justify-center items-center border border-green-400 p-4 ">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full"
                  >
                    <div className="mb-4">
                      <label
                        className="block text-green-500  text-xl font-bold mb-2"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register("name", {
                          required: true,
                        })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black  leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs italic">
                          Name is required.
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label
                        className="block text-green-500  text-xl font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register("email", {
                          required: true,
                        })}
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
                        className="block text-green-500  text-xl font-bold mb-2"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        {...register("password", {
                          required: true,
                        })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {errors.password && (
                        <p className="text-red-500 text-xs italic">
                          Password is required.
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label
                        className="block text-green-500  text-xl font-bold mb-2"
                        htmlFor="confirmPassword"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        id="confirmPassword"
                        {...register("confirmPassword", { required: true })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black  leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {errors.confirmPassword && (
                        <p className="text-red-500 text-xs italic">
                          Confirm Password is required.
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label
                        className="block text-green-500  text-xl font-bold mb-2"
                        htmlFor="photoUrl"
                      >
                        Photo URL
                      </label>
                      <input
                        type="text"
                        id="photoUrl"
                        {...register("photoUrl")}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black  leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <button
                        type="submit"
                        className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        Register
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

                <p className="text-danger">{error} </p>

                <p className="mt-4 text-center">
                  Already Have an Account
                  <Link className="text-indigo-600" to="/login">
                    {" "}
                    Login{" "}
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
    </div>
  );
};

export default Register;
