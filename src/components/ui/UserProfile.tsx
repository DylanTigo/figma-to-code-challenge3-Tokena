import profileImage from "../../assets/images/profile-image.jpg";
import chevronDown from "../../assets/icons/chevron-down.svg";

const UserProfile = () => {
  return (
    <div className="flex gap-2 p-2 items-center justify-between bg-gray-light dark:bg-gray-dark/20 rounded-lg">
      <div className="flex gap-2 items-center">
        <img
          src={profileImage}
          alt="profile-image"
          className="w-10 h-10 rounded-full shrink-0"
        />
        <div className="text-xs max-w-32">
          <p className="text-black dark:text-white font-medium">John Doe</p>
          <p className="text-gray-dark dark:text-gray-dark/80 font-normal truncate">
            johndoe@theassisqqsdfqsdsdter.com
          </p>
        </div>
      </div>
      <img src={chevronDown} alt="chevron-down" className="w-4 h-4 object-cover shrink-0 " />
    </div>
  );
};

export default UserProfile;
