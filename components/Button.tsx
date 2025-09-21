import { verticalScale } from "@/constants/styling";
import { colors, radius } from "@/constants/theme";
import { ButtonProps } from "@/constants/types";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Loading from "./Loading";

const Button = ({ style, onPress, children, loading = false }: ButtonProps) => {

    if(loading){
        return (
            <View style={[styles.button, style, {backgroundColor: "transparent"}]}>
                <Loading />
            </View>
        )
    }

    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress} >
            {children}
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: "center",
        height: verticalScale(56),
        backgroundColor: colors.primary,
        borderRadius: radius.full,
        borderCurve: 'continuous'
    }
})