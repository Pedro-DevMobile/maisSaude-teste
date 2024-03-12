import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { FontSize, fontFamilyDefault } from "../Styles/colors/Fonts";
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

            <View>
                <Text>
                    O que é o chega de malária?
                </Text>
                <ImageBackground source={require('../../assets/malaria.png')}>
                    <Image source={require('../../assets/PlayCircle.png')} />
                </ImageBackground>
                <Text>
                    Em um esforço para combater a malária, apresentamos o projeto "Chega de Malária", uma iniciativa educacional que visa fornecer conhecimento valioso sobre essa doença globalmente impactante.

                    As videoaulas, conduzidas por especialistas, oferecem uma visão abrangente dos aspectos biológicos, epidemiológicos e sociais da malária, tornando a aprendizagem envolvente e significativa.
                    <Text style={styles.title}>Assista ao vídeo sobre o projeto "Chega de Malária" acima:</Text>
                </Text>
                <Text>

                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    title: {
        fontFamily: fontFamilyDefault.fontFamily,
        fontWeight: '700',
        color: Colors.textBlack
    },
    alternativeTitle: {
        fontSize: FontSize.medium,
        color: Colors.rosaPrincipal
    },
    subTitle: {
        fontSize: FontSize.medium
    }
})