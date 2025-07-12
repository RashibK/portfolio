import "./App.css";

function App() {
  return (
    <>
      <div className="min-h-screen m-auto max-w-[93%] flex flex-col justify-center items-center text-[1.5rem]">
        <div className="flex grow flex-col justify-center">
          <h1 className="font-unica-one tracking-[0.96px] text-[1.6em] font-bold leading-[61.43px] text-center">
            /Rashib Khanal/
          </h1>
          <p className="font-noto-sans mb-[1.5em] text-center text-[0.7em] leading-normal tracking-[0.96px] opacity-[0.9]">
            Developer building stuffs on internet :)
          </p>
          <nav className="">
            <a className="block text-center mt-[0.5em]" href="/">
              About
            </a>
            <a
              className="block text-center mt-[0.5em]"
              href="mailto@rashib.dev"
              target="_blank"
            >
              Contact
            </a>
          </nav>
        </div>
        <div className="opacity-[0.6] ">
          <p className="text-[0.7em] mb-[0.9em]">
            &copy; 2025 <a href="/">Rashib Khanal</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
