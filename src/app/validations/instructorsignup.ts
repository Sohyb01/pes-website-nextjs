import * as yup from "yup";

const phoneNumberRules = /^\+(?:[0-9]●?){6,14}[0-9]$/;

export const instructorSchema = yup.object().shape({
  name: yup.string().required("Required"),
  age: yup
    .number()
    .positive("Age must be a positive number")
    .integer()
    .required("Required"),
  gender: yup.string().required("Required"),
  mobile: yup
    .string()
    .matches(phoneNumberRules, { message: "Enter a valid phone number" })
    .required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  faculty: yup.string().required("Required"),
  university: yup.string().required("Required"),
  experience: yup.string().required("Required"),
  //   cv: yup.mixed(),
});
