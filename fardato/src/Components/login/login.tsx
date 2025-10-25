import { useState } from "react";
import type { IconType } from "react-icons";
import logo from "../../assets/material/logo.png";
import { FaRegUser } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdPassword } from "react-icons/md";

export default (): any => {
  const [loginStatus, setLoginStatus] = useState(true);
  interface inputField {
    id: number;
    type: string;
    label: string;
    placeholder: string;
    icon: IconType;
    errorMsg?: string;
  }

  const loginInputs: inputField[] = [
    {
      id: 1,
      type: "text",
      label: "به چه اسمی صدات میکردم؟",
      placeholder: "ali_shabani1384",
      icon: MdAlternateEmail,
    },
    {
      id: 2,
      type: "password",
      label: "رمزت چی بود؟",
      placeholder: "alishbni1384",
      icon: MdPassword,
    },
  ];

  const registerInputs: inputField[] = [
    {
      id: 1,
      type: "text",
      label: "اسمت چیه؟",
      placeholder: "علی شعبانی",
      icon: FaRegUser,
    },
    {
      id: 2,
      type: "text",
      label: "میخوای چی صدات کنم؟",
      placeholder: "ali_shabani1384",
      icon: FaRegCircleUser,
    },
    {
      id: 3,
      type: "password",
      label: "یه رمز باحال بذار",
      placeholder: "alishbni1384",
      icon: MdPassword,
    },
  ];

  let inputs = !loginStatus ? loginInputs : registerInputs;

  return (
    <main className="flex flex-col items-center justify-between w-full min-h-screen sm:px-[10rem] px-[1.5rem] sm:pt-[1rem] pt-[1rem] sm:pb-[1rem] pb-[2rem] overflow-hidden bg-[#F6F3E6]">
      <div className="flex flex-row items-center gap-5">
        <img src={logo} alt="logo" className="w-20 h-20 rounded-xl" />
        <h1 className="text-3xl font-bold alexandria-font">فرداتو</h1>
      </div>

      <div className="flex flex-col items-center justify-between gap-6">
        <h1 className="sm:text-6xl text-3xl font-bold vazir-font">
          {loginStatus ? "ثبت نام" : "ورود"}
        </h1>
        <p className="sm:text-[1rem] text-xs sm:w-fit vazir-font">
          جهت استفاده از خدمات کامل{" "}
          <span className="font-bold text-green">فرداتو</span>، ابتدا نیاز است{" "}
          {loginStatus ? "ثبت نام کنید." : "وارد شوید."}
        </p>
      </div>

      <div className="flex flex-col justify-between sm:w-[30%] w-full gap-[1rem]">
        {inputs.map((input) => {
          const IconComponent = input.icon;

          return (
            <div key={input.id} className="flex flex-col items-start gap-1.5">
              <label className="text-sm text-right vazir-font margin-right">
                {input.label}
              </label>

              <div className="w-full relative">
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <IconComponent className="text-gray" />
                </div>
                <input
                  type={input.type}
                  placeholder={input.placeholder}
                  className="w-full vazir-font py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400 transition-all duration-200 placeholder-gray-400 text-right"
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col items-center sm:w-[30%] w-full gap-3">
        <button className="text-light-green font-semibold border-1 rounded-xl hover:text-[#6acb85] hover:bg-black hover:cursor-pointer active:scale-90 transition duration-150 w-full sm:px-0 px-30 sm:py-3 py-2 sm:text-lg text-md animate-fade-in-delayed-2 vazir-font">
          {loginStatus ? "ثبت نام" : "ورود"}
        </button>

        <div className="flex flex-row items-center justify-between w-[80%]">
          <a
            href="#"
            className="sm:text-md text-sm vazir-font text-green hover:cursor-pointer hover:underline hover:underline-offset-6 hover:decoration-1"
            onClick={(e) => {
              e.preventDefault();
              setLoginStatus(!loginStatus);
            }}
          >
            قبلا ثبت نام {loginStatus ? "کردی" : "نکردی"}؟
          </a>
          <div className="w-0.5 h-6 bg-light-green"></div>
          <a
            href="#"
            className="font-lg vazir-font text-green hover:cursor-pointer hover:underline hover:underline-offset-6 hover:decoration-1"
          >
            قوانین و مقررات
          </a>
        </div>
      </div>
      <p className="text-sm vazir-font">
        تمامی حقوق برای <span className="font-bold text-green">فرداتو</span>{" "}
        محفوظ است
      </p>
    </main>
  );
};
