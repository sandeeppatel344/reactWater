export const validate = values => {
  const errors = {};

  //Validations for Mobile Number
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

  //Validations set up for Password

  if (!values.password) {
    errors.password = "Please enter password.";
  } else if (values.password.length > 20) {
    errors.password = "Only 20 characters allowed.";
  } else if (values.password.length < 8) {
    errors.password = "Please enter minimum 8 characters.";
  }

  return errors;
};
