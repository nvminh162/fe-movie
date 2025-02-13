import rating from "../assets/rating.png";
import ratingHalf from "../assets/rating-half.png";
import imgTemp from "../assets/temp-1.jpeg";
import play from "../assets/play-button.png";

const Banner = () => {
  return (
    <div className="w-full h-[600px] bg-[url(/banner.png)] bg-center bg-no-repeat bg-cover relative">
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-50" />
      <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20">
        <div className="flex flex-col space-y-5 items-baseline w-[50%]">
          <p className="text-white bg-gradient-to-r from-red-600 text-md to-red-300 py-2 px-3">
            TV Show
          </p>
          <div className="flex flex-col space-y-4">
            <h2 className="text-white text-[40px] font-bold">Nghe nói em thích tôi</h2>
            <div className="flex items-center space-x-3">
              <img className="w-8 h-8" src={rating} alt="rating" />
              <img className="w-8 h-8" src={rating} alt="rating" />
              <img className="w-8 h-8" src={rating} alt="rating" />
              <img className="w-8 h-8" src={rating} alt="rating" />
              <img className="w-8 h-8" src={ratingHalf} alt="rating" />
            </div>
            <p className="text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting.
            </p>
            <div className="flex items-center space-x-4">
              <button className="p-3 text-white bg-black font-bold text-sm">
                Chi tiết
              </button>
              <button className="p-3 text-white bg-red-600 font-bold text-sm">
                Xem phim
              </button>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <div className="w-[300px] h-[400px] relative group cursor-pointer">
            <img className="w-full h-full object-cover" src={imgTemp} alt="temp" />
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <img className="w-16 h-16" src={play} alt="play" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
