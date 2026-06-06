import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xojzeqoj", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <footer
      id="contact"
      className="max-w-xl mx-auto px-8 py-24 text-center border-t border-zinc-900"
    >
      <h2 className="text-3xl font-bold mb-2 tracking-tight">Get In Touch</h2>
      <p className="text-zinc-400 mb-8 text-sm">
        Have a question or want to work together? Drop a message below.
      </p>

      {status === "SUCCESS" ? (
        <p className="text-sm border border-white p-4 rounded text-emerald-400 bg-zinc-950">
          Message sent successfully. I will get back to you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="text-left space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-xs uppercase tracking-widest text-zinc-400 mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full bg-black border border-zinc-800 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs uppercase tracking-widest text-zinc-400 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              className="w-full bg-black border border-zinc-800 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors resize-none"
              placeholder="Your message details..."
            />
          </div>

          {status === "ERROR" && (
            <p className="text-xs text-red-400">
              Oops! Something went wrong. Please try again.
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-white text-black font-semibold text-sm py-3 rounded hover:bg-zinc-200 transition-colors"
          >
            Send Message
          </button>
        </form>
      )}
    </footer>
  );
}
