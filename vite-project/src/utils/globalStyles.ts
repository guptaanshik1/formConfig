import { systemColors } from "../components/designSystem/colors/systemColors";

export const globalPadding = { base: "32px 16px", md: "40px 100px" };
export const loanBottomMargin = {
  base: "calc(var(--mobile-loan-footer-height) + 24px)",
  md: "calc(var(--tablet-loan-footer-height) + 32px)",
};

export const marginTopForStepHeader = {
  base: "var(--loan-step-header-height)",
  md: "var(--loan-step-header-height)",
};

export const commonFormStyles = {
  borderRadius: "7px",
  border: `1px solid ${systemColors.grey[200]}`,
  h: { base: "56px", md: "58px" },
  color: systemColors.grey[900],
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "24px",
};

export const commonPlaceholderStyles = {
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "24px",
  color: systemColors.grey[500],
};
