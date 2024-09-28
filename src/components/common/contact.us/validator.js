import { regex } from "../../../components/common/utill/regex";

export function isFormDetails(data) {
  const isValidFirstName = regex.isNotEmpty.test(data.firstName);
  const isValidLastName = regex.isNotEmpty.test(data.lastName);
  const isValidEmail = regex.isNotEmpty.test(data.email);
  const isValidMobileNo = data?.mobileNumber?.length >= 15;
  const isMobileNoNotEmpty = regex.isNotEmpty.test(data?.mobileNumber);

  return {
    isValidFirstName: isValidFirstName,
    isValidLastName: isValidLastName,
    isValidEmail: isValidEmail,
    isValidMobileNo: isValidMobileNo,
    isMobileNoNotEmpty: isMobileNoNotEmpty,
    allValid: isValidFirstName && isValidLastName && isValidEmail && isValidMobileNo && isMobileNoNotEmpty
  };
}
