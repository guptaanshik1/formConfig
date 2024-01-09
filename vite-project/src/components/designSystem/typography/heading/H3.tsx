import { IFontProps } from "../../../../utils/data";
import CustomText from "../../../CustomText";

const H3 = (props: IFontProps) => {
  return (
    <CustomText styleArr={["20px", "28px", 700]} {...props}>
      {props.children}
    </CustomText>
  );
};

export default H3;
