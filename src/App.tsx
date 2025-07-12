import "./App.css";

function App() {
  return (
    <>
      <div className="min-h-screen m-auto max-w-[93%] flex flex-col justify-center items-center text-[1.5rem] animate-main-fadeIn">
        <div className="flex grow flex-col justify-center">
          <h1 className="font-unica-one tracking-[0.96px] text-[1.6em] font-bold leading-[61.43px] text-center">
            /Rashib Khanal/
          </h1>
          <p className="font-noto-sans mb-[1.5em] text-center text-[0.7em] leading-normal tracking-[0.96px] opacity-[0.9]">
            Developer building stuffs on internet :)
          </p>
          <nav className="">
            <a
              className="font-open-sans block text-center mt-[0.5em] hover:text-[#fe5185] transition-colors duration-[0.4s] ease-out leading-[38.4px] tracking-[0.96px]"
              href="/"
            >
              About
            </a>
            <a
              className="font-open-sans block text-center mt-[0.5em] hover:text-[#fe5185] transition-colors duration-400 ease-out leading-[38.4px] tracking-[0.96px]"
              target="_blank"
              href="mailto:contact@rashib.dev"
              
            >
              Contact
            </a>
          </nav>
        </div>
        <div className="opacity-[0.6] ">
          <p className="text-[0.7em] mb-[0.9em]">
            &copy; 2025{" "}
            <a
              className="hover:text-[#fe5185] transition-colors duration-400 ease-out"
              href="/"
            >
              Rashib Khanal
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
