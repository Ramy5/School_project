import Aos from "aos";
import { Form, Formik } from "formik";
import { useEffect } from "react";
import styled from "./ApplicationForm.module.css";

const ApplicationForm = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const initialValues = {
    full_name: "",
    our_school: "",
    email: "",
    grade: "",
    country_code: "",
    agree: "",
  };

  return (
    <section className="main__section-padding" data-aos="fade-up">
      <h2 className="main__head">Application Form</h2>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values }) => {
          return (
            <Form className="bg-[#f1f1f1] py-10 px-28 rounded-3xl relative">
              <div className="grid items-center justify-between lg:grid-cols-2 gap-x-24 gap-y-8">
                <div className="relative mb-4 group">
                  <input
                    type="text"
                    className="w-full py-2 text-xl bg-transparent border-b border-slate-600 focus:outline-none"
                    name="full_name"
                    id="name"
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute top-0 left-0 block mt-2 text-xl font-bold capitalize transition-all duration-500 text-slate-800 group-focus-within:-translate-y-8"
                  >
                    Full name
                  </label>
                </div>

                <div className="w-full mb-4">
                  <select
                    name="our_school"
                    defaultValue={"Our School"}
                    className="w-full py-2 text-xl font-bold bg-transparent border-b cursor-pointer border-slate-600 focus-within:outline-none focus:outline-none"
                  >
                    <option defaultValue disabled hidden>
                      Our School
                    </option>
                    <option
                      style={{
                        color: "#59C7DA",
                        fontSize: "1.3rem",
                        fontWeight: "bold",
                      }}
                    >
                      one
                    </option>
                    <option
                      style={{
                        color: "#59C7DA",
                        fontSize: "1.3rem",
                        fontWeight: "bold",
                      }}
                    >
                      two
                    </option>
                  </select>
                </div>

                <div className="relative mb-4 group">
                  <input
                    type="email"
                    className="w-full py-2 text-xl bg-transparent border-b border-slate-600 focus:outline-none"
                    name="email"
                    id="email"
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute top-0 left-0 block mt-2 text-xl font-bold capitalize transition-all duration-500 text-slate-800 group-focus-within:-translate-y-8"
                  >
                    Email
                  </label>
                </div>

                <div className="w-full mb-4">
                  <select
                    name="grade"
                    defaultValue={"Grade"}
                    className="w-full py-2 text-xl font-bold bg-transparent border-b cursor-pointer border-slate-600 focus-within:border-none"
                  >
                    <option defaultValue disabled className="hidden">
                      Grade
                    </option>
                    <option
                      style={{
                        color: "#59C7DA",
                        fontSize: "1.3rem",
                        fontWeight: "bold",
                      }}
                    >
                      one
                    </option>
                    <option
                      style={{
                        color: "#59C7DA",
                        fontSize: "1.3rem",
                        fontWeight: "bold",
                      }}
                    >
                      two
                    </option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-between mt-8 gap-x-12">
                <select
                  name="country_code"
                  defaultValue={"Country Code"}
                  className="w-56 py-2 text-xl font-bold bg-transparent border-b cursor-pointer border-slate-600 focus:outline-none"
                >
                  <option defaultValue disabled className="hidden">
                    Country Code
                  </option>
                  <option
                    style={{
                      color: "#59C7DA",
                      fontSize: "1.3rem",
                      fontWeight: "bold",
                    }}
                  >
                    one
                  </option>
                  <option
                    style={{
                      color: "#59C7DA",
                      fontSize: "1.3rem",
                      fontWeight: "bold",
                    }}
                  >
                    two
                  </option>
                </select>

                <div className="relative w-full group">
                  <input
                    type="phone"
                    className="w-full py-2 text-xl bg-transparent border-b border-slate-600 focus:outline-none"
                    name="phone"
                    id="phone"
                    required
                  />
                  <label
                    htmlFor="phone"
                    className="absolute top-0 left-0 block mt-2 text-xl font-bold capitalize transition-all duration-500 text-slate-800 group-focus-within:-translate-y-8"
                  >
                    Phone No
                  </label>
                </div>
              </div>

              <p className="flex items-center gap-2 mt-8 text-lg">
                <input type="checkbox" name="agree" className="w-4 h-4" />
                <p>
                  <span>I agree to the </span>
                  <a href="/" className="decoration-solid decoration-slate-800">
                    processing of personal data
                  </a>
                </p>
              </p>

              <button
                className={`${styled.application_btn} absolute left-2/4 -translate-x-1/2 -bottom-6 shadow-2xl`}
              >
                <p>Submit</p>
              </button>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};

export default ApplicationForm;
