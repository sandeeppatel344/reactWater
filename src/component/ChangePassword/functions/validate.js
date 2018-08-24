export const validate = values => {
  const errors = {};
  if (!values.oldPassword) {
    errors.oldPassword = "Please enter old password.";
  }
  if (values.oldPassword) {
    if (values.oldPassword.length < 8)
      errors.oldPassword = "Please enter minimum 8 characters.";
  }

  if (values.oldPassword) {
    if (values.oldPassword.length > 20)
      errors.oldPassword = "Please enter maxiumum 20 characters.";
  }

  if (!values.newPassword) {
    errors.newPassword = "Please enter new password.";
  }
  if (values.newPassword) {
    if (values.newPassword.length < 8)
      errors.newPassword = "Please enter minimum 8 characters.";
  }

  if (values.newPassword) {
    if (values.newPassword.length > 20)
      errors.newPassword = "Please enter maxiumum 20 characters.";
  }

  if (!values.confirm_password) {
    errors.confirm_password = "Please enter confirm password.";
  } else if (values.confirm_password !== values.newPassword) {
    errors.confirm_password = "Password is mismatched.";
  }

  return errors;
};
