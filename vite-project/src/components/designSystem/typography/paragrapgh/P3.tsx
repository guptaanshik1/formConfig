import { IFontProps } from "../../../../utils/data";
import CustomText from "../../../CustomText";

const P3 = (props: IFontProps) => {
  return (
    <CustomText styleArr={["14px", "20px", 500]} {...props}>
      {props.children}
    </CustomText>
  );
};

export default P3;
