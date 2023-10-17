/* eslint-disable @typescript-eslint/no-explicit-any */
import toast from "react-hot-toast";
import { useDeleteImageMutation } from "../../../redux/api/apiSlice";
import { useAppSelector } from "../../../redux/hook";
import { IImage } from "./ManageImages";

const DeleteModal = ({ image }: { image: IImage }) => {
  const [deleteImage] = useDeleteImageMutation();
  const { accessToken } = useAppSelector((state) => state.accessToken);

  const handleImageDelete = async (imageId: string) => {
    const response = (await deleteImage({
      accessToken: accessToken,
      imageId: imageId,
    })) as any;
    if (response.data) toast.success("Image deleted successfully");
    if (response.error) toast.error("Something went wrong");
  };

  return (
    <div>
      <input type="checkbox" id="delete-image" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Click confirm to delete image</h3>
          <div className="mt-5">
            <button
              onClick={() => handleImageDelete(image!._id)}
              className="px-8 py-3 text-white w-full bg-black bg-opacity-90 hover:bg-opacity-100 duration-200  rounded-lg font-semi "
            >
              Confirm
            </button>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="delete-image">
          Close
        </label>
      </div>
    </div>
  );
};

export default DeleteModal;
