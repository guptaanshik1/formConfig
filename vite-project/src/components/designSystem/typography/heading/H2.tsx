import { IFontProps } from "../../../../utils/data";
import CustomText from "../../../CustomText";

const H2 = (props: IFontProps) => {
  return (
    <CustomText styleArr={["24px", "32px", 700]} {...props}>
      {props.children}
    </CustomText>
  );
};

export default H2;
