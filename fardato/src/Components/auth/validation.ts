const nameRegex = /^[\u0600-\u06FF\s]{2,30}$/;

const validateName = (name: string): null | string => {
  if (!nameRegex.test(name)) {
    return "اسمت باید بین ۲ تا ۳۰ کاراکتر فارسی باشه";
  }
  return null;
};

const usernameRegex = /^[a-zA-Z0-9_.]{3,20}$/;

const validateUsername = (username: string): null | string => {
  if (!usernameRegex.test(username)) {
    return "نام کاربری باید ۳-۲۰ کاراکتر و فقط شامل حروف انگلیسی، اعداد و _ . باشه";
  }
  if (!/^[a-zA-Z]/.test(username)) {
    return "نام کاربری باید با حروف انگلیسی شروع بشه";
  }
  return null;
};

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const validatePassword = (password: string): null | string => {
  if (password.length < 8) return "رمز عبور باید حداقل ۸ کاراکتر باشه";

  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[@$!%*?&]/.test(password);

  if (!hasUpperCase) return "رمز عبور باید شامل حداقل یک حرف بزرگ انگلیسی باشه";
  if (!hasLowerCase)
    return "رمز عبور باید شامل حداقل یک حرف کوچیک انگلیسی باشه";
  if (!hasNumbers) return "رمز عبور باید شامل حداقل یک عدد باشه";
  if (!hasSpecialChar)
    return "رمز عبور باید شامل حداقل یک کاراکتر خاص (@$!%*?&) باشه";

  return null;
};
export {
  nameRegex,
  usernameRegex,
  passwordRegex,
  validateName,
  validateUsername,
  validatePassword,
};
