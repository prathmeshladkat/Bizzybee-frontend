const TestimonialCard = ({ name, testimonial }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
      <div className="border-b border-gray-700 pb-3 mb-4">
        <h3 className="text-white text-xl font-semibold">{name}</h3>
      </div>
      <div className="relative">
        <span className="text-gray-500 text-6xl absolute top-0 left-0">"</span>
        <p className="text-gray-300 mt-6 mb-4 relative z-10">{testimonial}</p>
        <span className="text-gray-500 text-6xl absolute bottom-0 right-0">
          "
        </span>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Gabriel & Fiance",
      testimonial:
        "I met my fiancé on tinder during the quarantine for COVID. She is from Lafayette, Indiana and I am from Cleveland, Ohio. We are both Christians who fell madly in love.",
    },
    {
      name: "Kenneth & Elliot",
      testimonial:
        "I honestly had been on many Tinder dates and was absolutely sure I was meeting a fling to get a free meal and have some fun...3 years and sooo many dates and memories later, I am married to my Tinder guy, Kenny!",
    },
    {
      name: "Victoria and Bayleigh ❤️",
      testimonial:
        "THANK YOU for making it possible for me to meet my soulmate. Five minutes into our first conversation, my now-wife mentioned how we would have an amazing wedding.",
    },
  ];

  return (
    <div className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
          Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              testimonial={testimonial.testimonial}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
