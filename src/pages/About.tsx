import React from "react";
import Header from "../components/Header";

const About: React.FC = () => {
  return (
    <>
      <Header />
      <main className="max-w-[960px] mt-[10em] my-0 mx-auto animate-about-fadeIn tracking-[0.96px] leading-[25.6px]">
        <h1 className="font-unica-one text-[2em] leading-[51.2px] my-[0.67em] font-bold  mx-0">
          About
        </h1>
        <div>
          <p className="font-noto-sans my-4">Hey there!</p>
          <p className="font-noto-sans my-4">
            Welcome to my portfolio. I have been programming since late 2019. It
            started in high school, where I built simple school projects. Later,
            I focused on building web applications.
          </p>
          <p className="font-noto-sans my-4">
            Now, I write code for web extensions, webhooks, and much more. I
            find joy in writing solutions that solve a tiny problem in my life.
          </p>
          <p className="font-noto-sans my-4">
            I hope to add a blog section in the future, where I go about sharing
            my knowledge on different aspects of programming, or life itself.
          </p>
          <hr className="opacity-[0.1] border-r-0 border-l-0 border-b-[5px] border-t-0 border-dashed w-[50%] my-[1.8em] mx-auto" />
          <p className="font-noto-sans my-4">Some of my project are:</p>
          <ul>
            <li>
              <a
                className="font-open-sans no-underline shadow-red hover:text-[#fe5185] transition-colors duration-[0.25s] ease-out"
                href="https://ratemyshow.vercel.app/"
                target="_blank"
              >
                RateMyShow
              </a>
              <span className="font-noto-sans">
                : A firefox extension that auto syncs and lets you rate anime
                directly in Crunchyroll.
              </span>
            </li>
            <li>
              <a
                className="font-open-sans no-underline shadow-red hover:text-[#fe5185] transition-colors duration-[0.25s] ease-out"
                href="https://github.com/BarsatKhadka/WordBuddy.ai"
                target="_blank"
              >
                WordBuddy AI
              </a>
              <span className="font-noto-sans">
                : A voice driven AI web app for kids to learn new word
                pronunciation.
              </span>
            </li>
            <li>
              <a
                className="font-open-sans n o-underline shadow-red hover:text-[#fe5185] transition-colors duration-[0.25s] ease-out"
                href="https://github.com/BarsatKhadka/PrepAI/"
                target="_blank"
              >
                PrepAI
              </a>
              <span className="font-noto-sans">
                : A web applcation with AI tools to study through interactive
                quizzes, flashcards, and a study plan.
              </span>
            </li>
          </ul>
          <p className="font-noto-sans my-4">
            You can follow up with my latest projects in{" "}
            <a
              className="font-open-sans no-underline shadow-red hover:text-[#fe5185] transition-colors duration-[0.25s] ease-out"
              href="https://github.com/RashibK"
              target="_blank"
            >
              GitHub
            </a>{" "}
            or just drop a message in{" "}
            <a
              className="font-open-sans no-underline shadow-red hover:text-[#fe5185] transition-colors duration-[0.25s] ease-out"
              href="https://www.linkedin.com/in/rashibk/"
              target="_blank"
            >
              LinkedIn
            </a>
            .
          </p>
          <footer className="text-[0.9em] text-center mt-16 mb-24 max-w-[960px] ">
            <p className="font-noto-sans leading-[23.033px]">
              &copy; 2025{" "}
              <a
                className="font-open-sans hover:text-[#fe5185] transition-colors duration-400 ease-out"
                href="/"
              >
                Rashib Khanal
              </a>
            </p>
          </footer>
        </div>
      </main>
    </>
  );
};

export default About;
