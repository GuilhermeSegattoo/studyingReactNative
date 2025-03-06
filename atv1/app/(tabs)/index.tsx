import { Image, StyleSheet, View, Text } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/default-banner.jpg')}
          style={styles.imagemLogo}
          resizeMode="cover" 
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem Vindo!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Objeto</ThemedText>
        <ThemedView style={styles.imageContainer}>
          <Image
            source={require('@/assets/images/fusca1.jpg')} 
            style={styles.reactLogo}
            resizeMode="contain" 
          />
          <Text style={styles.textInfo}>
            VW - Fusca{"\n"}
            Ano: 1978{"\n"}
            Cor: Preto
          </Text>
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
      <Image
            source={require('@/assets/images/celta1.jpg')} 
            style={styles.reactLogo}
            resizeMode="contain" 
          />
          <Text style={styles.textInfo}>
          CHEVY - Celta{"\n"}
          Ano: 2000{"\n"}
          Cor: Vermelho
          </Text>      
          </ThemedView>
      <ThemedView style={styles.stepContainer}>
      <Image
            source={require('@/assets/images/seal.jpg')} 
            style={styles.reactLogo}
            resizeMode="contain" 
          />
          <Text style={styles.textInfo}>
          BYD - Seal{"\n"}
          Ano: 2022{"\n"}
          Cor: Prata
          </Text>            
          </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 300, 
    width: '100%', 
    marginBottom: 10, 
  },
  imagemLogo: {
    height: 250,
    width: '100%', 
    position: 'relative', 
  },
  imageContainer: {
    marginBottom: 15,
  },
  textInfo: {
    marginTop: 10,
    fontSize: 18,
    color: 'gray', 
  }
});
