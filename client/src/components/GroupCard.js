import { JoinButton } from "./buttons/join-button";
import AvatarImg from "./AvatarImage";

const GroupCard = ({ group }) => {
  const { name, description, users, memberCount, max_num } = group;

  return (
    <div className="border rounded-md w-80 h-80 p-4 mx-auto my-10 flex flex-col justify-between">
      <div className="flex flex-col h-full justify-center items-center gap-5">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="flex items-center w-full px-3 place-content-between">
          <div className="flex">
            {users.map((user, index) => {
              return <AvatarImg user={user} key={index} />;
            })}
          </div>
          <div>
            {memberCount}/{max_num}
          </div>
        </div>
      </div>
      <JoinButton groupId={group._id} />
    </div>
  );
};

export default GroupCard;
