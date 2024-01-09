import logo from "../assets/images/food-logo.png";
const Hero = () => {
  return (
    <div className="flex flex-col items-center mx-10 text-center bg-gradient-to-r from-blue-300 to-pink-300">
      <h1>Welcome to PitchIn</h1>
      <div className="w-20 h-20 border rounded-full">
        <img src={logo} alt="Pitchin Logo" />
      </div>
      <p className="w-80 m-3">
        PitchIn is an application to give people to the power of buy in a bulk
        to avoid a high inflation. People unite various items together.
      </p>
    </div>
  );
};

export default Hero;
