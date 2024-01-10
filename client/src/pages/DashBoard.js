import { useAuth0 } from "@auth0/auth0-react";
const DashBoard = () => {
  const { user } = useAuth0();
  console.log(user);

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
