import React from "react"
import { TextProps, TextStyle, TouchableOpacityProps, ViewStyle } from "react-native"

export type ScreenWrapperProps = {
    style?: ViewStyle,
    children?: React.ReactNode,
    isModal?: boolean
}

export type TypoProps = {
    style?: TextStyle,
    color?: string,
    size: number,
    fontWeight?: TextStyle['fontWeight'],
    children: React.ReactNode,
    textProps?: TextProps
}

export interface ButtonProps extends TouchableOpacityProps {
    style?: ViewStyle,
    onPress?: () => void,
    loading?: boolean,
    children: React.ReactNode
}