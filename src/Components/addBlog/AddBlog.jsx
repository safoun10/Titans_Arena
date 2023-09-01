import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
import { useForm } from "react-hook-form";

const AddBlog = () => {
  const [categoryOption, setCategoryOption] = useState(null);
  const [tagOption, setTagOption] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.Category = categoryOption;
    data.tags = tagOption;

    fetch("http://localhost:5000/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((result) => {
        console.log(result);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Blog successfuly added',
          showConfirmButton: false,
          timer: 1500
        })
      });
    console.log("add a blog",data);
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
