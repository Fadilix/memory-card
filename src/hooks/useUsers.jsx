import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://memory-card-api.vercel.app/api/v1/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
        toast.error("Error while fetching users");
      }
    };

    fetchUsers();
  }, []);

  return {
    users,
  };
};
