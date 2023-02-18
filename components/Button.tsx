import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import { isWhiteSpaceLike } from 'typescript';

export enum ButtonStyle {
    Primary = 0,
    Secondary = 1,
}

export enum ButtonSize {
    Small = 0,
    Medium = 1,
    Large = 2
}

export interface IButtonProps {
    text: string;
    size: ButtonSize;
    style?: ButtonStyle;
    clickHandler?: any;
}

export function Button(props: IButtonProps) {
    const styleMap = {
        [ButtonStyle.Primary]: styles.primary,
        [ButtonStyle.Secondary]: styles.secondary,
    }

    const sizeMap = {
        [ButtonSize.Small]: styles.buttonSizeSmall,
        [ButtonSize.Medium]: styles.buttonSizeMedium,
        [ButtonSize.Large]: styles.buttonSizeLarge,
    }

    return (
        <TouchableHighlight 
            style={styleMap[props.style] ?? styles.primary}
            underlayColor="#eeeee4"
            activeOpacity={0.6}
            onPress={props.clickHandler}>
            <View>
                <Text style={sizeMap[props.size]}>{props.text}</Text>
            </View>
        </TouchableHighlight>
    )
}

const defaultStyle = {
    borderRadius: 25,
    paddingHorizontal: 35,
    paddingVertical: 5
}

const defaultButtonStyle = {
    color: "white"
}

const styles = StyleSheet.create({
    primary: {
        backgroundColor: '#C5AE69',
        ...defaultStyle
    },
    secondary: {
        backgroundColor: 'grey',
        ...defaultStyle
    },
    buttonSizeSmall: {
        fontSize: 16,
        ...defaultButtonStyle
    },
    buttonSizeMedium: {
        fontSize: 24,
        ...defaultButtonStyle
    },
    buttonSizeLarge: {
        fontSize: 32,
        ...defaultButtonStyle
    }
})