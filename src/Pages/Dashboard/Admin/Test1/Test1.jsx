import React, { useEffect, useState } from "react";
import useAuth from "../../../../Hooks/useAuth";


const Test1 = () => {
  const { user, loading } = useAuth();
  const [userInfo, SetUserInfo] = useState();

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/userInfo/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          SetUserInfo(data);
        })
        .catch((error) => {
          console.error("Error fetching user role:", error);
        });
    }
  }, [user?.email]);
  console.log(userInfo);
  return (
    <div>
      
      
    </div>
  );
};

export default Test1;
