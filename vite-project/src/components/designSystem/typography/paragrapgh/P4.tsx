import { IFontProps } from "../../../../utils/data";
import CustomText from "../../../CustomText";

const P4 = (props: IFontProps) => {
  return (
    <CustomText styleArr={["14px", "20px", 400]} {...props}>
      {props.children}
    </CustomText>
  );
};

export default P4;
