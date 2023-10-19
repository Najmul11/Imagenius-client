import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const TermsConditions = () => {
  useTitle("T&C");
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="lg:w-3/5 lg:mx-auto my-10">
      <button
        onClick={goBack}
        className=" bg-black bg-opacity-75 text-white mb-10 hover:bg-opacity-100 transition-all duration-100   p-4 text-3xl rounded-full  active:bg-gradient2"
      >
        <MdArrowBackIosNew />
      </button>
      <div>
        <h4 className="font-semi"> 1. Acceptance of Terms</h4>
        <p>
          By signing up and using Imagenius, you agree to be bound by these
          terms and conditions. Please read them carefully.
        </p>
      </div>
      <div>
        <h4 className="font-semi">2. Description of Service</h4>
        <p>
          Imagenius is an online platform that allows users to buy and sell
          images. Users can upload, showcase, and purchase images from other
          users.
        </p>
      </div>
      <div>
        <h4 className="font-semi"> 3. User Eligibility</h4>
        <p>
          You must be at least 18 years old to use Imagenius. If you are under
          18, you may use the service only with the involvement of a parent or
          guardian.
        </p>
      </div>
      <div>
        <h4 className="font-semi">4. User Registration</h4>
        <p>
          You agree to provide accurate and complete information during the
          registration process. You are responsible for maintaining the
          confidentiality of your account and password.
        </p>
      </div>
      <div>
        <h4 className="font-semi">5. Content and User Conduct</h4>
        <p>
          a. You are solely responsible for the content you upload or post on
          Imagenius.
        </p>
        <p>
          b. You will not use Imagenius for any illegal or unauthorized purpose.
        </p>
        <p>
          c. You will not upload or transmit any malicious code or engage in any
          activity that could disrupt the service or harm other users.
        </p>
      </div>
      <div>
        <h4 className="font-semi">6. Buying and Selling Images</h4>
        <p>
          a. When buying an image, you agree to pay the price as listed by the
          seller.
        </p>
        <p>
          b. When selling an image, you agree to deliver the image to the buyer
          upon successful payment.
        </p>
        <p>
          c. Imagenius may charge a commission on sales, as outlined in the
          Pricing and Fees section.
        </p>
      </div>
      <div>
        <h4 className="font-semi">8. Privacy</h4>
        <p>
          Your use of Imagenius is subject to our Privacy Policy, which can be
          found on our website.
        </p>
      </div>
      <div>
        <h4 className="font-semi">10. Disclaimer</h4>
        <p>
          Imagenius provides the service "as is" without any warranties. We do
          not guarantee that the service will be error-free or uninterrupted.
        </p>
      </div>
      <div>
        <h4 className="font-semi">11. Limitation of Liability</h4>
        <p>
          Imagenius is not liable for any direct or indirect damages that result
          from your use of the service.
        </p>
      </div>
      <div>
        <h4 className="font-semi">11. Limitation of Liability</h4>
        <p>
          Imagenius reserves the right to update or modify these terms and
          conditions at any time. You will be notified of changes, and your
          continued use of the service constitutes acceptance of the revised
          terms.
        </p>
      </div>
    </div>
  );
};

export default TermsConditions;
