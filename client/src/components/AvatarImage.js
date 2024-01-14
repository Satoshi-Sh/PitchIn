const AvatarImg = ({ user }) => {
  return (
    <img src={user.image} alt="profile" className="w-8 h-8 rounded-full" />
  );
};

export default AvatarImg;
