export const validate = values => {
  const errors = {};

  if (!values.new_password) {
    errors.new_password = "Please enter password.";
  }
  if (values.new_password) {
    if (values.new_password.length < 8) {
      errors.new_password = "Please enter minimum 8 characters.";
    }
  }

  if (!values.confirm_password) {
    errors.confirm_password = "Please enter confirm password.";
  } else if (values.confirm_password !== values.new_password) {
    errors.confirm_password = "Password is mismatched.";
  }

  return errors;
};
