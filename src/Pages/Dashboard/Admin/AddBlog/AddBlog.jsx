import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useAddBlogMutation } from "../../../../Redux/slice/AddBlogState";

const AddBlog = () => {
  const [categoryOption, setCategoryOption] = useState(null);
  const [tagOption, setTagOption] = useState(null);


  const [ addBlogApi ] = useAddBlogMutation();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    data.Category = categoryOption;
    data.tags = tagOption;

    try {
      await addBlogApi(data).unwrap();
      reset();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Blog successfully added',
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error('Error creating blog:', error);
    }

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
    <div className="pt-6 w-full shadow-xl px-5 bg-[#23252d]">
      <h2 className="bg-gradient-to-b from-transparent to-[#68fb9a] w-1/4 mx-auto text-white text-center underline font-bold text-2xl lg:text-4xl italic pb-4">
        Public Blog
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
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
              name="Author"
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
          <label className="block text-white font-medium mb-1">Facebook</label>
          <input
            type="text"
            className="border-b bg-transparent text-white w-full py-2 px-3 font-semibold"
            name="social_media"
            placeholder="Facebook"
            {...register("facebook")}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white font-medium mb-1">Twitter</label>
          <input
            type="text"
            className="border-b bg-transparent text-white w-full py-2 px-3 font-semibold"
            name="social_media"
            placeholder="Twitter"
            {...register("twitter")}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white font-medium mb-1">Linked In</label>
          <input
            type="text"
            className="border-b bg-transparent text-white w-full py-2 px-3 font-semibold"
            name="social_media"
            placeholder="Linked In"
            {...register("linked_in")}
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
