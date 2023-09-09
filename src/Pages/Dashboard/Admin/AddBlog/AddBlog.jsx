import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddBlog = () => {
  const [categoryOption, setCategoryOption] = useState(null);
  const [tagOption, setTagOption] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.Category = categoryOption;
    data.tags = tagOption;

    fetch("https://titans-arena-server.vercel.app/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((result) => {
      console.log(result);
      reset();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Blog successfuly added",
        showConfirmButton: false,
        timer: 1500,
      });
    });
    console.log("add a blog", data);
  };

  const categoryOptions = [
    { value: "Gaming", label: "Gaming" },
    { value: "Reviews", label: "Reviews" },
    { value: "News", label: "News" },
    { value: "Tips & Tricks", label: "Tips & Tricks" },
    { value: "Exploration", label: "Exploration" },
    { value: "Nostalgia", label: "Nostalgia" },
    { value: "New Releases", label: "New Releases" },
  ];

  const tagOptions = [
    { value: "CS:GO", label: "CS:GO" },
    { value: "first-person shooter", label: "first-person shooter" },
    { value: "strategy", label: "strategy" },
    { value: "competitive gaming", label: "competitive gaming" },
    { value: "teamwork", label: "teamwork" },
    { value: "tactics", label: "tactics" },
    { value: "esports", label: "esports" },
    { value: "aim training", label: "aim training" },
    { value: "map knowledge", label: "map knowledge" },
  ];

  return (
    <div className="pt-6 w-full bg-base-100 shadow-xl px-5">
      <h2 className="text-center underline font-bold text-2xl lg:text-4xl italic pb-4">
        Public Blog
      </h2>

      {/* <form>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="password"
            name="floating_password"
            id="floating_password"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_password"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="password"
            name="repeat_password"
            id="floating_repeat_password"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_repeat_password"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Confirm password
          </label>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_first_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First name
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_last_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last name
            </label>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="floating_phone"
              id="floating_phone"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_phone"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number (123-456-7890)
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_company"
              id="floating_company"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_company"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Company (Ex. Google)
            </label>
          </div>
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form> */}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              name="title"
              className="input input-bordered"
              placeholder="Title"
              {...register("title")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Author Name</span>
            </label>
            <input
              type="text"
              name="author"
              className="input input-bordered"
              placeholder="Author Name"
              {...register("author")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              {...register("date")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">photo url</span>
            </label>
            <input
              type="text"
              name="featured_image"
              className="input input-bordered"
              placeholder="photo url"
              {...register("featured_image")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <CreatableSelect
              className="w-75"
              defaultValue={categoryOption}
              onChange={setCategoryOption}
              options={categoryOptions}
              isMulti
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Tags</span>
            </label>
            <CreatableSelect
              className="w-75"
              defaultValue={tagOption}
              onChange={setTagOption}
              options={tagOptions}
              isMulti
            />
          </div>
        </div>
        <div className="flex justify-between gap-2">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Facebook</span>
            </label>
            <input
              type="text"
              name="social_media"
              className="input input-bordered "
              placeholder="Facebook"
              {...register("facebook")}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Twitter</span>
            </label>
            <input
              type="text"
              name="social_media"
              className="input input-bordered"
              placeholder="Twitter"
              {...register("twitter")}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Linked In</span>
            </label>
            <input
              type="text"
              name="social_media"
              className="input input-bordered"
              placeholder="Linked In"
              {...register("linked_in")}
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Blog</span>
          </label>
          <textarea
            type="text"
            name="content"
            className="input input-bordered"
            placeholder="Detail description"
            {...register("content")}
          />
        </div>
        <div className="form-control pb-5 mt-6">
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Publish Blog"
          />
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
