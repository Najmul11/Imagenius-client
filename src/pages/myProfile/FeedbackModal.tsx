/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAppSelector } from "../../redux/hook";
import { IUser } from "../auth/Login";
import { useCreateFeedbackMutation } from "../../redux/api/apiSlice";

type IFormData = {
  email: string;
  name: string;
  rating: number;
  suggestion: string;
};

const FeedbackModal = ({ user }: { user: IUser }) => {
  const { control, handleSubmit } = useForm<IFormData>();
  const { accessToken } = useAppSelector((state) => state.accessToken);

  const [createFeedback] = useCreateFeedbackMutation();

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    const payload = {
      rating: data?.rating,
      feedback: data?.suggestion,
    };
    const response = (await createFeedback({ payload, accessToken })) as any;

    if (response.data) toast.success("Thanks for the feedback");
    if (response.error) toast.error("Operation failed. Try later");
  };

  return (
    <>
      {user && (
        <>
          <input type="checkbox" id="feedback" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <h3 className="text-lg font-bold">Give us your Feedback</h3>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-10 flex flex-col gap-5"
              >
                <div className="relative h-12">
                  <label
                    htmlFor=""
                    className="absolute -top-3 left-5 z-30 bg-white px-3 text-sm font-semi"
                  >
                    Name
                  </label>
                  <Controller
                    name="name"
                    disabled
                    control={control}
                    defaultValue={user?.name}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        placeholder="Name"
                        className="absolute top-0 left-0 px-8 border bg-transparent rounded-lg  h-full w-full  focus:outline-none"
                      />
                    )}
                  />
                </div>
                <div className="relative h-12 ">
                  <label
                    htmlFor=""
                    className="absolute -top-3 left-5 z-30 bg-white px-3 text-sm font-semi"
                  >
                    Email
                  </label>
                  <Controller
                    name="email"
                    disabled
                    control={control}
                    defaultValue={user?.email}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        placeholder="Email Address"
                        className="absolute top-0 left-0 px-8 border bg-transparent rounded-lg  h-full w-full   focus:outline-none"
                      />
                    )}
                  />
                </div>
                <div className="relative h-12 ">
                  <label
                    htmlFor=""
                    className="absolute -top-3 left-5 z-30 bg-white px-3 text-sm font-semi"
                  >
                    Rating (1-10)
                  </label>
                  <Controller
                    name="rating"
                    control={control}
                    defaultValue={10}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="number"
                        placeholder="Rate us"
                        className="absolute top-0 left-0 px-8 border bg-transparent rounded-lg  h-full w-full   focus:outline-none"
                      />
                    )}
                  />
                </div>
                <div className="relative h-12 ">
                  <label
                    htmlFor=""
                    className="absolute -top-3 left-5 z-30 bg-white px-3 text-sm font-semi"
                  >
                    Suggestion
                  </label>
                  <Controller
                    name="suggestion"
                    control={control}
                    defaultValue="Awesome place to get quality images"
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        placeholder="Your feedback"
                        className="absolute top-0 left-0 px-8 border bg-transparent rounded-lg  h-full w-full   focus:outline-none"
                      />
                    )}
                  />
                </div>
                <div className="">
                  <button
                    type="submit"
                    className="px-8 py-3 text-white w-full bg-black bg-opacity-90 hover:bg-opacity-100 duration-200  rounded-lg font-semi "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <label className="modal-backdrop" htmlFor="feedback">
              Close
            </label>
          </div>
        </>
      )}
    </>
  );
};

export default FeedbackModal;
