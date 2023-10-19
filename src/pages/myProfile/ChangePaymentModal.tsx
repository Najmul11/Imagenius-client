/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useChangePaymentMutation } from "../../redux/api/apiSlice";
import { useAppSelector } from "../../redux/hook";
import toast from "react-hot-toast";

type IFormData = {
  payment: string;
};

const options = ["Bkash", "Nagad", "Binance"];

const ChangePaymentModal = () => {
  const { control, handleSubmit } = useForm<IFormData>();
  const [changePayment, { isLoading }] = useChangePaymentMutation();

  const { accessToken } = useAppSelector((state) => state.accessToken);

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    const response = (await changePayment({
      data,
      accessToken: accessToken,
    })) as any;

    if (response.data) toast.success("Payment Method Updated Successfully");
    if (response.error) toast.error("Operation failed. Try later");
  };

  return (
    <>
      <input type="checkbox" id="change-payment" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Change Payment Method</h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-10 flex flex-col gap-5"
          >
            <div className="relative h-12 ">
              <label
                htmlFor=""
                className="absolute -top-3 left-5 z-30 bg-white px-3 text-sm font-semi"
              >
                Select Payment Method
              </label>
              <Controller
                name="payment"
                control={control}
                defaultValue="Bkash"
                render={({ field }) => (
                  <select
                    {...field}
                    className="absolute top-0 left-0 px-8 border bg-transparent rounded-lg h-full w-full focus:outline-none"
                  >
                    {options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>
            <div className="">
              <button
                disabled={isLoading}
                type="submit"
                className="px-8 h-12 text-white w-full bg-black bg-opacity-90 hover:bg-opacity-100 duration-200  rounded-lg font-semi "
              >
                {isLoading ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  "Update"
                )}
              </button>
            </div>
          </form>
        </div>
        <label className="modal-backdrop" htmlFor="change-payment">
          Close
        </label>
      </div>
    </>
  );
};

export default ChangePaymentModal;
