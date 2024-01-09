import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const IconContainer = ({ icon }) => {
  return (
    <li className="border bg-blue-500 rounded-full w-12 h-12 p-2 flex justify-center items-center overflow-hidden">
      <FontAwesomeIcon icon={icon} className="text-2xl text-white" />
    </li>
  );
};

export default IconContainer;
