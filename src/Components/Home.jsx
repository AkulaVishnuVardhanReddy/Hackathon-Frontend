import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaUsers, FaBell, FaRocket, FaHandshake } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import LoginNavBar from "./LoginNavBar";

// Landing Page Component
export default function Home() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Carousel Section (No Effects, No Text) */}
      <LoginNavBar/>
      <CarouselSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

// 🎠 Carousel Section (No Effects, No Text)
function CarouselSection() {
  const slides = [
    "../../public/c1.png",
    "../../public/c2.png",
    "../../public/c3.png"
  ];

  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={4000}
      showThumbs={false}
      showStatus={false}
      transitionTime={0} // No transition effects
      className="text-center"
    >
      {slides.map((image, index) => (
        <div key={index} className="relative w-full h-[80vh]">
          <img src={image} className="w-full h-full object-cover brightness-90" alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
}

// 🚀 Features Section
function FeaturesSection() {
  const features = [
    { icon: <FaUsers className="text-blue-500 text-3xl" />, title: "Community Engagement", desc: "Connect with peers, faculty, and alumni." },
    { icon: <FaBell className="text-green-500 text-3xl" />, title: "Instant Notifications", desc: "Stay updated with important announcements." },
    { icon: <FaRocket className="text-red-500 text-3xl" />, title: "Career Opportunities", desc: "Explore jobs, internships, and networking." },
    { icon: <FaHandshake className="text-purple-500 text-3xl" />, title: "Collaboration", desc: "Work on projects and participate in discussions." }
  ];

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">Amazing Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            {feature.icon}
            <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// 🌟 Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    { name: "Alice Johnson", role: "Computer Science Student", text: "This platform has transformed our university discussions. It's structured and easy to use!" },
    { name: "Dr. Michael Smith", role: "Professor", text: "Finally, a way to interact with students seamlessly. This is the future of education." },
    { name: "John Doe", role: "Alumnus", text: "Connecting with students and guiding them has never been easier!" }
  ];

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">What Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <p className="text-gray-700 italic">"{testimonial.text}"</p>
            <h3 className="mt-4 font-semibold text-gray-900">{testimonial.name}</h3>
            <p className="text-gray-500 text-sm">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// 🌍 Footer Section
function Footer() {
  return (
    <footer className="bg-gray-200 py-8 text-center">
      <div className="flex justify-center space-x-6 mb-4">
        <FaFacebook className="text-blue-600 text-2xl cursor-pointer hover:text-blue-800" />
        <FaTwitter className="text-blue-400 text-2xl cursor-pointer hover:text-blue-600" />
        <FaInstagram className="text-pink-600 text-2xl cursor-pointer hover:text-pink-800" />
        <FaLinkedin className="text-blue-700 text-2xl cursor-pointer hover:text-blue-900" />
      </div>
      <p className="text-gray-600">&copy; 2025 University Collab. All Rights Reserved.</p>
    </footer>
  );
}
