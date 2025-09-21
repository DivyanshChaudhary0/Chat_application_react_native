import { ScreenWrapperProps } from "@/constants/types";
import { Dimensions, Platform, StatusBar, View } from "react-native";

const { height } = Dimensions.get('window');

const ScreenWrapper = ({ style, children, isModal }: ScreenWrapperProps) => {

    let paddingTop = Platform.OS === 'ios' ? height * 0.06 : 40;
    let paddingBottom = 0;

    if(isModal){
        paddingTop = Platform.OS === 'ios' ? height * 0.02 : 45;
        paddingBottom = height * 0.02;
    }

    return (
        <View style={[{paddingTop, paddingBottom, flex: 1}, style]}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} />
            {children}
        </View>
    )
}

export default ScreenWrapper;