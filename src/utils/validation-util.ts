const regex = {
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
};
export const emailValidation = (email: string): boolean => {
  return regex.email.test(email);
};
