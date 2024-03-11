import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components/Header';
import { Colors } from './src/Styles/colors/Colors';
import { BoasVindas } from './src/components/BoasVindas';
SafeAreaView

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <BoasVindas/>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea:{
    flex:1,
    paddingTop:32,
    backgroundColor:Colors.cinza
  },

});
