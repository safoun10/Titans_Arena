import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";

const ProfileEdit = () => {
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    fetch(`http://localhost:5000/usersInfo/${user.email}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  const [userInfo, SetUserInfo] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/userInfo/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        SetUserInfo(data.userInfo);
      })
      .catch((error) => {
        console.error("Error fetching user role:", error);
      });
  }, [user?.email]);

  console.log(userInfo?.bio);
  return (
    <div className="pt-6 w-full  shadow-xl px-5 text-white">
      <h2 className="text-center underline font-bold text-2xl lg:text-4xl italic pb-4">
        Edit Profile Information
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="form-control">
            <label className="label">
              <span className="">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              className="input input-bordered"
              defaultValue={userInfo?.name || user?.displayName}
              placeholder="name"
              {...register("name")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="">Username</span>
            </label>
            <input
              type="text"
              name="username"
              defaultValue={userInfo?.username}
              className="input input-bordered"
              placeholder="Username"
              {...register("username")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="">Phone Number</span>
            </label>
            <input
              type="text"
              name="phoneNumber"
              className="input input-bordered"
              defaultValue={userInfo?.phoneNumber}
              placeholder="Phone Number"
              {...register("phoneNumber")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="">Your Email</span>
            </label>
            <input
              type="email"
              name="email"
              className="input input-bordered"
              value={user?.email && userInfo?.email}
              {...register("email")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="">Photo url</span>
            </label>
            <input
              type="text"
              name="photoURL"
              className="input input-bordered"
              defaultValue={userInfo?.photoURL || user?.photoURL}
              placeholder="Photo url"
              {...register("photoURL")}
            />
          </div>
        </div>
        <div className="flex justify-between gap-2">
          <div className="form-control w-full">
            <label className="label">
              <span className="">Facebook</span>
            </label>
            <input
              type="text"
              name="social_media"
              className="input input-bordered "
              defaultValue={userInfo?.facebook}
              placeholder="Facebook"
              {...register("facebook")}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="">Twitter</span>
            </label>
            <input
              type="text"
              name="social_media"
              className="input input-bordered"
              defaultValue={userInfo?.twitter}
              placeholder="Twitter"
              {...register("twitter")}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="">Instagram</span>
            </label>
            <input
              type="text"
              name="social_media"
              className="input input-bordered"
              defaultValue={userInfo?.instagram}
              placeholder="Instagram"
              {...register("instagram")}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="">Youtube</span>
            </label>
            <input
              type="text"
              name="social_media"
              className="input input-bordered"
              defaultValue={userInfo?.youtube}
              placeholder="Youtube"
              {...register("youtube")}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="">Discord</span>
            </label>
            <input
              type="text"
              name="social_media"
              className="input input-bordered"
              defaultValue={userInfo?.discord}
              placeholder="Discord"
              {...register("discord")}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="">Tiktok</span>
            </label>
            <input
              type="text"
              name="social_media"
              className="input input-bordered"
              defaultValue={userInfo?.tiktok}
              placeholder="Tiktok"
              {...register("tiktok")}
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="">Add Bio</span>
          </label>
          <textarea
            type="text"
            name="bio"
            className="input input-bordered"
            defaultValue={userInfo?.bio}
            placeholder="Add Your Bio"
            {...register("bio")}
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

export default ProfileEdit;
