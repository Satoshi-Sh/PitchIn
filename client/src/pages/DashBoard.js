import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import axios from "axios";
import GroupCard from "../components/GroupCard";

const DashBoard = () => {
  const { user } = useAuth0();
  const [count, setCount] = useState(0);
  const [myGroup, setMyGroup] = useState(null);
  const [groups, setGroups] = useState([]);
  const backendApiUrl = process.env["REACT_APP_API_BASE_URL"];
  // todo avoid making two requests
  useEffect(() => {
    const createAccount = async () => {
      const username = user.name.includes("@")
        ? user.name.split("@")[0]
        : user.name;
      try {
        const response = await axios.post(`${backendApiUrl}/api/auth/signup`, {
          username,
          picture: user.picture,
          sub: user.sub,
        });
        const { group } = response.data;
        if (group) {
          setMyGroup(group);
        } else {
          // get all the groups
          try {
            const response = await axios.get(`${backendApiUrl}/api/group/all`);
            const { groups } = response.data;
            setGroups(groups);
          } catch (e) {
            console.error("Error retrieving groups", e);
          }
        }
      } catch (e) {
        console.error("Error creating account", e);
      }
    };
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
    <div className="pt-32 text-center">
      {myGroup ? (
        <h2>This is your group</h2>
      ) : (
        <div>
          <h2>Let's find your group</h2>
          {groups.length > 0 ? (
            <div className="flex flex-wrap">
              {groups.map((group, index) => {
                return <GroupCard key={index} group={group} />;
              })}
            </div>
          ) : (
            <p className="mt-10">No available groups</p>
          )}
        </div>
      )}
    </div>
  );
};

export default DashBoard;
