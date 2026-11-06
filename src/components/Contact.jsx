import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="contact py-[2em] px-[0.5em]">
      <h2 id="contact" className="text-4xl mb-[1em]">
        Let's build something
      </h2>
      <p className="text-md mb-[1em]">
        Have a project or a role in mind? Send me a message and I will reply
        with next steps.
      </p>

      <p className="mb-[1em]">
        <a className="text-2xl pb-2 mail" href="mailto:koyejoibukun@gmail.com">
          koyejoibukun@gmail.com
        </a>
      </p>

      <p>OR</p>

      <a href="https://wa.link/4ol8ln">
        <button className="whatsapp-button mt-[1em] h-[4em] rounded-sm p-2 font-bold cursor-pointer">
          Send me a text
        </button>
      </a>
    </div>
  );
};

export default Contact;
