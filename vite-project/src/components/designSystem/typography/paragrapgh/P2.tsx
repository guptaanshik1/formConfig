import { IFontProps } from "../../../../utils/data";
import CustomText from "../../../CustomText";

const P2 = (props: IFontProps) => {
  return (
    <CustomText styleArr={["16px", "24px", 400]} {...props}>
      {props.children}
    </CustomText>
  );
};

export default P2;
