import * as Yup from "yup";
import moment from "moment";
import checkoutFormModel from "./checkoutFormModel";
const {
  formField: {
    company,
    booth,
    address1,
    city,
    state,
    zip,
    phone,
    fax,
    ext,
    cname,
    cemail,
    cmobile,
    cardType,
    nameOnCard,
    cardNumber,
    expiryDate,
    cvv,
  },
} = checkoutFormModel;

const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
//const zipRegExp = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
const numberRegExp = /^\d+$/;
export default [
  Yup.object().shape({
    [company.name]: Yup.string().required(`${company.requiredErrorMsg}`),
    [booth.name]: Yup.string(),
    [address1.name]: Yup.string().required(`${address1.requiredErrorMsg}`),
    [city.name]: Yup.string().nullable().required(`${city.requiredErrorMsg}`),
    [state.name]: Yup.string().nullable().required(`${state.requiredErrorMsg}`),
    [zip.name]: Yup.string()
      .required(`${zip.requiredErrorMsg}`)
      .test("len", `${zip.invalidErrorMsg}`, (val) => val && val.length === 5),
    [phone.name]: Yup.string()
      .nullable()
      .required(`${phone.requiredErrorMsg}`)
      .matches(phoneRegExp, `${phone.invalidErrorMsg}`)
      .min(10, "Too short")
      .max(10, "Too long"),
    [fax.name]: Yup.string()
      .matches(phoneRegExp, `${fax.invalidErrorMsg}`)
      .min(10, "Too short")
      .max(10, "Too long"),
    [ext.name]: Yup.string().matches(numberRegExp, "ext is not valid"),
    [cname.name]: Yup.string().required(`${cname.requiredErrorMsg}`),
    [cemail.name]: Yup.string()
      .email(`${cemail.invalidErrorMsg}`)
      .required(`${cemail.requiredErrorMsg}`),
    [cmobile.name]: Yup.string()
      .required(`${cmobile.requiredErrorMsg}`)
      .matches(phoneRegExp, `${cmobile.invalidErrorMsg}`)
      .min(10, "Too short")
      .max(10, "Too long"),
  }),
  Yup.object().shape({
    [cardType.name]: Yup.string().required(`${cardType.requiredErrorMsg}`),

    [nameOnCard.name]: Yup.string().required(`${nameOnCard.requiredErrorMsg}`),
    [cardNumber.name]: Yup.string()
      .required(`${cardNumber.requiredErrorMsg}`)
      .matches(visaRegEx, cardNumber.invalidErrorMsg),
    [expiryDate.name]: Yup.string()
      .nullable()
      .required(`${expiryDate.requiredErrorMsg}`)
      .test("expDate", expiryDate.invalidErrorMsg, (val) => {
        if (val) {
          const startDate = new Date();
          const endDate = new Date(2050, 12, 31);
          if (moment(val, moment.ISO_8601).isValid()) {
            return moment(val).isBetween(startDate, endDate);
          }
          return false;
        }
        return false;
      }),
    [cvv.name]: Yup.string()
      .required(`${cvv.requiredErrorMsg}`)
      .test("len", `${cvv.invalidErrorMsg}`, (val) => val && val.length === 3),
  }),
];
