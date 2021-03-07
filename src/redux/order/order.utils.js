import _ from "lodash";
const address = {
  company: "",
  address1: "",
  booth: "",
  city: "",
  state: "",
  zip: "",
  phone: "",
  fax: "",
  ext: "",
  cname: "",
  cemail: "",
  cmobile: "",
};
const paymentDetails = {
  cardType: "",
  nameOnCard: "",
  cardNumber: "",
  expiryDate: "",
  cvv: "",
};
const prepareObject = (payload, objName) => {
  const objToPrepare = objName === "paymentDetails" ? paymentDetails : address;
  return _.pick(payload, Object.keys(objToPrepare));
};
export default prepareObject;
