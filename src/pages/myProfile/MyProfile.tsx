import { useAppSelector } from "../../redux/hook";
import bkash from "../../assets/bkash.png";

import avatar from "../../assets/avatar.png";
import useTitle from "../../hooks/useTitle";
import Actions from "./Actions";

const MyProfile = () => {
  useTitle("Profile");
  const { user } = useAppSelector((state) => state.user);

  return (
    <div className="w-1/2 mx-auto  my-20">
      <div className="flex flex-col gap-10 ">
        <div className="flex  w-1/2 mx-auto justify-center ">
          <img
            src={user?.photoUrl ? user.photoUrl : avatar}
            alt="profile"
            className="w-44 h-44 rounded-full"
          />
        </div>
        <div className="w-4/5 mx-auto">
          <p className="font-semi text-lg ">{user?.name}</p>
          <p className="  text-md ">{user?.email}</p>
          <div className="flex justify-between items-center mt-5 bg-gradient bg-opacity-40 p-2 rounded">
            <span className="text-sm font-semi">Payment Method:</span>
            <img src={bkash} alt="" className="w-20" />
          </div>
          <Actions />
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
