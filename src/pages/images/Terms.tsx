const Terms = () => {
  return (
    <div className="my-10 px-4">
      <div className="py-5 bg-gradient2 lg:px-16  rounded-lg">
        <h3 className="font-semi text-sm lg:text-xl ">Terms and Conditions:</h3>
        <ol className="list-decimal font-semi px-8">
          {texts.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ol>
      </div>

      <div className="my-10 lg:w-4/5 mx-auto">
        <p>
          <span className="font-semi">Image Usage Terms & Restrictions :</span>
          {rest}
        </p>
      </div>
    </div>
  );
};

export default Terms;

const texts = [
  "Taxes extra (as applicable)",
  "Downloaded videos/images will not be returned/replaced",
  "Available for Bangladesh Territory Only.",
  "100% Money Back Guarantee: All the Subscription Packs mentioned above comes with a 100% Money Back Guarantee.",
  "The downloaded images/videos can be used for Lifetime.",
  "Images cannot be downloaded once the purchased pack is expired.",
  "The remaining images will be carry forwarded automatically to the new pack on renewal before the expiry date.",
];

const rest =
  " Pornographic, defamatory, libelous, immoral, obscene, fraudulent or otherwise unlawful use of this image is strictly prohibited. You further agree not to use the image for any sensitive subject matter, as determined by MASH, including, but not limited to, Sex related products and services, sexually transmitted diseases, substance abuse, alcohol, tobacco, AIDS, cancer, mental ailments, homosexual or alternative lifestyle issues, and physical or mental abuse, without advance written consent from MASH. All images on this website are copyrighted and are the sole property of ImagesBazaar.com. All use and/or publication rights are reserved worldwide. Image use is subject to the issuance and payment of an image use licensing agreement. You may not take, use or copy any image from this website without reading and complying with the terms. ";
