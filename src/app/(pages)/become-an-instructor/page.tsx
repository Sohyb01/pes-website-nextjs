"use client";

import { useFormik } from "formik";
import { FormEvent } from "react";
import { instructorSchema } from "../../validations/instructorsignup";

export default function Contact() {
  const onSubmit = async (values: Object, actions: any) => {
    console.log(values);
    await new Promise((res) => setTimeout(res, 1000));
    // actions.resetForm();
  };

  // Formik
  const {
    values,
    errors,
    handleBlur,
    isSubmitting,
    touched,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      age: 0,
      gender: "",
      mobile: 0,
      email: "",
      faculty: "",
      university: "",
      experience: "",
      // cv: undefined,
    },
    validationSchema: instructorSchema,
    onSubmit,
  });

  console.log(errors);

  return (
    <section className="mx-auto px-[10px] py-[16px] sm:container sm:py-[16px] md:px-[30px] md:py-[40px] lg:max-w-[1080px] lg:px-[40px] lg:py-[80px]">
      <form
        onSubmit={handleSubmit}
        className="form-container flex flex-col items-center w-full shadow-md gap-16 px-2 py-10 sm:px-4 lg:px-10 rounded-xl"
      >
        {/* Inputs Container */}
        <div className="inputs-container flex flex-wrap justify-center lg:justify-start gap-4 gap-x-8 lg:w-[872px]">
          {/* Individual Inputs */}
          {/* Name */}
          <div className="form-control w-full max-w-[420px]">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
              id="name"
              type="text"
              placeholder="Type here"
              className={`input input-bordered w-full bg-slate-200 ${
                errors.name &&
                touched.name &&
                "border-red-400 border-solid border-2"
              }`}
            />
            {errors.name && touched.name && (
              <label className="label">
                <span className="label-text-alt text-red-400">
                  {errors.name}
                </span>
              </label>
            )}
          </div>
          {/* Age */}
          <div className="form-control w-full max-w-[420px]">
            <label className="label">
              <span className="label-text">Age</span>
            </label>
            <input
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.age}
              id="age"
              type="number"
              placeholder="Type here"
              className={`input input-bordered w-full bg-slate-200 ${
                errors.age &&
                touched.age &&
                "border-red-400 border-solid border-2"
              }`}
            />
            {errors.age && touched.age && (
              <label className="label">
                <span className="label-text-alt text-red-400">
                  {errors.age}
                </span>
              </label>
            )}
          </div>
          {/* Gender */}
          <div className="form-control w-full max-w-[420px]">
            <label className="label">
              <span className="label-text">Gender</span>
            </label>
            {/* Container of male and female labels and inputs */}
            <div className="flex gap-8 px-[20px] h-[53px] items-center">
              <div className="flex">
                <p>Male</p>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="ml-2 radio border-pes_black border-[2px] border-solid"
                  checked={values.gender === "male"}
                />
              </div>
              <div className="flex">
                <p>Female</p>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="ml-2 radio border-pes_black border-[2px] border-solid"
                  checked={values.gender === "female"}
                />
              </div>
              {errors.gender && (
                <span className="label-text-alt text-red-400">
                  {errors.gender}
                </span>
              )}
            </div>
          </div>
          {/* Mobile */}
          <div className="form-control w-full max-w-[420px]">
            <label className="label">
              <span className="label-text">Mobile number</span>
            </label>
            <input
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.mobile}
              id="mobile"
              type="text"
              placeholder="Type here"
              className={`input input-bordered w-full bg-slate-200 ${
                errors.mobile &&
                touched.mobile &&
                "border-red-400 border-solid border-2"
              }`}
            />
            {errors.mobile && touched.mobile && (
              <label className="label">
                <span className="label-text-alt text-red-400">
                  {errors.mobile}
                </span>
              </label>
            )}
          </div>
          {/* Email */}
          <div className="form-control w-full max-w-[420px]">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              id="email"
              type="text"
              placeholder="Type here"
              className={`input input-bordered w-full bg-slate-200 ${
                errors.email &&
                touched.email &&
                "border-red-400 border-solid border-2"
              }`}
            />
            {errors.email && touched.email && (
              <label className="label">
                <span className="label-text-alt text-red-400">
                  {errors.email}
                </span>
              </label>
            )}
          </div>
          {/* Faculty */}
          <div className="form-control w-full max-w-[420px]">
            <label className="label">
              <span className="label-text">Faculty</span>
            </label>
            <input
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.faculty}
              id="faculty"
              type="text"
              placeholder="Type here"
              className={`input input-bordered w-full bg-slate-200 ${
                errors.faculty &&
                touched.faculty &&
                "border-red-400 border-solid border-2"
              }`}
            />
            {errors.faculty && touched.faculty && (
              <label className="label">
                <span className="label-text-alt text-red-400">
                  {errors.faculty}
                </span>
              </label>
            )}
          </div>
          {/* University */}
          <div className="form-control w-full max-w-[420px]">
            <label className="label">
              <span className="label-text">University</span>
            </label>
            <input
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.university}
              id="university"
              type="text"
              placeholder="Type here"
              className={`input input-bordered w-full bg-slate-200 ${
                errors.university &&
                touched.university &&
                "border-red-400 border-solid border-2"
              }`}
            />
            {errors.university && touched.university && (
              <label className="label">
                <span className="label-text-alt text-red-400">
                  {errors.university}
                </span>
              </label>
            )}
          </div>
          {/* CV */}
          {/* <div className="form-control w-full max-w-[420px]">
            <label className="label">
              <span className="label-text">Upload your CV</span>
            </label>
            <input
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.cv}
              id="cv"
              type="file"
              placeholder="Type here"
              className="file-input file-input-bordered border-2 border-solid border-pes_black w-full"
            />
          </div> */}
          {/* Experience */}
          <div className="form-control w-full max-w-[420px]">
            <label className="label">
              <span className="label-text">Do you have prior experience?</span>
            </label>
            {/* Container of male and female labels and inputs */}
            <div className="flex gap-8 px-[20px] h-[53px] items-center">
              <div className="flex">
                <p>Yes</p>
                <input
                  type="radio"
                  name="experience"
                  value="yes"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="ml-2 radio border-pes_black border-[2px] border-solid"
                  checked={values.experience === "yes"}
                />
              </div>
              <div className="flex">
                <p>No</p>
                <input
                  type="radio"
                  name="experience"
                  value="no"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="ml-2 radio border-pes_black border-[2px] border-solid"
                  checked={values.experience === "no"}
                />
              </div>
              {errors.gender && (
                <span className="label-text-alt text-red-400">
                  {errors.gender}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="submit-area w-full flex flex-col gap-4 items-center justify-center">
          <button
            disabled={isSubmitting || Object.keys(errors).length > 0}
            type="submit"
            className="rounded-full bg-pes_lightblue disabled:bg-pes_darkgray py-4 text-pes_white text-lg text-center w-full max-w-[420px]"
          >
            Apply Now
          </button>
          <p className="text-base text-pes_darkgray text-center">
            By applying, you confirm that all information entered is correct.
          </p>
        </div>
      </form>
    </section>
  );
}
