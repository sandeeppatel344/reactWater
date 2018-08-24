export const validate = (value, type) => {
  let errors = "";
  if (type === "OTP_NO") {
    if (!value) {
      errors = "Please enter OTP";
    } else if (value && value.length < 6) {
      errors = "Please enter valid OTP";
    } else {
      errors = null;
    }
  }

  return errors;
};
