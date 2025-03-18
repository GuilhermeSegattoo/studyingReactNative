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
  image: "https://irs.www.warnerbros.com/hero-banner-v2-tablet-jpeg/movies/media/browser/mickey17_hero_0.jpg",
  cast: [
    { 
      id: "1", 
      name: "Mickey", 
      actor: "Robert Pattinson", 
      image: "https://image.gala.de/23955004/t/s_/v4/w960/r0.6667/-/robert-pattinson.jpg",
      bio: "Ator britânico conhecido por interpretar Edward Cullen na saga Crepúsculo e Bruce Wayne em The Batman.",
      gender: "Masculino",
      birthDate: "1986-05-13",
      birthPlace: "Londres, Reino Unido",
      movies: [
        { id: "1", title: "The Batman", date: "2022-03-04" },
        { id: "2", title: "O Farol", date: "2019-05-19" }
      ]
    },
    { 
      id: "2", 
      name: "Nasha", 
      actor: "Naomi Ackie", 
      image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTXMDHyqx7X8CNLXbSJF1vqsoSoK_T2BRtSaV8wS2G5fKzgma9-K9sxTG_RD1ruI8ZFpL7vYqeLIx0Ak1g",
      bio: "Atriz britânica conhecida por interpretar Jannah em Star Wars: A Ascensão Skywalker.",
      gender: "Feminino",
      birthDate: "1992-08-22",
      birthPlace: "Londres, Reino Unido",
      movies: [
        { id: "1", title: "Star Wars: A Ascensão Skywalker", date: "2019-12-20" },
        { id: "2", title: "Whitney Houston: I Wanna Dance with Somebody", date: "2022-12-23" }
      ]
    },
    { 
      id: "3", 
      name: "Commander", 
      actor: "Mark Ruffalo", 
      image: "https://sm.ign.com/ign_br/cover/m/mark-ruffa/mark-ruffalo_45h2.jpg",
      bio: "Ator norte-americano mais conhecido por interpretar Bruce Banner / Hulk no Universo Cinematográfico da Marvel.",
      gender: "Masculino",
      birthDate: "1967-11-22",
      birthPlace: "Kenosha, Wisconsin, EUA",
      movies: [
        { id: "1", title: "Os Vingadores", date: "2012-04-26" },
        { id: "2", title: "O Preço da Verdade", date: "2019-11-22" }
      ]
    },
    { 
      id: "4", 
      name: "Dr. Soong", 
      actor: "Steven Yeun", 
      image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQhjIZuWBj7-oMizqXHT4nzzQT7KoG61HLy4QCiT_IZ0ufWFiBiTF2qymMZ8KUu2K1dNEhmNaz11e8A2T4",
      bio: "Ator coreano-americano conhecido por interpretar Glenn Rhee na série The Walking Dead.",
      gender: "Masculino",
      birthDate: "1983-12-21",
      birthPlace: "Seul, Coreia do Sul",
      movies: [
        { id: "1", title: "Nope", date: "2022-07-22" },
        { id: "2", title: "Minari", date: "2020-01-26" }
      ]
    },
    { 
      id: "5", 
      name: "Gwen", 
      actor: "Toni Collette", 
      image: "https://d1nslcd7m2225b.cloudfront.net/Pictures/480xAny/7/0/3/1418703_tonicollette.photo1_493376_crop.jpg",
      bio: "Atriz australiana conhecida por filmes como O Sexto Sentido e Hereditário.",
      gender: "Feminino",
      birthDate: "1972-11-01",
      birthPlace: "Sydney, Austrália",
      movies: [
        { id: "1", title: "O Sexto Sentido", date: "1999-08-06" },
        { id: "2", title: "Hereditário", date: "2018-06-08" }
      ]
    },
  ],
};


const MovieDetailsScreen = ({ navigation }) => {
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
          <TouchableOpacity 
            style={styles.actorItem} 
            onPress={() => navigation.navigate("ActorDetails", { actor: item })}
          >
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

const ActorDetailsScreen = ({ route, navigation }) => {
  const { actor } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: actor.image }} style={styles.actorImageLarge} />

      <View style={styles.actorInfo}>
        <Text style={styles.actorName}>{actor.name}</Text>
        <Text style={styles.actorBio}>{actor.bio}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text><Text style={styles.detailLabel}>Sexo:</Text> {actor.gender}</Text>
        <Text><Text style={styles.detailLabel}>Data de Nascimento:</Text> {actor.birthDate}</Text>
        <Text><Text style={styles.detailLabel}>Lugar de Nascimento:</Text> {actor.birthPlace}</Text>
      </View>

      <Text style={styles.sectionTitle}>🎬 Filmes</Text>
      <FlatList
        data={actor.movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.movieItem}>
            <Ionicons name="film-outline" size={24} color="black" style={styles.movieIcon} />
            <View>
              <Text style={styles.movieTitle}>{item.title}</Text>
              <Text style={styles.movieDate}>{item.date}</Text>
            </View>
          </View>
        )}
      />

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
        <Stack.Screen name="ActorDetails" component={ActorDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  movieImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  movieInfo: {
    padding: 10,
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
    backgroundColor: "#f5f5f5",
    padding: 15,
    marginHorizontal: 15,
    borderRadius: 10,
  },
  detailLabel: {
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
    marginLeft: 15,
  },
  actorItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 2,
  },
  actorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  actorImageLarge: {
    width: "100%",
    height: 250,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  actorInfo: {
    padding: 20,
  },
  actorName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  actorBio: {
    fontSize: 14,
    marginTop: 10,
    color: "#444",
    textAlign: "justify",
  },
  movieItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 2,
  },
  movieIcon: {
    marginRight: 10,
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  movieDate: {
    fontSize: 14,
    color: "gray",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    alignSelf: "center",
  },
  backText: {
    fontSize: 18,
    marginLeft: 5,
  },
});
