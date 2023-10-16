import { Link, useNavigate } from "react-router-dom";
import notFound from "../../assets/notFound.png";
import { useState, useEffect } from "react";

const NotFound = () => {
  const [second, setSecond] = useState<number>(5);

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      if (second > 0) {
        setSecond((prevSecond) => prevSecond - 1);
      } else {
        clearInterval(timer);
        navigate("/");
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [second, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img src={notFound} alt="" className="w-72" />
      <p className="font-semi">
        Going Back to{" "}
        <Link to={"/"} className="underline cursor-pointer ">
          Home
        </Link>{" "}
        in {second} Seconds.
      </p>
    </div>
  );
};

export default NotFound;
