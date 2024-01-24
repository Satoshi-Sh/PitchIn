import AutoScroll from "../components/AutoScroll";
import Hero from "../components/Hero";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuth0();
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user]);
  return (
    <div className="py-36 flex flex-col justify-between h-screen">
      <Hero />
      <AutoScroll />
    </div>
  );
};

export default Home;
