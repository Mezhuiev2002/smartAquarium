import React, { useMemo, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ColorPicker } from 'react-native-color-picker';

const ChooseColor: React.FC = () => {
    const [colour, setColour] = useState('');
    const [currentColor, setCurrentColor] = useState('');

    function hexToRgb(hex: string) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : { r: 255, g: 0, b: 255 };
    }
    function setStringColor(obj: any) {
        let temp = `rgb(${obj.r}, ${obj.g}, ${obj.b})`;
        setCurrentColor(temp)
    }

    useMemo(() => {
        setStringColor(hexToRgb(colour))
    }, [colour])

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 24, fontWeight: '600'}}>This is an additional feature</Text>
            <Text style={{fontSize: 16, fontWeight: '400'}}>It is not available now 🥺</Text>
            <ColorPicker

                style={styles.colorPicker}
                onColorSelected={color => setColour(color)}

            />

            <Text style={styles.text}>{currentColor}</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    colorPicker: {
        width: 300,
        height: 300,
    },
    slider: {
        width: 300,
        marginTop: 10,
    },
    text: {
        marginTop: 10,
        fontSize: 18,
    },
    viewColor: {
        width: 100,
        height: 100,

    }
});

export default ChooseColor;
