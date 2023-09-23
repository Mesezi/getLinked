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

    setLoading(true)
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
      .then((response) => response.text())
      .then((result) => {
        setMessage({
          type: "registration",
          status: "success",
        });
        reset();
      })
      .catch((error) => {
        setMessage({
          status: "failed",
        });
      }).finally(()=>setLoading(false))
  };

  return (
    <main className="flex flex-col min-h-screen">
      {message?.status === "success" && (
        <SuccessPopUp message={message} setMessage={setMessage} />
      )}

      {message?.status === "failed" && (
        <FailurePopUp setMessage={setMessage} />
      )}

      <div className="hidden lg:block">
        <Navbar />
      </div>

      <section className="self-stretch container h-full flex gap-3 mx-auto p-10 lg:py-16 md:px-0 relative">
        <img
          src="/assets/gradient star.png"
          className="absolute twinkle-animation h-4 lg:h-auto 
                top-[23%] left-[80%] lg:top-[18%] lg:left-[5%]"
          alt="star"
        />
        <img
          src="/assets/gray star.png"
          className="absolute  twinkle-animation h-6 lg:h-auto 
                top-[43%] left-[1%] lg:top-[10%] lg:left-[80%]"
          alt="star"
        />
        <img
          src="/assets/flare.png"
          className="absolute blend-mode max-h-[49rem] w-full object-contain top-[8%] left-[-15%] 
    lg:top-[-16%] lg:left-[-35%]"
          alt="flare image"
        />
        <img
          src="/assets/flare.png"
          className="absolute hidden lg:inline-block blend-mode max-h-[49rem] w-full object-contain
    lg:bottom-[-23%] lg:right-[-60%]"
          alt="flare image"
        />

        <article
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-offset="400"
          className="w-[45%] hidden relative lg:flex justify-center items-center z-10"
        >
          <img
            src="/assets/graphic designer.png"
            className="object-contain scale-[1.2]"
            alt="Graphic designer"
          />
        </article>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="400"
          className="h-full grow form-box lg:p-20 relative z-10"
        >
          <img
            src="/assets/purple star.png"
            className="absolute twinkle-animation h-4 lg:h-auto 
                          top-[76%] left-[99%] lg:top-[70%] lg:left-[-10%]"
            alt="star"
          />

          <img
            src="/assets/gray star.png"
            className="absolute hidden lg:inline-block twinkle-animation h-4 lg:h-auto 
                          top-[83%] left-[1%] lg:top-[83%] lg:left-[-60%]"
            alt="star"
          />
          <img
            src="/assets/white star.png"
            className="absolute hidden lg:inline-block twinkle-animation h-5 top-[75%]
                 left-[101%] lg:top-[100%] lg:left-[90%]"
            alt="star"
          />

          <div className="space-y-3">
            <h3 className="text-xl lg:text-3xl font-CdSemiBold text-lightPurple w-[16rem] lg:w-auto">
              Register
            </h3>

            <article className="flex  lg:hidden justify-center items-center z-10">
              <img
                src="/assets/graphic designer.png"
                className="object-contain max-h-[185px]"
                alt="Graphic designer (mobile)"
              />
            </article>

            <div className="flex gap-2 items-baseline">
              <p>Be part of this movement!</p>
              <div className="flex px-3 items-end border-lightPurple border-b-2 border-dashed">
                <img className="h-6" src="/assets/tiny lady.png" alt="lady" />
                <img className="h-7" src="/assets/tiny man.png" alt="man" />
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
                  <p className="text-red-600 text-sm font-semibold">
                    Enter team name *
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label htmlFor="">Phone</label>
                <input
                  type="number"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="h-12 px-4 md:placeholder:text-sm"
                  id=""
                  {...register("phone_number", { required: true })}
                />
                {errors.phone_number && (
                  <p className="text-red-600 text-sm font-semibold">
                    Enter phone number
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
                  <p className="text-red-600 text-sm font-semibold">
                    Enter valid email address
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
                  <p className="text-red-600 text-sm font-semibold">
                    Enter Project topic
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
                <p className="text-red-600 text-sm font-semibold">
                  Select this box{" "}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={buttonState}
              className="gradient w-full flex justify-center py-3 mx-auto mt-5 disabled:opacity-25"
            >
              {loading ? (
              <svg
                aria-hidden="true"
                className=" h-8 w-8 animate-spin fill-red-700 text-gray-200"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            ) : (
              "Register Now"
            )}
              
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Register;
