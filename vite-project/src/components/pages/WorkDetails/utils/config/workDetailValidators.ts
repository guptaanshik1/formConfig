import { TFormValidators } from "../../../../../utils/data";
import {
  regexEmail,
  regexMobileNumber,
  regexPinCode,
  regexPositiveNumber,
} from "../../../../../utils/regex";

export const workDetailsValidators: TFormValidators = {
  email_id: (value) => {
    if (!regexEmail.test(`${value}`)) {
      return "Invalid Email Id";
    }
  },
  phone_number: (value) => {
    if (!regexMobileNumber.test(`${value}`)) {
      return "Invalid Number";
    }
  },
  pincode: (value) => {
    if (!regexPinCode.test(`${value}`)) {
      return "Invalid Pin Code";
    }
  },
  positive_number: (value) => {
    if (!regexPositiveNumber.test(`${value}`)) {
      return "Enter a positive number";
    }
  },
};
