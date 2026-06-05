export const validateEmail = (email) => {
  if (!email.trim()) {
    return "Email is required";
  }

  const emailRegex =
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  if (!emailRegex.test(email)) {
    return "Invalid email address";
  }

  return "";
};

export const validatePassword = (password) => {
  if (!password.trim()) {
    return "Password is required";
  }

  if (password.length < 6) {
    return "Password must be at least 6 characters";
  }

  return "";
};

export const validateName = (name) => {
  if (!name.trim()) {
    return "Name is required";
  }

  if (name.length < 3) {
    return "Name must be at least 3 characters";
  }

  return "";
};

export const validatePhone = (phone) => {
  if (!phone.trim()) {
    return "Phone number is required";
  }

  const phoneRegex = /^[6-9]\d{9}$/;

  if (!phoneRegex.test(phone)) {
    return "Invalid phone number";
  }

  return "";
};

export const validateRequired = (
  value,
  fieldName
) => {
  if (!value.trim()) {
    return `${fieldName} is required`;
  }

  return "";
};

