import AutoScroll from "../components/AutoScroll";
import Hero from "../components/Hero";
const Home = () => {
  return (
    <div className="py-36 flex flex-col justify-between h-screen">
      <Hero />
      <AutoScroll />
    </div>
  );
};

export default Home;
