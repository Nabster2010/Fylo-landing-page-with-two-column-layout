import { useState } from "react";
import "./App.css";
const App = () => {
  const [email1, setEmail1] = useState("");
  const [email1Error, setEmail1Error] = useState(false);
  const [email2, setEmail2] = useState("");
  const [email2Error, setEmail2Error] = useState(false);

  const validateEmail = (email) => {
    let regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regEmail.test(email)) {
      return false;
    }
    return true;
  };
  const handleSubmitEmail1 = (e) => {
    e.preventDefault();
    if (!email1) {
      setEmail1Error(true);
      return;
    }
    setEmail1Error(validateEmail(email1));
  };
  const handleSubmitEmail2 = (e) => {
    e.preventDefault();

    if (!email2) {
      setEmail2Error(true);
      return;
    }
    setEmail2Error(validateEmail(email2));
  };

  return (
    <div className="w-full min-h-screen bg-white py-8 font-OpenSans">
      <header className="px-16">
        <nav className="flex justify-between items-center ">
          <div className="">
            <img
              src="/images/logo.svg"
              className="max-w-full h-auto"
              alt="logo"
              width="100"
              height="100"
            />
          </div>
          <ul className="flex justify-center items-center gap-8 ">
            <li className="cursor-pointer hover:opacity-70 transition">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="cursor-pointer hover:opacity-70 transition">
              <a className="nav-link" href="#">
                Team
              </a>
            </li>
            <li className="cursor-pointer hover:opacity-70 transition">
              <a className="nav-link" href="#">
                SignIn
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="flex flex-col-reverse md:flex-row justify-center pt-8 gap-8 px-16">
          <article className="flex-1 md:pr-16   pt-8 space-y-4 self-center">
            <h1 className="text-2xl text-VeryDarkBlue font-bold font-Raleway text-center md:text-start ">
              All your files in one secure location, accessible anywhere.
            </h1>
            <p className="text-DesaturatedBlue text-sm text-center md:text-start ">
              Fylo stores your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends,
              family and co-workers.
            </p>
            <form
              onSubmit={handleSubmitEmail1}
              className="flex flex-col md:flex-row  gap-3"
            >
              <div className="relative flex ">
                <input
                  type="text"
                  name="email1"
                  value={email1}
                  onChange={(e) => setEmail1(e.target.value)}
                  placeholder="Enter your email..."
                  className={` bg-transparent outline-none border  px-6 py-2 placeholder:text-xs flex-1 ${
                    email1Error ? "border-red-600" : "border-DesaturatedBlue"
                  } `}
                />
                {email1Error && (
                  <span className="absolute -bottom-5  left-0 text-xs text-red-600 ">
                    Please check your email
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="bg-BrightBlue mt-4 md:mt-0 px-6 py-2 border border-BrightBlue text-sm font-normal whitespace-nowrap text-LightGrayishBlue hover:opacity-70 transition "
              >
                Get Started
              </button>
            </form>
          </article>
          <aside className="flex-1 md:pl-8">
            <img
              className="max-w-full h-auto bg-cover"
              src="/images/illustration-1.svg"
              alt=""
            />
          </aside>
        </section>
        <section className="flex flex-col-reverse md:flex-row justify-center pt-16 pb-24 px-16 gap-8 bg-sectionMobile md:bg-sectionDesktop bg-cover bg-center w-full mt-16 ">
          <article className="flex-1 flex flex-col  md:pr-16 pt-8 self-center">
            <div className="space-y-4 flex flex-col">
              <h1 className="text-2xl text-VeryDarkBlue font-bold font-Raleway text-center md:text-start">
                Stay productive, wherever you are
              </h1>
              <p className="text-DesaturatedBlue text-sm  ">
                Never let location be an issue when accessing our files. Flo has
                vou covered for all of your file storage needs.
              </p>
              <p className="text-DesaturatedBlue text-sm  ">
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required!
              </p>
              <div className="inline-flex items-center md:self-start self-center justify-start gap-2 border-b border-ModerateCyan hover:opacity-80 cursor-pointer transition">
                <small className="text-ModerateCyan text-xs leading-7">
                  See how Fylo works{" "}
                </small>
                <img src="/images/icon-arrow.svg" alt="" />
              </div>
            </div>
            <div className="bg-white max-w-[26em] mt-10 self-center md:self-start shadow-md p-6  rounded-xl text-sm ">
              <img src="/images/icon-quotes.svg" alt="" className="pb-4" />

              <blockquote className="text-DesaturatedBlue text-start">
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </blockquote>
              <div className="flex justify-start items-center gap-4 mt-6">
                <img
                  className="rounded-full w-10 h-10"
                  src="/images/avatar-testimonial.jpg"
                  alt=""
                />
                <div>
                  <h4 className="text-VeryDarkBlue font-Raleway font-bold   ">
                    Kyle Burton
                  </h4>
                  <p className="text-DesaturatedBlue text-xs">
                    {" "}
                    Founder & CEO, Huddle
                  </p>
                </div>
              </div>
            </div>
          </article>
          <aside className="flex-1 md:pl-8 pt-8">
            <img
              className="max-w-full h-auto bg-cover"
              src="/images/illustration-2.svg"
              alt=""
            />
          </aside>
        </section>
        <section className="flex flex-col md:flex-row justify-between items-start gap-28 bg-DesaturatedBlue py-24 px-16 ">
          <div className="flex-1 space-y-6 text-center md:text-start">
            <h1 className="text-2xl font-bold font-Raleway text-white">
              Get early access today
            </h1>
            <p className="text-LightGrayishBlue ">
              It only takes a minute to sign up and our free starter tier is
              extremelv generous. If vou have anv questions, our support team
              would be nagy to he you.
            </p>
          </div>
          <form
            onSubmit={handleSubmitEmail2}
            className="flex-1 space-y-6 flex flex-col w-full"
          >
            <div className="relative">
              <input
                type="text"
                name="email2"
                value={email2}
                onChange={(e) => setEmail2(e.target.value)}
                placeholder="Email@example.com"
                className={`outline-none bg-white shadow-lg py-3 px-4 w-full border  rounded-sm placeholder:text-xs ${
                  email2Error ? "border-red-600" : "border-transparent"
                } `}
              />
              {email2Error && (
                <span className="absolute -bottom-5  left-0 text-xs text-red-600 ">
                  Please check your email
                </span>
              )}
            </div>
            <button
              type="submit"
              className="text-white md:self-start px-8 py-3 bg-BrightBlue text-sm font-bold rounded-sm shadow-lg transition hover:opacity-70"
            >
              Get Started For Free
            </button>
          </form>
        </section>
        <section className="flex flex-col md:flex-row gap-36 bg-VeryDarkBlue py-24 px-16 ">
          <div className=" space-y-6 text-start ">
            <img src="/images/logoFooter.svg" alt="" />
            <a
              href="tel:+1-543-123-4567"
              className="flex gap-4 items-center text-white "
            >
              <img src="/images/icon-phone.svg" alt="" />
              <span>phone:+1-543-123-4567</span>
            </a>
            <a
              href="mailto:example@fylo.com"
              className="flex gap-4 items-center text-white "
            >
              <img src="/images/icon-email.svg" alt="" />
              <span>example@fylo.com</span>
            </a>
          </div>
          <ul className=" space-y-6 text-white ">
            <li className="transition hover:text-LightGray">
              <a href="#">About Us</a>
            </li>
            <li className="transition hover:text-LightGray">
              <a href="#">Jobs</a>
            </li>
            <li className="transition hover:text-LightGray">
              <a href="#">Press</a>
            </li>
            <li className="transition hover:text-LightGray">
              <a href="#">Blogs</a>
            </li>
          </ul>
          <ul className=" space-y-6 text-white ">
            <li className="transition hover:text-LightGray">
              <a href="#">Contact Us</a>
            </li>
            <li className="transition hover:text-LightGray">
              <a href="#">Terms</a>
            </li>
            <li className="transition hover:text-LightGray">
              <a href="#">Privacy</a>
            </li>
            <li className="transition hover:text-LightGray">
              <a href="#">Blogs</a>
            </li>
          </ul>
          <div className="flex gap-4 self-center md:self-start">
            <div className="w-8 h-8 border transition hover:text-BrightBlue hover:border-BrightBlue text-white grid place-items-center border-white rounded-full">
              <a
                href="#"
                className="cursor-pointer  fa-brands fa-facebook-f  "
              />
            </div>
            <div className="w-8 h-8 border transition hover:text-BrightBlue hover:border-BrightBlue text-white grid place-items-center border-white rounded-full">
              <a href="#" className="cursor-pointer  fa-brands fa-twitter " />
            </div>
            <div className="w-8 h-8 border transition hover:text-BrightBlue hover:border-BrightBlue text-white grid place-items-center border-white rounded-full">
              <a
                href="#"
                className="cursor-pointer  fa-brands fa-instagram  "
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
