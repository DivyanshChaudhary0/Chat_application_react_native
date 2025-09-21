import { verticalScale } from "@/constants/styling";
import { TypoProps } from "@/constants/types";
import { Text, TextStyle } from "react-native";

const Typo = ({ style,children,color,size,fontWeight = "400", textProps={}}: TypoProps) => {

    const textStyle: TextStyle = {
        fontSize: verticalScale(size),
        color,
        fontWeight
    }

  return( 
    <Text style={[ textStyle, style ]} {...textProps} >
        {children}
    </Text>
  );
};

export default Typo;
