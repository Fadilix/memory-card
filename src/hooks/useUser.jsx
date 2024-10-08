import { useEffect, useState } from "react";

export const useUser = () => {
  const [user, setUser] = useState(null);
  const userId = localStorage.getItem("token");
  const getUser = async () => {
    const response = await fetch(
      `https://memory-card-api-v2.vercel.app/api/v1/users/${userId}`
    );
    const data = await response.json();
    setUser(data.user);
    console.log(data.user);
  };

  useEffect(() => {
    getUser();
  }, []);

  return {
    user,
  };
};
