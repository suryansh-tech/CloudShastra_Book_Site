import { atom, useAtom } from "jotai";
import { useEffect } from "react";

const pictures = [
  "CLOUD2",
  "CLOUD1",
  "CLOUD1",
  "CLOUD3",
  "CLOUD3",
  "CLOUD4",
  "CLOUD4",
  "CLOUD5",
  "CLOUD5",
  "CLOUD6",
  "CLOUD6",
  "LAST1",
  "LAST1",
  "LAST2",
  "LAST2",
  "CLOUD2",
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  useEffect(() => {
    const audio = new Audio("/audios/page-flip-01a.mp3");
    audio.play();
  }, [page]);

  return (
    <>
      <main className="pointer-events-none select-none z-10 fixed  inset-0  flex justify-between flex-col">
        <a
          target="_blank" rel="noopener noreferrer"
          className="pointer-events-auto sm:mt-10 mt-5 sm:ml-10 ml-5 flex items-center justify-between"
          href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A100138823&keywords=cloudshastra%20niet&origin=RICH_QUERY_SUGGESTION&position=0&searchId=7b460324-41a2-43d8-a9b8-9307a4f70202&sid=Ha4&spellCorrectionEnabled=false"
        >
          <img className="sm:w-28 w-20 sm:-translate-y-2" src="/images/cloud.png" />

          {/* <!-- From Uiverse.io by barisdogansutcu --> */}
          <div className="flex">
            <a href="#">
              <button id="join" className="sm:mr-3 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 36 36"
                  width="36px"
                  height="36px"
                >
                  <rect width="36" height="36" x="0" y="0" fill="hsla(267, 99%, 68%, 0.01)"></rect>
                  <path
                    fill="#e53935"
                    d="M38.67,42H11.52C11.27,40.62,11,38.57,11,36c0-5,0-11,0-11s1.44-7.39,3.22-9.59 c1.67-2.06,2.76-3.48,6.78-4.41c3-0.7,7.13-0.23,9,1c2.15,1.42,3.37,6.67,3.81,11.29c1.49-0.3,5.21,0.2,5.5,1.28 C40.89,30.29,39.48,38.31,38.67,42z"
                  ></path>
                  <path
                    fill="#b71c1c"
                    d="M39.02,42H11.99c-0.22-2.67-0.48-7.05-0.49-12.72c0.83,4.18,1.63,9.59,6.98,9.79 c3.48,0.12,8.27,0.55,9.83-2.45c1.57-3,3.72-8.95,3.51-15.62c-0.19-5.84-1.75-8.2-2.13-8.7c0.59,0.66,3.74,4.49,4.01,11.7 c0.03,0.83,0.06,1.72,0.08,2.66c4.21-0.15,5.93,1.5,6.07,2.35C40.68,33.85,39.8,38.9,39.02,42z"
                  ></path>
                  <path
                    fill="#212121"
                    d="M35,27.17c0,3.67-0.28,11.2-0.42,14.83h-2C32.72,38.42,33,30.83,33,27.17 c0-5.54-1.46-12.65-3.55-14.02c-1.65-1.08-5.49-1.48-8.23-0.85c-3.62,0.83-4.57,1.99-6.14,3.92L15,16.32 c-1.31,1.6-2.59,6.92-3,8.96v10.8c0,2.58,0.28,4.61,0.54,5.92H10.5c-0.25-1.41-0.5-3.42-0.5-5.92l0.02-11.09 c0.15-0.77,1.55-7.63,3.43-9.94l0.08-0.09c1.65-2.03,2.96-3.63,7.25-4.61c3.28-0.76,7.67-0.25,9.77,1.13 C33.79,13.6,35,22.23,35,27.17z"
                  ></path>
                  <path
                    fill="#01579b"
                    d="M17.165,17.283c5.217-0.055,9.391,0.283,9,6.011c-0.391,5.728-8.478,5.533-9.391,5.337 c-0.913-0.196-7.826-0.043-7.696-5.337C9.209,18,13.645,17.32,17.165,17.283z"
                  ></path>
                  <path
                    fill="#212121"
                    d="M40.739,37.38c-0.28,1.99-0.69,3.53-1.22,4.62h-2.43c0.25-0.19,1.13-1.11,1.67-4.9 c0.57-4-0.23-11.79-0.93-12.78c-0.4-0.4-2.63-0.8-4.37-0.89l0.1-1.99c1.04,0.05,4.53,0.31,5.71,1.49 C40.689,24.36,41.289,33.53,40.739,37.38z"
                  ></path>
                  <path
                    fill="#81d4fa"
                    d="M10.154,20.201c0.261,2.059-0.196,3.351,2.543,3.546s8.076,1.022,9.402-0.554 c1.326-1.576,1.75-4.365-0.891-5.267C19.336,17.287,12.959,16.251,10.154,20.201z"
                  ></path>
                  <path
                    fill="#212121"
                    d="M17.615,29.677c-0.502,0-0.873-0.03-1.052-0.069c-0.086-0.019-0.236-0.035-0.434-0.06 c-5.344-0.679-8.053-2.784-8.052-6.255c0.001-2.698,1.17-7.238,8.986-7.32l0.181-0.002c3.444-0.038,6.414-0.068,8.272,1.818 c1.173,1.191,1.712,3,1.647,5.53c-0.044,1.688-0.785,3.147-2.144,4.217C22.785,29.296,19.388,29.677,17.615,29.677z M17.086,17.973 c-7.006,0.074-7.008,4.023-7.008,5.321c-0.001,3.109,3.598,3.926,6.305,4.27c0.273,0.035,0.48,0.063,0.601,0.089 c0.563,0.101,4.68,0.035,6.855-1.732c0.865-0.702,1.299-1.57,1.326-2.653c0.051-1.958-0.301-3.291-1.073-4.075 c-1.262-1.281-3.834-1.255-6.825-1.222L17.086,17.973z"
                  ></path>
                  <path
                    fill="#e1f5fe"
                    d="M15.078,19.043c1.957-0.326,5.122-0.529,4.435,1.304c-0.489,1.304-7.185,2.185-7.185,0.652 C12.328,19.467,15.078,19.043,15.078,19.043z"
                  ></path>
                </svg>
                <span class="now">now!</span>
                <span class="play">Join</span>
              </button>
            </a>

            <a id="myname" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/suryansh-702a37292/">
            <button id="btn" className="sm:mr-16 mr-5 text-sm tracking-tight ">
              <span class="span-mother">
                <span>M</span>
                <span>A</span>
                <span>K</span>
                <span>R</span>

              </span>
              <span class="span-mother2">
                <span>M</span>
                <span>A</span>
                <span>K</span>
                <span>R</span>
              </span>
            </button>
          </a>

          </div>


        </a>



        <div className="w-full overflow-x-scroll scrollbar-hide pointer-events-auto flex justify-center">
          <div className="overflow-auto flex items-center gap-2 sm:gap-4 max-w-full sm:p-6 p-4">
            {[...pages].map((_, index) => (
              <button
                key={index}
                className={`btn-23 border-transparent hover:border-white transition-all duration-300 px-4 py-3 rounded-full text-lg uppercase shrink-0 border 
          ${index === page ? "bg-white/90 text-black" : "bg-black/30 text-white"}`}
                onClick={() => setPage(index)}
              >
                <span className="text">{index === 0 ? "Cover" : `Page ${index}`}</span>
                <span aria-hidden className="marquee">{index === 0 ? "Cover" : `Page ${index}`}</span>
              </button>
            ))}
            <button
              className={`border-transparent hover:border-white transition-all duration-300 px-4 py-3 rounded-full text-sm uppercase shrink-0 border ${page === pages.length ? "bg-white/90 text-black" : "bg-black/30 text-white"
                }`}
              onClick={() => setPage(pages.length)}
            >
              Back Cover
            </button>
          </div>
        </div>

      </main>

      <div className="fixed inset-0 flex items-center -rotate-2 select-none ">
        <div className="relative">
          <div className="bg-white/0  animate-horizontal-scroll flex items-center gap-8 w-max px-8">
            <h1 className="shrink-0 text-white text-10xl font-black">
              Cloud Shastra
            </h1>
            <h2 className="shrink-0 text-white text-8xl italic font-light">
              Empowering Innovators
            </h2>
            <h2 className="shrink-0 text-white text-12xl font-bold">
              Tech, Innovation & Leadership
            </h2>
            <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
              Cloud & Emerging Tech
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-medium">
              Cloud Shastra Tutorials
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-extralight italic">
              Learn & Grow
            </h2>
            <h2 className="shrink-0 text-white text-13xl font-bold">
              Innovate with Cloud Shastra 🚀
            </h2>
            <h2 className="shrink-0 text-transparent text-13xl font-bold outline-text italic">
              Creativity & Tech
            </h2>

          </div>
          <div className="absolute top-0 left-0 bg-white/0 animate-horizontal-scroll-2 flex items-center gap-8 px-8 w-max">
            <h1 className="shrink-0 text-white text-10xl font-black">
              Cloud Shastra:
            </h1>
            <h2 className="shrink-0 text-white text-8xl italic font-light">
              Empowering Innovators
            </h2>
            <h2 className="shrink-0 text-white text-12xl font-bold">
              Tech, Innovation & Leadership
            </h2>
            <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
              Cloud & Emerging Tech
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-medium">
              Cloud Shastra Tutorials
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-extralight italic">
              Learn & Grow
            </h2>
            <h2 className="shrink-0 text-white text-13xl font-bold">
              Innovate with Cloud Shastra 🚀
            </h2>
            <h2 className="shrink-0 text-transparent text-13xl font-bold outline-text italic">
              Creativity & Tech
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
