const Banner = () => {
  return (
    <div>
      <div className="container p-8 mx-auto text-center">
        <div className="text-area font-nun font-black text-[#3329e0]">
          <h2 className="text-3xl md:text-5xl my-10">
            Discover a New World of Web Development with ryadDev
          </h2>
          <div className="mx-1 p-0 lg:mx-36 py-0 md:px-24 mb:py-2">
            <p className="text-md md:text-xl text-gray-800 font-light mx-auto">
              ryadDev is a revolutionary visual builder designed to make web
              development faster and more enjoyable. Build stunning webpages
              effortlessly using Tailwind CSS, and streamline your development
              process to ship projects in minutes, not weeks.
            </p>
          </div>
        </div>
        <div className="flex items-center flex-col">
          <button className="bg-[#3329e0] text-white px-8 py-4 rounded-full mt-12 hover:bg-[#ccc9ff] ease-in transition-all duration-300 hover:text-[#3329e0]">
            Create a website
          </button>
          <a href="#" className="text-[#3329e0] my-3">
            Or Schedule a Demo
          </a>
        </div>
      </div>
    </div>
  );
};
export default Banner;
