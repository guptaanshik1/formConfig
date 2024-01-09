import { IFontProps } from "../../../../utils/data";
import CustomText from "../../../CustomText";

const H6 = (props: IFontProps) => {
  return (
    <CustomText styleArr={["14px", "20px", 500]} {...props}>
      {props.children}
    </CustomText>
  );
};

export default H6;
