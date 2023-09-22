import { logo } from "../assets";

const Content = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="summify-logo" className="w-28 object-contain" />
        <button
          onClick={() => window.open("https://github.com/devanshuc/Summify")}
          className="black_btn">
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>

      <h2 className="desc">
        Instantly summarize articles with OpenAI GPT model. Effortless,
        efficient reading at your fingertips.
      </h2>
    </header>
  );
};

export default Content;
