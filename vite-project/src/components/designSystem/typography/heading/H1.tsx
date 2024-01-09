import { IFontProps } from "../../../../utils/data";
import CustomText from "../../../CustomText";

const H1 = (props: IFontProps) => {
  return (
    <CustomText styleArr={["32px", "40px", 600]} {...props}>
      {props.children}
    </CustomText>
  );
};

export default H1;
