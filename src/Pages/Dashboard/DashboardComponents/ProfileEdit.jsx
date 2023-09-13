import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";

const ProfileEdit = () => {
  const { user } = useAuth();

  const handleProfileUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const username = form.username.value;
    const phoneNumber = form.phoneNumber.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const facebook = form.facebook.value;
    const twitter = form.twitter.value;
    const instagram = form.instagram.value;
    const youtube = form.youtube.value;
    const discord = form.discord.value;
    const tiktok = form.tiktok.value;
    const bio = form.bio.value;
    const information = {
      name,
      username,
      phoneNumber,
      email,
      photoURL,
      facebook,
      twitter,
      instagram,
      youtube,
      discord,
      tiktok,
      bio,
    };
    fetch(`http://localhost:5000/usersInfo/${user.email}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(information),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "",
            text: "Profile Updated Successfully!",
            icon: "success",
            confirmButtonColor: "#B2A4FF",
            confirmButtonText: "ok",
          });
        }
      });
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

      <form onSubmit={handleProfileUpdate}>
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
              value={userInfo?.email}
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
              name="facebook"
              className="input input-bordered "
              defaultValue={userInfo?.facebook}
              placeholder="Facebook"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="">Twitter</span>
            </label>
            <input
              type="text"
              name="twitter"
              className="input input-bordered"
              defaultValue={userInfo?.twitter}
              placeholder="Twitter"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="">Instagram</span>
            </label>
            <input
              type="text"
              name="instagram"
              className="input input-bordered"
              defaultValue={userInfo?.instagram}
              placeholder="Instagram"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="">Youtube</span>
            </label>
            <input
              type="text"
              name="youtube"
              className="input input-bordered"
              defaultValue={userInfo?.youtube}
              placeholder="Youtube"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="">Discord</span>
            </label>
            <input
              type="text"
              name="discord"
              className="input input-bordered"
              defaultValue={userInfo?.discord}
              placeholder="Discord"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="">Tiktok</span>
            </label>
            <input
              type="text"
              name="tiktok"
              className="input input-bordered"
              defaultValue={userInfo?.tiktok}
              placeholder="Tiktok"
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
