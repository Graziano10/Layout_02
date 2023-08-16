import Navbar from "./Navbar";

const Header = () => {
  const logoHeader = {
    backgroundImage: "url('./src/assets/pexels-photo-4506840.webp')",
  };
  const logoHeader02 = {
    backgroundImage: "url('/src/assets/pexels-photo-4210786.jpeg')",
  };

  return (
    <>
      <div className="w-full h-1/4 bg-cover bg-center" style={logoHeader02}>
        <Navbar />
        <header className="m-5">
          <div className="p-10 m-5 flex flex-col gap-3 justify-center items-center">
            <h1 className="font-bold text-5xl text-center">Nature is hot</h1>

            <p className="font-semibold text-lg text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
              consectetur distinctio fuga consequatur quae tempora pariatur
              officia nulla totam dignissimos, quo voluptate dolores cumque
              suscipit! Numquam voluptates rem repellendus molestias.
            </p>
            <span className="bg-invert boeder-0 rounded-sm w-11 h-2"></span>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
