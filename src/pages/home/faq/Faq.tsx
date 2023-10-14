import { faqs } from "./Faq.constant";

const Faq = () => {
  return (
    <div className="flex flex-col gap-10 py-10 bg-gradient-to-r   from-gradient2 to-white">
      <h2 className="text-center font-semi text-2xl ">
        Frequently Asked Questions
      </h2>
      <div className="lg:w-1/2 mx-auto ">
        {faqs.map((faq, index) => (
          <div className="collapse collapse-plus t mb-5 " key={index}>
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              {faq.question}
            </div>
            <div className="collapse-content">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
