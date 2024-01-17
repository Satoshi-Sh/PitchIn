import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StoreCard = ({ store }) => {
  const { name, location } = store;
  return (
    <div className="border p-4">
      <h3 className="italic font-semibold">{name}</h3>
      <p>
        <FontAwesomeIcon icon={faLocationPin} className="text-red-400" />
        &nbsp;
        {location}
      </p>
    </div>
  );
};

export default StoreCard;
