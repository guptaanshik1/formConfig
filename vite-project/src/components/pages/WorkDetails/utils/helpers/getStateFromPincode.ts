import { pincodeStateMapper } from "../../../../../utils/config/pincodeStateMapper";

export const getStateFromPincode = (pincode: string) => {
  const threeDigitsOfPincode = pincode?.slice(0, 3);

  const state = Object.entries(pincodeStateMapper).find(([state, pincodes]) => {
    if (pincodes.includes(Number(threeDigitsOfPincode))) {
      return state;
    }
  });

  return state?.[0];
};
