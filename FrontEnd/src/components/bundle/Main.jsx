const Main = () => {
  const imgCard01 = {
    backgroundImage: "url('/src/assets/pexels-photo-4210786.jpeg')",
  };

  return (
    <>
      <div className="flex flex-col bg-primary h-1/4 w-full">
        <div className="flex flex-col items-center justify-center gap-3 h-full my-8">
          <h1 className="text-center text-inerit text-3xl font-semibold">
            Latest Article
          </h1>
          <div className="w-14 h-1 rounded-sm bg-invert"></div>
        </div>
        <div className="flex flex-col justify-center items-center h-full p-5 md:flex-row md:gap-16 m-5 md:p-10">
          {/* CARD 01 */}

          <div className="flex flex-col w-[18,75rem] h-[31,25rem] gap-10 my-5 shadow-2xl text-black">
            <div className=" h-1/2">
              <img
                className="rounded-t-lg h-full w-full bg-cover bg-center"
                src="/src/assets/pexels-photo-4210786.jpeg"
                alt="img1"
              />
            </div>
            <div className="flex flex-col justify-center items-center h-full p-10 gap-2">
              <div className="w-10 h-1 rounded-sm bg-invert"></div>
              <div className="text-invert text-center px-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
                beatae unde accusantium incidunt ad voluptatem aliquid excepturi
                ab nobis mollitia!
              </div>
            </div>
          </div>

          {/* CARD 02 */}

          <div className="flex flex-col w-[18,75rem] h-[31,25rem] gap-10 my-5 shadow-2xl text-black">
            <div className=" h-1/2">
              <img
                className="rounded-t-lg h-full w-full bg-cover bg-center"
                src="/src/assets/pexels-photo-4210786.jpeg"
                alt="img1"
              />
            </div>
            <div className="flex flex-col justify-center items-center h-full p-10 gap-2">
              <div className="w-10 h-1 rounded-sm bg-invert"></div>
              <div className="text-invert text-center px-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
                beatae unde accusantium incidunt ad voluptatem aliquid excepturi
                ab nobis mollitia!
              </div>
            </div>
          </div>

          {/* CARD 03 */}

          <div className="flex flex-col w-[18,75rem] h-[31,25rem] gap-10 my-5 shadow-2xl text-black">
            <div className=" h-1/2">
              <img
                className="rounded-t-lg h-full w-full bg-cover bg-center"
                src="/src/assets/pexels-photo-4210786.jpeg"
                alt="img1"
              />
            </div>
            <div className="flex flex-col justify-center items-center h-full p-10 gap-2">
              <div className="w-10 h-1 rounded-sm bg-invert"></div>
              <div className="text-invert text-center px-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
                beatae unde accusantium incidunt ad voluptatem aliquid excepturi
                ab nobis mollitia!
              </div>
            </div>
          </div>

          {/* --- */}

        </div>
      </div>
    </>
  );
};

export default Main;
