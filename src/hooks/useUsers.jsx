import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://memory-card-api-v2.vercel.app/api/v1/users",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        // Ensure data is an array before sorting
        console.log(data);
        const sortedUsers = Array.isArray(data.users) ? data.users.sort((a, b) => b.score - a.score) : [];
        sortedUsers.forEach((user, index) => {
          user.rank = index + 1;
        });
        console.log(sortedUsers);
        setUsers(sortedUsers);
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
