import { useAppSelector } from "../../redux/hook";
import bkash from "../../assets/bkash.png";

import avatar from "../../assets/avatar.png";
import useTitle from "../../hooks/useTitle";
import Actions from "./Actions";
import EditProfileModal from "./EditProfileModal";
import ChangePaymentModal from "./ChangePaymentModal";
import ChangePasswordModal from "./ChangePasswordModal";

const MyProfile = () => {
  useTitle("Profile");
  const { user } = useAppSelector((state) => state.user);

  return (
    <div className="xl:w-1/2 lg:w-2/3 md:w-4/5 mx-auto  my-20 ">
      <div className="flex flex-col gap-10 ">
        <div className="flex mx-auto justify-center ">
          <img
            src={user?.photoUrl ? user.photoUrl : avatar}
            alt="profile"
            className="w-44 h-44 rounded-full"
          />
        </div>
        <div className=" w-full mx-auto px-2 lg:px-0">
          <p className="font-semi text-lg ">{user?.name}</p>
          <p className="  text-md ">{user?.email}</p>
          <div className="flex justify-between items-center mt-5 bg-gradient bg-opacity-40 p-2 rounded">
            <span className="text-sm font-semi">Payment Method:</span>
            <img src={bkash} alt="" className="w-20" />
          </div>
          <Actions />
        </div>
      </div>
      <EditProfileModal />
      <ChangePaymentModal />
      <ChangePasswordModal />
    </div>
  );
};

export default MyProfile;