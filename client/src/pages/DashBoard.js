import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import axios from "axios";

const DashBoard = () => {
  const { user } = useAuth0();
  console.log(user);
  const [count, setCount] = useState(0);
  const backendApiUrl = process.env["REACT_APP_API_BASE_URL"];
  // todo avoid making two requests
  useEffect(() => {
    const createAccount = async () => {
      try {
        const response = await axios.post(`${backendApiUrl}/api/auth/signup`, {
          username: user.name,
          picture: user.picture,
          sub: user.sub,
        });
        console.log(response.data);
      } catch (e) {
        console.error("Error creating account", e);
      }
    };
    console.log(count);
    if (user && count === 0) {
      createAccount();
      setCount((prev) => {
        prev++;
      });
    }
  }, [user]);

  if (!user) {
    return null;
  }
  return (
    <div className="pt-32">
      <h2 className="pt-32 text-center">Hello From DashBoard</h2>;
      <div className="text-center">
        <img
          src={user.picture}
          alt="Profile"
          className="w-16 h-16 mx-auto"
          referrerPolicy="no-referrer"
        />
        <div className="profile__headline">
          <h2 className="profile__title">{user.nickname}</h2>
          <span className="profile__description">{user.email}</span>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
