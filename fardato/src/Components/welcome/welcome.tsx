import { useState } from "react";
import illustration1 from "../../assets/material/illustration1.svg";
import illustration2 from "../../assets/material/illustration2.svg";
import illustration3 from "../../assets/material/illustration3.svg";
import { useNavigate } from "react-router-dom";

export default (): any => {
  const navigate = useNavigate();
  const [welcomeStage, setWelcomeStage] = useState(1);

  return (
    <main className="flex flex-col items-center justify-between sm:w-full sm:min-h-[100vh] sm:px-[10rem] px-[1.5rem] sm:pt-[3rem] sm:pb-[8rem] overflow-hidden">
      {welcomeStage === 1 ? (
        <WelcomePage1 onNext={() => setWelcomeStage(2)} />
      ) : welcomeStage === 2 ? (
        <WelcomePage2 onNext={() => setWelcomeStage(3)} />
      ) : (
        <WelcomePage3 navigate={navigate} />
      )}
    </main>
  );
};

const WelcomePage1 = ({ onNext }: { onNext: () => void }): any => {
  return (
    <div className="animate-fade-in flex flex-col items-center gap-12 w-full">
      <img
        src={illustration1}
        className="sm:h-[25rem] h-[20rem] animate-slide-up"
        alt="welcome illustration 1"
      />
      <p className="sm:text-2xl text-lg font-bold vazir-font leading-10 text-center animate-fade-in-delayed">
        دوست داری خودت برنامه‌هاتو مدیریت کنی و بدونی دقیقاً وقتت کجا می‌ره؟
        <br />
        یا ترجیح می‌دی به ذهنت گوش بدی و با فرداتو مسیر رشدتو خودت بسازی؟
      </p>
      <button
        onClick={onNext}
        className="text-light-green font-semibold border-2 rounded-xl hover:!text-white hover:bg-[#6acb85] hover:cursor-pointer active:scale-90 transition duration-150 sm:px-60 px-30 sm:py-4 py-2 text-2xl animate-fade-in-delayed-2"
      >
        ادامه
      </button>
    </div>
  );
};

const WelcomePage2 = ({ onNext }: { onNext: () => void }): any => {
  return (
    <div className="animate-fade-in flex flex-col items-center gap-12 w-full">
      <img
        src={illustration2}
        className="sm:h-[25rem] h-[20rem] animate-slide-up"
        alt="welcome illustration 2"
      />
      <p className="sm:text-2xl text-lg font-bold vazir-font leading-10 text-center animate-fade-in-delayed">
        یا اصلا مهم‌تر،
        <br />
        می‌خوای بدونی داری پیشرفت می‌کنی یا نه،
        <br />و همیشه یه تصویر واضح از فردات توی جیبت باشه؟
      </p>
      <button
        onClick={onNext}
        className="text-light-green font-semibold border-2 rounded-xl hover:!text-white hover:bg-[#6acb85] hover:cursor-pointer active:scale-90 transition duration-150 sm:px-60 px-30 sm:py-4 py-2 text-2xl animate-fade-in-delayed-2"
      >
        ادامه
      </button>
    </div>
  );
};

const WelcomePage3 = ({ navigate }: { navigate: any }): any => {
  return (
    <div className="animate-fade-in flex flex-col items-center gap-12 w-full">
      <img
        src={illustration3}
        className="sm:h-[25rem] h-[20rem] animate-slide-up"
        alt="welcome illustration 3"
      />
      <p className="sm:text-2xl text-lg font-bold vazir-font leading-10 text-center animate-fade-in-delayed">
        پس جای درستی اومدی! <br />
        با فرداتو، هر قدم رشدت همراهی می‌شه.
        <br />
        فقط کافیه احساساتت، افکارت یا کارهای روزمره‌تو ثبت کنی،
        <br />
        تا بهت نشون بدیم چطور داری رشد می‌کنی.
      </p>
      <button
        onClick={() => navigate("/login")}
        className="text-light-green font-semibold border-2 rounded-xl hover:!text-white hover:bg-[#6acb85] hover:cursor-pointer active:scale-90 transition duration-150 sm:px-60 px-30 sm:py-4 py-2 text-2xl animate-fade-in-delayed-2"
      >
        شروع
      </button>
    </div>
  );
};
