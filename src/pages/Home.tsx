import CreateUser from "@/components/CreateUser";
import Header from "@/components/Header";
import UsersTable from "@/components/UsersTable";
import { BASE_URL } from "@/lib/constants";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState([]);

  useEffect(() => {
    setLoading(true);
    const listUsers = async () => {
      const token = localStorage.getItem("token");
      axios
        .post(
          `${BASE_URL}/listAll`,
          {
            token,
          },
          {
            headers: {
              Authorization:
                "Basic Qm9tYVBvcnRhbENsaWVudDpjYmZiZDBhYi0yODc2LTQ0MmItYTNjOC04YWVkOTYzMmJhODM= ",
            },
          }
        )
        .then((res) => setUsers(res.data?.payload.content))
        .catch((err) => console.log("error", err))
        .finally(() => {
          setLoading(false);
        });
    };

    listUsers();
  }, []);

  return (
    <>
      <Header />
      <div className="max-w-screen-md p-6 grid place-items-center space-y-4">
        <CreateUser />
        {loading ? <h1>Loading</h1> : <UsersTable users={users} />}
      </div>
    </>
  );
};

export default Home;
