export const checkLoginData = (email, password) => {
  const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPassword =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      password
    );
  if (!isEmail) {
    return "Invalid Email";
  }
  if (!isPassword) {
    return "Invalid password";
  }
  return null;
};
