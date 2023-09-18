import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Title from "../../../Components/Shared/AnimatedTitle/Titile";
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
		fetch(`https://titans-arena-server.vercel.app/userInfo/${user?.email}`)
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
    <div className="pt-1 w-full bg-slate-800 shadow-xl px-5 text-white">
      <Title primaryText="Update Your" secondaryText="profile Information" />

      <form onSubmit={handleProfileUpdate}>
        <div className="flex border">
          <div className="w-1/2 ">
            <div className="flex justify-center py-4">
              <img
                className="rounded-full w-36 border-4 p-2"
                src={userInfo?.photoURL || user?.photoURL}
                alt=""
              />
            </div>
            <h3 className="text-center text-3xl font-bold">{userInfo?.name}</h3>
          </div>
          <div className="w-1/2 border p-4 ">
            {" "}
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-bold ">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                className="input input-bordered border-white text-lg font-semibold rounded-none bg-transparent"
                defaultValue={userInfo?.name || user?.displayName}
                placeholder="name"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-bold">Username</span>
              </label>
              <input
                type="text"
                name="username"
                defaultValue={userInfo?.username}
                className="input input-bordered border-white text-lg font-semibold rounded-none bg-transparent"
                placeholder="Username"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-bold">Phone Number</span>
              </label>
              <input
                type="text"
                name="phoneNumber"
                className="input input-bordered border-white text-lg font-semibold rounded-none bg-transparent"
                defaultValue={userInfo?.phoneNumber}
                placeholder="Phone Number"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-bold">Your Email</span>
              </label>
              <input
                type="email"
                name="email"
                className="input input-bordered border-white text-lg font-semibold rounded-none bg-transparent"
                value={userInfo?.email}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-bold">Photo url</span>
              </label>
              <input
                type="text"
                name="photoURL"
                className="input input-bordered border-white text-lg font-semibold rounded-none bg-transparent"
                defaultValue={userInfo?.photoURL || user?.photoURL}
                placeholder="Photo url"
              />
            </div>
          </div>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="text-xl font-bold">Facebook</span>
          </label>
          <input
            type="text"
            name="facebook"
            className="input input-bordered rounded-none "
            defaultValue={userInfo?.facebook}
            placeholder="Facebook"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="text-xl font-bold">Twitter</span>
          </label>
          <input
            type="text"
            name="twitter"
            className="input input-bordered border-white text-lg font-semibold rounded-none bg-transparent"
            defaultValue={userInfo?.twitter}
            placeholder="Twitter"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="text-xl font-bold">Instagram</span>
          </label>
          <input
            type="text"
            name="instagram"
            className="input input-bordered border-white text-lg font-semibold rounded-none bg-transparent"
            defaultValue={userInfo?.instagram}
            placeholder="Instagram"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="text-xl font-bold">Youtube</span>
          </label>
          <input
            type="text"
            name="youtube"
            className="input input-bordered border-white text-lg font-semibold rounded-none bg-transparent"
            defaultValue={userInfo?.youtube}
            placeholder="Youtube"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="text-xl font-bold">Discord</span>
          </label>
          <input
            type="text"
            name="discord"
            className="input input-bordered border-white text-lg font-semibold rounded-none bg-transparent"
            defaultValue={userInfo?.discord}
            placeholder="Discord"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="text-xl font-bold">Tiktok</span>
          </label>
          <input
            type="text"
            name="tiktok"
            className="input input-bordered border-white text-lg font-semibold rounded-none bg-transparent"
            defaultValue={userInfo?.tiktok}
            placeholder="Tiktok"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="text-xl font-bold">Add Bio</span>
          </label>
          <textarea
            type="text"
            name="bio"
            className="input input-bordered border-white text-lg font-semibold rounded-none bg-transparent"
            defaultValue={userInfo?.bio}
            placeholder="Add Your Bio"
          />
        </div>
        <div className="form-control pb-5 mt-6">
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="UPDATE PROFILE"
          />
        </div>
      </form>
    </div>
  );
};

export default ProfileEdit;
