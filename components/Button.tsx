import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

export enum ButtonStyle {
    Primary = 0,
    Secondary = 1,
}

export interface IButtonProps {
    text: string;
    style?: ButtonStyle;
    clickHandler?: any;
}

export function Button(props: IButtonProps) {
    const styleMap = {
        [ButtonStyle.Primary]: styles.primary,
        [ButtonStyle.Secondary]: styles.secondary,
    }

    return (
        <TouchableHighlight 
            style={styleMap[props.style] ?? styles.primary}
            underlayColor="#eeeee4"
            activeOpacity={0.6}
            onPress={props.clickHandler}>
            <View>
                <Text style={styles.buttonText}>{props.text}</Text>
            </View>
        </TouchableHighlight>
    )
}

const defaultStyle = {
    borderRadius: 25,
    paddingHorizontal: 35,
    paddingVertical: 5
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
    buttonText: {
        fontSize: 32,
        color: 'white'
    }
})