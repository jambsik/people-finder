export const peopleFiltersInitialValues = {
  title: "",
  forename: "",
  middleNames: "",
  emailAddress: "",
  surname: "",
  gender: "",
  dateOfBirth: "",
  homeBuildingName: "",
  homeBuildingNumber: "",
  homeSubBuilding: "",
  homeStreet: "",
  homeCity: "",
  homeCounty: "",
  homePostcode: "",
  homePhoneNumber: "",
  mobilePhoneNumber: "",
};

export const cleanEmptyValues = (values: { [key: string]: any }) => {
  const result: { [key: string]: any } = {};

  Object.keys(values).forEach((value: string) => {
    const hasValue = values[value].length > 0;

    if (hasValue) {
      result[value] = values[value];
    }
  });

  return result;
};
