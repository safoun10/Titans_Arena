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
  // const onSubmit = (data) => {
  //   data.Category = categoryOption;
  //   data.tags = tagOption;

  //   fetch("https://titans-arena-server.vercel.app/blog", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(data),
  //   }).then((result) => {
  //     console.log(result);
  //     reset();
  //     Swal.fire({
  //       position: "center",
  //       icon: "success",
  //       title: "Blog successfuly added",
  //       showConfirmButton: false,
  //       timer: 1500,
  //     });
  //   });
  //   console.log("add a blog", data);
  // };

  // fetch("https://assignment-11-server-xi-sand.vercel.app/toy", {
  //   method: "POST",
  //   headers: {
  //     "content-type": "application/json",
  //   },
  //   body: JSON.stringify(newToy),
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //     if (data.insertedId) {
  //       Swal.fire({
  //         title: "Success!",
  //         text: "Toy added successfully",
  //         icon: "success",
  //         confirmButtonText: "Cool",
  //       });
  //       form.reset();
  //     }
  //   });

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
  const handleAddBlog = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const author = form.author.value;
    const date = form.date.value;
    const featured_image = form.featured_image.value;
    const category = form.category.value;
    const facebook = form.facebook.value;
    const twitter = form.twitter.value;
    const linkedin = form.linkedin.value;

    const newBlog = {
      title,
      author,
      date,
      featured_image,
      category,
      facebook,
      twitter,
      linkedin
    };
    console.log(newBlog);

    fetch("http://localhost:5000/blogs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Toy added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="pt-6 w-full shadow-xl px-5 bg-[#23252d]">
      <h2 className="bg-gradient-to-b from-transparent to-[#68fb9a] w-1/4 mx-auto text-white text-center underline font-bold text-2xl lg:text-4xl italic pb-4">
        Public Blog
      </h2>

      <form onSubmit={handleAddBlog}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="mb-4">
            <label className="block text-white font-medium mb-1">Name</label>
            <input
              type="text"
              className="border-b bg-transparent text-white w-full py-2 px-3"
              placeholder="Title"
              name="title"
              {...register("title")}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white font-medium mb-1">
              Author Name
            </label>
            <input
              type="text"
              className="border-b bg-transparent text-white w-full py-2 px-3"
              placeholder="Author Name"
              name="author"
              {...register("author")}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white font-medium mb-1">Date</label>
            <input
              type="date"
              className="border-b bg-transparent text-white w-full py-2 px-3"
              name="date"
              {...register("date")}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white font-medium mb-1">
              photo url
            </label>
            <input
              type="text"
              className="border-b bg-transparent text-white w-full py-2 px-3"
              name="featured_image"
              {...register("featured_image")}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white font-medium mb-1">
              Category
            </label>
            <CreatableSelect
              name="category"
              className="w-75 font-semibold bg-[#303540]"
              defaultValue={categoryOption}
              onChange={setCategoryOption}
              options={categoryOptions}
              isMulti
            />
          </div>
          <div className="mb-4">
            <label className="block text-white font-medium mb-1">Tags</label>
            <CreatableSelect
              className="w-75 font-semibold bg-[#303540]"
              defaultValue={tagOption}
              onChange={setTagOption}
              options={tagOptions}
              isMulti
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-2">
          <div className="mb-4">
            <label className="block text-white font-medium mb-1">
              Facebook
            </label>
            <input
              type="text"
              className="border-b bg-transparent text-white w-full py-2 px-3 font-semibold"
              name="facebook"
              placeholder="Facebook"
              {...register("facebook")}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white font-medium mb-1">Twitter</label>
            <input
              type="text"
              className="border-b bg-transparent text-white w-full py-2 px-3 font-semibold"
              name="twitter"
              placeholder="Twitter"
              {...register("twitter")}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white font-medium mb-1">
              Linked In
            </label>
            <input
              type="text"
              className="border-b bg-transparent text-white w-full py-2 px-3 font-semibold"
              name="linkedin"
              placeholder="Linked In"
              {...register("linkedin")}
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-[#ffff] text-base font-semibold">
              Blog
            </span>
          </label>
          <textarea
            type="text"
            name="content"
            className="h-24 border-b bg-transparent text-white w-full py-2 px-3"
            placeholder="Detail description"
            {...register("content")}
          />
        </div>
        <div className="form-control pb-5 mt-6">
          <input
            className="border-2 rounded-tl-box rounded-br-box p-3 w-full font-bold hover:bg-green-500 my-4 border-green-500 text-white"
            type="submit"
            value="Publish Blog"
          />
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
