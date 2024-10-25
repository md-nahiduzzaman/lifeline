
const HSChoose = () => {
    const features = [
        {
          icon: "👩‍⚕️",
          title: "Expert Team",
          description: "Our team consists of highly skilled professionals with years of experience in the field."
        },
        {
          icon: "⏰",
          title: "Always Available",
          description: "We are here for you around the clock, offering 24/7 services to meet your needs anytime."
        },
        {
          icon: "💰",
          title: "Competitive Rates",
          description: "We offer the best value for your money without compromising on quality."
        },
        {
          icon: "😊",
          title: "Customer First",
          description: "Your satisfaction is our priority. We ensure personalized and attentive service."
        },
        {
          icon: "⚙️",
          title: "Modern Solutions",
          description: "We use the latest technology and innovative solutions to deliver the best results."
        },
        {
          icon: "👥",
          title: "Proven Trust",
          description: "Trusted by thousands of clients, we have built a reputation for reliability and excellence."
        }
      ];
    
  return (
    <div className="bg-[#23085A] py-12 text-white">
     <div className=" lg:flex gap-6 max-w-screen-xl mx-auto h-full">
     <div className="lg:w-1/2">
     <h2 className="text-xl font-bold text-[#5dEB4B]">Why Choose us</h2>
<h2 className=" lg:text-4xl font-bold mt-2">Our Commitment to Quality, Care, and Convenience</h2>
     <p className="my-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, unde id aliquam, rerum quas porro magni consequuntur et itaque nulla, libero recusandae perspiciatis excepturi modi? Dolorem ipsam minima assumenda qui?</p>
<img className="w-full mt-6" src="https://srhospital.in/wp-content/uploads/2021/06/hospital1.jpg" alt="" />
</div>
<div  className="lg:w-1/2">
<section className="text-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-4 shadow-md rounded-lg dark:bg-gray-800"
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-[#23085A]">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
</div>
     </div>
    </div>
  )
}

export default HSChoose
