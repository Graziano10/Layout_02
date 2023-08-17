import Navbar from "./Navbar";

const Header = () => {

  const logoHeader02 = {
    backgroundImage: "url('/src/assets/a1833864c2aa9c70461f059ef345711f-1000.jpg')",
  };
  return (
    <>
      <div
        className="h-[50rem] bg-cover bg-center mx-5 my-5"
        style={logoHeader02}
      >
        <Navbar />
        <header className=" flex flex-col gap-8 justify-center items-center h-full">
          <div className="px-10 flex flex-col gap-8 justify-center items-center h-1/2">
            <h1 className="text-invert font-bold text-5xl text-center">
              Nature Is <i>Formidable</i>
            </h1>

            <p className="text-invert font-semibold text-lg text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
              consectetur distinctio fuga consequatur quae tempora pariatur
              officia nulla totam dignissimos, quo voluptate dolores cumque
              suscipit! Numquam voluptates rem repellendus molestias.
            </p>
            <span className="bg-invert boeder-0 rounded-sm w-16 h-1"></span>

            <div className="h-1/2"></div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
