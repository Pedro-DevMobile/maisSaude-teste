import { StatusBar, StyleSheet, Text, View } from "react-native";
import { FontSize, Fonts } from "../Styles/colors/Fonts";
import { Colors } from "../Styles/colors/Colors";

export function BoasVindas() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Olá, <Text style={styles.alternativeTitle} >User!✌️</Text>
            </Text>
            <Text style={styles.subTitle}>
                Você está acessando à plataforma com conteúdos sobre malária
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    title: {
        fontFamily: Fonts.primary,
        fontWeight: '700',
        color: Colors.textBlack
    },
    alternativeTitle: {
        fontSize: FontSize.medium,
        color: Colors.rosaPrincipal
    },
    subTitle:{
        fontSize: FontSize.medium
    }
})