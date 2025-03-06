import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const movieDetails = {
  title: "Mickey 17",
  description:
    "Mickey 17 é um clone descartável enviado para uma missão espacial. Quando um clone morre, sua consciência é transferida para um novo corpo, mas algo inesperado acontece.",
  budget: 200000000,
  votes: 8500,
  duration: "150 min",
  releaseDate: "2025-01-31",
  image: "https://irs.www.warnerbros.com/hero-banner-v2-tablet-jpeg/movies/media/browser/mickey17_hero_0.jpg", // Pôster do filme
  cast: [
    { id: "1", name: "Mickey", actor: "Robert Pattinson", image: "https://image.gala.de/23955004/t/s_/v4/w960/r0.6667/-/robert-pattinson.jpg" },
    { id: "2", name: "Nasha", actor: "Naomi Ackie", image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTXMDHyqx7X8CNLXbSJF1vqsoSoK_T2BRtSaV8wS2G5fKzgma9-K9sxTG_RD1ruI8ZFpL7vYqeLIx0Ak1g" },
    { id: "3", name: "Commander", actor: "Mark Ruffalo", image: "https://sm.ign.com/ign_br/cover/m/mark-ruffa/mark-ruffalo_45h2.jpg" },
    { id: "4", name: "Dr. Soong", actor: "Steven Yeun", image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQhjIZuWBj7-oMizqXHT4nzzQT7KoG61HLy4QCiT_IZ0ufWFiBiTF2qymMZ8KUu2K1dNEhmNaz11e8A2T4" },
    { id: "5", name: "Gwen", actor: "Toni Collette", image: "https://d1nslcd7m2225b.cloudfront.net/Pictures/480xAny/7/0/3/1418703_tonicollette.photo1_493376_crop.jpg" },
  ],
};

const MovieDetailsScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  return (
    <ScrollView style={styles.container}>

       <Image source={{ uri: movieDetails.image }} style={styles.movieImage} />

      <View style={styles.movieInfo}>
        <Text style={styles.movieTitle}>{movieDetails.title}</Text>
        <Text style={styles.movieDescription}>{movieDetails.description}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text>Orçamento: ${movieDetails.budget.toLocaleString()}</Text>
        <Text>Votos: {movieDetails.votes}</Text>
        <Text>Duração: {movieDetails.duration}</Text>
        <Text>Lançamento: {movieDetails.releaseDate}</Text>
      </View>
      
      <Text style={styles.sectionTitle}>Atores</Text>
      <FlatList
        data={movieDetails.cast}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.actorItem}>
            <Image source={{ uri: item.image }} style={styles.actorImage} />
            <View>
              <Text style={styles.actorName}>{item.name}</Text>
              <Text style={styles.actorCharacter}>{item.actor}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="gray" />
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  backText: {
    fontSize: 18,
    marginLeft: 5,
  },
  movieImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  movieInfo: {
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  movieTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  movieDescription: {
    fontSize: 14,
    marginTop: 5,
  },
  detailsContainer: {
    backgroundColor: "#f1f1f1",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
  },
  actorItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  actorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  actorName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  actorCharacter: {
    fontSize: 14,
    color: "gray",
  },
});
