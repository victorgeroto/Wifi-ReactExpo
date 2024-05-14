import React, { useEffect, useState} from "react";
import { View, Text } from "react-native";
import * as Animatable from 'react-native-animatable';
import { styles } from "../../css/style";

export default function Aviso( { texto, isConnected }) {
    const [schouldAnimate, setShouAnimate] = useState(false);

    useEffect(() => {
        if(isConnected !== null) {
            setShouAnimate(true);
            setTimeout(() => {
                setShouAnimate(false);
            }, 5000);// Define o tempo de duração de animação em milisegundos (5 segundos no exemplo)
        }
    }, [isConnected]);

    return (
        <View style={{ alignItems: 'center' }}>
            {schouldAnimate && (
                <Animatable.View animation="fadeIn" durantion={5000} style={styles.aviso}>
                    <Text>{texto}</Text>
                </Animatable.View>
            )}
        </View>
    );
}