export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-lime-100 dark:bg-zinc-900 text-[#4338ca] dark:text-white p-10 flex flex-col items-center justify-center text-center"
    >
      <div>
      <h2 className="text-4xl font-extrabold text-center mb-6">Get In Touch</h2>
      <p className="text-gray-600 text-2xl text-center mb-16 max-w-3xl mx-auto">
          Want to collaborate or just say hi? Drop me a message!
        </p>
        <form className="space-y-4 max-w-lg mx-auto w-full">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
