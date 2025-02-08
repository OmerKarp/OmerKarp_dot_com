const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-5 mr-10">
        <p>Have a nice day!</p>
        <p>|</p>
        <p>My Blog</p>
      </div>

      <div className="flex gap-4 justify-center items-center">
        <a
          href="https://github.com/omerkarp"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon cursor-pointer hover:opacity-75 transition"
        >
          <img src="/assets/github.svg" alt="github" className="w-8 h-8" />
        </a>

        <a
          href="https://linkedin.com/in/omerkarp"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon cursor-pointer hover:opacity-75 transition"
        >
          <img
            src="/assets/LinkedIn_white.png"
            alt="linkedin"
            className="w-8 h-8"
          />
        </a>

        <a
          href="https://instagram.com/omer_karp1"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon cursor-pointer hover:opacity-75 transition"
        >
          <img
            src="/assets/instagram.svg"
            alt="instagram"
            className="w-8 h-8"
          />
        </a>
      </div>

      <p className="text-white-500">© 2025 Omer Karp. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
