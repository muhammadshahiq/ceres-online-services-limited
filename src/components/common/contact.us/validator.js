import { regex } from "../../../components/common/utill/regex";

export function isFormDetails(data) {
  const isValidFirstName = regex.isNotEmpty.test(data.firstName);
  const isValidLastName = regex.isNotEmpty.test(data.lastName);
  const isValidEmail = regex.isNotEmpty.test(data.email);

  return {
    isValidFirstName: isValidFirstName,
    isValidLastName: isValidLastName,
    isValidEmail: isValidEmail,
    allValid: isValidFirstName && isValidLastName && isValidEmail 
  };
}
