const Main = () => {
  const imgCard01 = {
    backgroundImage: "url('/src/assets/pexels-photo-4210786.jpeg')",
  };

  return (
    <>
      <div className="flex flex-col bg-primary h-1/4 w-full tracking-wider">
        <div className="flex flex-col items-center justify-center gap-3 h-full my-8">
          <h1 className="text-center text-invert text-3xl font-semibold">
            LATEST ARTICLE
          </h1>
          <div className="w-14 h-1 rounded-sm bg-invert"></div>
        </div>
        <div className=" leading-8 flex flex-col justify-center items-center h-full p-5 md:flex-row md:gap-16 m-5 md:p-10">
          {/* CARD 01 */}

          <div className="flex flex-col w-[18,75rem] h-[31,25rem] gap-10 my-5 shadow-2xl text-black">
            <div className=" h-1/2">
              <img
                className="h-full w-full bg-cover bg-center"
                src="\src\assets\pexels-photo-4506840.webp"
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
                className="h-full w-full bg-cover bg-center"
                src="\src\assets\ba723d545292d2a77cd997c64af2f161-1000.jpg"
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
                className="h-full w-full bg-cover bg-center"
                src="\src\assets\e4b0137b250e2bbcc2ca999b3834dbd1-1000.jpg"
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

      {/* MAIN 02 */}

      <div className="flex flex-col h-full md:flex-row tracking-wider">
        <div className="h-full w-full">
          <img
            className="h-[40rem] w-full bg-cover bg-center"
            src="/src/assets/pexels-photo-4210786.jpeg"
            alt="img1"
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-3 p-20">
          <h1 className="text-invert text-semibold text-3xl">ABOUT</h1>
          <div className="w-14 h-1 rounded-sm bg-invert"></div>
          <p className="mt-5 text-invert leading-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In totam,
            similique sed sint aperiam, quidem modi nulla laudantium dolore
            libero, labore veritatis quos facere nisi! Iusto at fugit quidem
            iste reprehenderit sequi consectetur nam ut libero animi tempore
            sint, cum repellat quibusdam nihil? Impedit adipisci quia, atque
            alias veniam nesciunt consequuntur perspiciatis velit facilis
            eveniet sunt. Sint possimus, beatae in exercitationem impedit
            quibusdam, eveniet repellendus, dolore voluptatem quaerat sunt
            quidem. Libero non sapiente dolores aliquid dolorem mollitia, quis,
            quod ea eum consequuntur tempora amet id consequatur? Veritatis
            voluptatum inventore quia delectus ab quo asperiores nisi, saepe
            quidem.
            </p>
        </div>
      </div>
    </>
  );
};

export default Main;