import { TErrorResetActionType, TFormErrorActionType } from "../data";
import { isErrorResetActionType } from "./isErrorResetActionType";

export const formErrorsReducer = (
  state: any,
  action: TErrorResetActionType | TFormErrorActionType
) => {
  if (isErrorResetActionType(action)) {
    return {};
  }
  const newState = {
    ...state,
    [action.apiKey]: action.error,
  };

  if (!action.error) {
    delete newState[action.apiKey];
  }

  return newState;
};
