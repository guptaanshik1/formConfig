import { IFontProps } from "../../../../utils/data";
import CustomText from "../../../CustomText";

const P1 = (props: IFontProps) => {
  return (
    <CustomText styleArr={["18px", "26px", 400]} {...props}>
      {props.children}
    </CustomText>
  );
};

export default P1;
