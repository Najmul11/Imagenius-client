import { Controller, useForm } from "react-hook-form";

type IFormData = {
  paymentMethod: string;
};

const options = ["Bkash", "Nagad", "Binance"];
const ChangePaymentModal = () => {
  const { control, handleSubmit } = useForm<IFormData>();

  return (
    <>
      <input type="checkbox" id="change-payment" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Change Payment Method</h3>
          <form className="mt-10 flex flex-col gap-5">
            <div className="relative h-12 ">
              <label
                htmlFor=""
                className="absolute -top-3 left-5 z-30 bg-white px-3 text-sm font-semi"
              >
                Select Payment Method
              </label>
              <Controller
                name="paymentMethod"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <select
                    {...field}
                    className="absolute top-0 left-0 px-8 border bg-transparent rounded-lg h-full w-full focus:outline-none"
                  >
                    <option value="">Select Payment Method</option>
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
                type="submit"
                className="px-8 py-3 text-white w-full bg-black bg-opacity-90 hover:bg-opacity-100 duration-200  rounded-lg font-semi "
              >
                Update
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
