import { useState } from "react";
import illustration1 from "../../assets/material/illustration1.svg";
import illustration2 from "../../assets/material/illustration2.svg";
import illustration3 from "../../assets/material/illustration3.svg";
import { useNavigate } from "react-router-dom";

export default (): any => {
  const navigate = useNavigate();
  const [welcomeStage, setWelcomeStage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setWelcomeStage((prev) => {
      if (prev >= 3) return 3;
      return prev + 1;
    });
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <main className="flex flex-col items-center justify-between sm:w-full min-h-screen sm:px-[10rem] px-[1.5rem] sm:pt-[3rem] pt-[2rem] sm:pb-[6rem] pb-[7rem] overflow-hidden">
      {welcomeStage === 1 ? (
        <WelcomePage1 onNext={handleNext} isTransitioning={isTransitioning} />
      ) : welcomeStage === 2 ? (
        <WelcomePage2 onNext={handleNext} isTransitioning={isTransitioning} />
      ) : (
        <WelcomePage3 navigate={navigate} isTransitioning={isTransitioning} />
      )}
    </main>
  );
};

const WelcomePage1 = ({
  onNext,
  isTransitioning,
}: {
  onNext: () => void;
  isTransitioning: boolean;
}): any => {
  return (
    <div className="animate-fade-in flex flex-col items-center justify-between w-full h-full flex-grow">
      <img
        src={illustration1}
        className="h-[20rem] animate-slide-up"
        alt="welcome illustration 1"
      />
      <p className="sm:text-xl text-lg font-bold vazir-font leading-10 text-center animate-fade-in-delayed">
        دوست داری خودت برنامه‌هاتو مدیریت کنی و بدونی دقیقاً وقتت کجا می‌ره؟
        <br />
        یا ترجیح می‌دی به ذهنت گوش بدی و با فرداتو مسیر رشدتو خودت بسازی؟
      </p>
      <button
        onClick={onNext}
        disabled={isTransitioning}
        className={`text-light-green font-semibold border-2 rounded-xl hover:!text-white hover:bg-[#6acb85] active:scale-90 transition duration-150 sm:px-50 px-30 sm:py-4 py-2 text-2xl animate-fade-in-delayed-2 vazir-font ${
          isTransitioning
            ? "opacity-50 cursor-not-allowed"
            : "hover:cursor-pointer"
        }`}
      >
        {isTransitioning ? "..." : "ادامه"}
      </button>
    </div>
  );
};

const WelcomePage2 = ({
  onNext,
  isTransitioning,
}: {
  onNext: () => void;
  isTransitioning: boolean;
}): any => {
  return (
    <div className="animate-fade-in flex flex-col items-center justify-between w-full h-full flex-grow">
      <img
        src={illustration2}
        className="h-[20rem] animate-slide-up"
        alt="welcome illustration 2"
      />
      <p className="sm:text-xl text-lg font-bold vazir-font leading-10 text-center animate-fade-in-delayed">
        یا اصلا مهم‌تر،
        <br />
        می‌خوای بدونی داری پیشرفت می‌کنی یا نه،
        <br />و همیشه یه تصویر واضح از فردات توی جیبت باشه؟
      </p>
      <button
        onClick={onNext}
        disabled={isTransitioning}
        className={`text-light-green font-semibold border-2 rounded-xl hover:!text-white hover:bg-[#6acb85] active:scale-90 transition duration-150 sm:px-50 px-30 sm:py-4 py-2 text-2xl animate-fade-in-delayed-2 vazir-font ${
          isTransitioning
            ? "opacity-50 cursor-not-allowed"
            : "hover:cursor-pointer"
        }`}
      >
        {isTransitioning ? "..." : "ادامه"}
      </button>
    </div>
  );
};

const WelcomePage3 = ({
  navigate,
  isTransitioning,
}: {
  navigate: any;
  isTransitioning: boolean;
}): any => {
  return (
    <div className="animate-fade-in flex flex-col items-center justify-between w-full h-full flex-grow">
      <img
        src={illustration3}
        className="h-[20rem] animate-slide-up"
        alt="welcome illustration 3"
      />
      <p className="sm:text-xl text-lg font-bold vazir-font leading-10 text-center animate-fade-in-delayed">
        پس جای درستی اومدی! <br />
        با فرداتو، هر قدم رشدت همراهی می‌شه.
        <br />
        فقط کافیه احساساتت، افکارت یا کارهای روزمره‌تو ثبت کنی،
        <br />
        تا بهت نشون بدیم چطور داری رشد می‌کنی.
      </p>
      <button
        onClick={() => !isTransitioning && navigate("/login")}
        disabled={isTransitioning}
        className={`text-light-green font-semibold border-2 rounded-xl hover:!text-white hover:bg-[#6acb85] active:scale-90 transition duration-150 sm:px-50 px-30 sm:py-4 py-2 text-2xl animate-fade-in-delayed-2 vazir-font ${
          isTransitioning
            ? "opacity-50 cursor-not-allowed"
            : "hover:cursor-pointer"
        }`}
      >
        {isTransitioning ? "..." : "شروع"}
      </button>
    </div>
  );
};
