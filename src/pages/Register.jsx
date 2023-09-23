import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import SuccessPopUp from "../components/Popup/SuccessPopUp";
import Dropdown from "../components/Dropdown";
import { useForm } from "react-hook-form";
import FailurePopUp from "../components/Popup/FailurePopUp";

const Register = () => {
  const baseUrl = "https://backend.getlinked.ai";
  const [message, setMessage] = useState(null);

  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    async function getCategories() {
      const data = await fetch(`${baseUrl}/hackathon/categories-list`);
      const res = await data.json();
      setCategories(res);
      // const items = res.map(el => el.name)
    }

    getCategories();
  }, []);

  const [category, setCategory] = useState(null);
  const [groupSize, setGroupSize] = useState(null);

  const size = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const buttonState = category && groupSize ? false : true;

  const submitRegistration = async (data) => {
    if (loading) {
      return;
    }

    const categoryIndex = categories.find((el) => el.name === category).id;

    data = {
      ...data,
      category: categoryIndex,
      group_size: groupSize,
    };

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(data);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    setTimeout(() => {
      setMessage({
        type: "registration",
        status: "success",
      });
    }, 3000);
    

    fetch(`${baseUrl}/hackathon/registration`, requestOptions)
      .then(response => response.text())
      .then(result => {setMessage({
        type: "registration",
        status: "success",
      })
      reset()
    }).catch(error => {setMessage({
      status: "failed",
    })
    });
  };

  return (
    <main className="flex flex-col min-h-screen">
      {message && message.status === "success" ? 
        <SuccessPopUp message={message} setMessage={setMessage} />
      : <FailurePopUp />
  }

      <div className="hidden lg:block">
        <Navbar />
      </div>

      <section className="self-stretch container h-full flex gap-3 mx-auto p-10 lg:py-16 md:px-0 relative">
        <img
          src="/src/assets/gradient star.png"
          className="absolute twinkle-animation h-4 lg:h-auto 
                top-[23%] left-[80%] lg:top-[18%] lg:left-[5%]"
          alt=""
        />
        <img
          src="/src/assets/gray star.png"
          className="absolute  twinkle-animation h-6 lg:h-auto 
                top-[43%] left-[1%] lg:top-[10%] lg:left-[80%]"
          alt=""
        />
        <img
          src="/src/assets/flare.png"
          className="absolute blend-mode max-h-[49rem] w-full object-contain top-[8%] left-[-15%] 
    lg:top-[-16%] lg:left-[-35%]"
          alt=""
        />
        <img
          src="/src/assets/flare.png"
          className="absolute hidden lg:inline-block blend-mode max-h-[49rem] w-full object-contain
    lg:bottom-[-23%] lg:right-[-60%]"
          alt=""
        />
        <article className="w-[45%] hidden relative lg:flex justify-center items-center z-10">
          <img
            src="/src/assets/graphic designer.png"
            className="object-contain scale-[1.2]"
            alt=""
          />
        </article>

        <div className="h-full grow form-box lg:p-20 relative z-10">
          <img
            src="/src/assets/purple star.png"
            className="absolute twinkle-animation h-4 lg:h-auto 
                          top-[76%] left-[99%] lg:top-[70%] lg:left-[-10%]"
            alt=""
          />

          <img
            src="/src/assets/gray star.png"
            className="absolute hidden lg:inline-block twinkle-animation h-4 lg:h-auto 
                          top-[83%] left-[1%] lg:top-[83%] lg:left-[-60%]"
            alt=""
          />
          <img
            src="/src/assets/white star.png"
            className="absolute hidden lg:inline-block twinkle-animation h-5 top-[75%]
                 left-[101%] lg:top-[100%] lg:left-[90%]"
            alt=""
          />
          <Link to="/">
            <svg
              className="lg:hidden mb-10"
              width="26"
              height="26"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="11.5"
                cy="11.5"
                r="11"
                stroke="url(#paint0_linear_177_298)"
              />
              <path
                d="M12.2666 9.20001L9.19995 12.2667L12.2666 14.5667"
                stroke="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_177_298"
                  x1="11.5"
                  y1="0"
                  x2="11.5"
                  y2="23"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#903AFF" />
                  <stop offset="1" stop-color="#FF26B9" />
                </linearGradient>
              </defs>
            </svg>
          </Link>
          <div className="space-y-3">
            <h3 className="text-xl lg:text-3xl font-CdSemiBold text-lightPurple w-[16rem] lg:w-auto">
              Register
            </h3>

            <article className="flex  lg:hidden justify-center items-center z-10">
              <img
                src="/src/assets/graphic designer.png"
                className="object-contain max-h-[185px]"
                alt=""
              />
            </article>

            <div className="flex gap-2 items-baseline">
              <p>Be part of this movement!</p>
              <div className="flex px-3 items-end border-lightPurple border-b-2 border-dashed">
                <img className="h-6" src="/src/assets/tiny lady.png" alt="" />
                <img className="h-7" src="/src/assets/tiny man.png" alt="" />
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold my-4">CREATE YOUR ACCOUNT</h3>

          <form
            onSubmit={handleSubmit(submitRegistration)}
            className="flex flex-col gap-5 mt-6"
          >
            <div className="grid grid-cols-1 gap-6 md:gap-y-10 md:grid-cols-2">
              <div className="space-y-1">
                <label htmlFor="">Team's name</label>
                <input
                  type="text"
                  name="Team name"
                  placeholder="Enter the name of your group"
                  className="h-12 px-4 md:placeholder:text-sm"
                  id=""
                  {...register("team_name", { required: true })}
                />
                {errors.team_name && (
                  <p className="text-white text-xs h-2">Enter team name *</p>
                )}
              </div>

              <div className="space-y-1">
                <label htmlFor="">Phone</label>
                <input
                  type="text"
                  name="Phone"
                  placeholder="Enter your phone number"
                  className="h-12 px-4 md:placeholder:text-sm"
                  id=""
                  {...register("phone_number", { required: true })}
                />
                {errors.phone_number && (
                  <p className="text-white text-xs h-2">
                    Enter valid phone number *
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label htmlFor="">Email</label>
                <input
                  type="mail"
                  name="Email"
                  placeholder="Enter your email address"
                  className="h-12 px-4 md:placeholder:text-sm"
                  id=""
                  {...register("email", {
                    required: true,
                    pattern:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />
                {errors.email && (
                  <p className="text-white text-xs h-2">
                    Enter valid email address *
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label htmlFor="">Project topic</label>
                <input
                  type="text"
                  name=""
                  placeholder="What is your group project topic"
                  className="h-12 px-4 md:placeholder:text-sm"
                  id=""
                  {...register("project_topic", { required: true })}
                />
                {errors.project_topic && (
                  <p className="text-white text-xs h-2">
                    Enter Project topic *
                  </p>
                )}
              </div>
            </div>

            <div className="flex w-full justify-between md:gap-6 md:gap-y-10 md:grid md:grid-cols-2 mt-3">
              <div className="space-y-1 w-[60%] md:w-auto">
                <label htmlFor="">Category</label>
                <Dropdown
                  placeHolderValue={"Select your category"}
                  setValue={setCategory}
                  options={categories?.map((el) => el.name)}
                />
              </div>

              <div className="w-[33%] md:w-auto space-y-1 md:grow-0">
                <label htmlFor="">Group Size</label>
                <Dropdown
                  placeHolderValue={"Select"}
                  options={size}
                  setValue={setGroupSize}
                />
              </div>
            </div>

            <p className="text-sm text-[#FF26B9] italic">
              Please review your registration details before submitting
            </p>

            <div>
              <div className="flex items-start lg:items-center gap-2 text-xs mb-2">
                <span className="border border-white cursor-pointer flex justify-center items-center rounded-sm">
                  <input
                    type="checkbox"
                    className="border-0 outline-none"
                    id="agree"
                    {...register("privacy_policy_accepted", { required: true })}
                  />
                </span>
                <label htmlFor="agree">
                  I agreed with the event terms and conditions and privacy
                  policy
                </label>
              </div>
              {errors.privacy_policy_accepted && (
                <p className="text-white text-xs h-2">Tick this box *</p>
              )}
            </div>

            <button
              type="submit"
              disabled={buttonState}
              className="gradient w-full py-3 mx-auto mt-5 disabled:opacity-25"
            >
              Register Now
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Register;
