export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      <form className="max-w-md space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-2 border rounded"/>
        <input type="email" placeholder="Your Email" className="w-full p-2 border rounded"/>
        <textarea placeholder="Your Message" className="w-full p-2 border rounded"/>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
      </form>
    </div>
  )
}
