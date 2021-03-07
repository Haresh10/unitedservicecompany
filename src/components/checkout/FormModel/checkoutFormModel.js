export default {
  formId: "checkoutForm",
  formField: {
    company: {
      name: "company",
      label: "Exhibiting Company Name*",
      requiredErrorMsg: "Company name is required",
    },
    booth: {
      name: "booth",
      label: "Booth",
    },
    address1: {
      name: "address1",
      label: "Street Address*",
      requiredErrorMsg: "Street address is required",
    },
    city: {
      name: "city",
      label: "City*",
      requiredErrorMsg: "City is required",
    },
    state: {
      name: "state",
      label: "State*",
      requiredErrorMsg: "State is required",
    },
    zip: {
      name: "zip",
      label: "Postal Code*",
      requiredErrorMsg: "Postalcode is required",
      invalidErrorMsg: "Postalcode is not valid (e.g. 70000)",
    },
    phone: {
      name: "phone",
      label: "Phone*",
      requiredErrorMsg: "Phone is required",
      invalidErrorMsg: "phone is not valid (e.g. 9876567543)",
    },
    fax: {
      name: "fax",
      label: "Fax",
      invalidErrorMsg: "Fax is not valid (e.g. 9876567543)",
    },
    ext: {
      name: "ext",
      label: "Ext",
      invalidErrorMsg: "Extension is not valid (e.g. 67543)",
    },
    cname: {
      name: "cname",
      label: "Contact Name*",
      requiredErrorMsg: "Contact Name is required",
    },
    cemail: {
      name: "email",
      label: "Contact's Email*",
      requiredErrorMsg: "Email is required",
      invalidErrorMsg: "Email is not valid",
    },
    cmobile: {
      name: "cmobile",
      label: "Contact's Mobile*",
      requiredErrorMsg: "Mobile number is required",
      invalidErrorMsg: "Mobile number is not valid (e.g. 9876567543)",
    },

    cardType: {
      name: "cardType",
      label: "Card Type*",
      requiredErrorMsg: "Card Type is required",
    },
    nameOnCard: {
      name: "nameOnCard",
      label: "Name on card*",
      requiredErrorMsg: "Name on card is required",
    },
    cardNumber: {
      name: "cardNumber",
      label: "Card number*",
      requiredErrorMsg: "Card number is required",
      invalidErrorMsg: "Card number is not valid (e.g. 4111111111111)",
    },
    expiryDate: {
      name: "expiryDate",
      label: "Expiry date*",
      requiredErrorMsg: "Expiry date is required",
      invalidErrorMsg: "Expiry date is not valid",
    },
    cvv: {
      name: "cvv",
      label: "CVV*",
      requiredErrorMsg: "CVV is required",
      invalidErrorMsg: "CVV is invalid (e.g. 357)",
    },
  },
};
