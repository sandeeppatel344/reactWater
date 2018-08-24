export const validate = values => {
  const errors = {};

  if (!values.mobileNo) {
    errors.mobileNo = "Please enter mobile number.";
  } else if (values.mobileNo.length != 10) {
    errors.mobileNo = "Please enter 10 digit mobile number.";
  }
  if (values.mobileNo) {
    if (!/^(0|[1-9][0-9]{9})$/i.test(values.mobileNo)) {
      errors.mobileNo = "Please enter valid mobile number.";
    }
  }

  return errors;
};
