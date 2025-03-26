import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Switch,
  Button,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

const filmes = [
  {
    id: '1',
    titulo: 'Vingadores: Ultimato',
    sinopse: 'Os Vingadores se unem para desfazer o estalo de Thanos.',
    imagem: 'https://s2-g1.glbimg.com/P4qEajW8fHy9w6rmF29EPQxhwhU=/0x45:1400x1000/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/E/E/lR2QJpRoGwKewinYXWvA/vingadors.jpg',
    descricao: 'Depois dos eventos de Guerra Infinita, os heróis tentam reverter os danos.',
    elenco: [
      {
        id: '1',
        nome: 'Robert Downey Jr.',
        papel: 'Homem de Ferro',
        foto: 'https://s2-oglobo.glbimg.com/kQQJbdEiNdPXd4xjhxbbHDQM690=/0x0:4064x2712/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2024/C/z/7rABhqS4azk9f71HXZBw/afp-20240311-34lc2wj-v1-highres-96thoscarsacademyawardspressroom.jpg',
      },
      {
        id: '2',
        nome: 'Chris Evans',
        papel: 'Capitão América',
        foto: 'https://s2-quem.glbimg.com/XFSF-2HUE342drNmn2ddLIE9110=/72x0:860x788/fit-in/996x788/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2022/o/S/NyKVQfRFWggWw6AMwBUA/2021-01-04-chris-evans.jpeg',
      },
      {
        id: '3',
        nome: 'Scarlett Johansson',
        papel: 'Viúva Negra',
        foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Scarlett_Johansson_at_Golden_Globes_Red_Carpet_2020.png/345px-Scarlett_Johansson_at_Golden_Globes_Red_Carpet_2020.png',
      },
    ],
  },
  {
    id: '5',
    titulo: 'Homem-Aranha: Sem Volta para Casa',
    sinopse: 'Peter Parker lida com as consequências de sua identidade revelada.',
    imagem: 'https://img.odcdn.com.br/wp-content/uploads/2022/09/spider-man_sem_volta_para_casa.jpg',
    descricao: 'Após sua identidade ser revelada, Peter busca ajuda de Doutor Estranho, o que acaba abrindo as portas do multiverso.',
    elenco: [
      {
        id: '1',
        nome: 'Tom Holland',
        papel: 'Peter Parker / Homem-Aranha',
        foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/800px-Tom_Holland_by_Gage_Skidmore.jpg',
      },
      {
        id: '2',
        nome: 'Zendaya',
        papel: 'MJ',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT4jRuhyYLbOE5ohHZG6qylZX_WwofEMhIoP10KzjvwthssOhxR3R-Ot3BFHF_3A1mqHbLV3_cP9sGykJr8QLzlw',
      },
      {
        id: '3',
        nome: 'Benedict Cumberbatch',
        papel: 'Doutor Estranho',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlPRC8KLdoOIazoR0LrSzGAGz2kCi11vyj0Mzr3MXT8nNh0BktJXAER96H9PNuQmC7AtB_OoEkiyDwLzIj462u2q07FVn_eNqwYfAYFQ',
      },
    ],
  },
  {
    id: '3',
    titulo: 'Oppenheimer',
    sinopse: 'A história do físico que liderou o projeto da bomba atômica.',
    imagem: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSurNDY8aZ2Q2_NMC2RKFX77pQkXV0roOxr9QZTbLRBR-jUDU1Ba0cbUpXT6UQJJF7rWFifsIwrcQJTC_odq9i9Tu2qwsGhrfe9PTJhwg',
    descricao: 'O filme acompanha a vida de J. Robert Oppenheimer durante o desenvolvimento da bomba atômica no Projeto Manhattan.',
    elenco: [
      {
        id: '1',
        nome: 'Cillian Murphy',
        papel: 'J. Robert Oppenheimer',
        foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Cillian_Murphy_at_Berlinale_2024%2C_Ausschnitt.jpg/375px-Cillian_Murphy_at_Berlinale_2024%2C_Ausschnitt.jpg',
      },
      {
        id: '2',
        nome: 'Emily Blunt',
        papel: 'Katherine Oppenheimer',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrwdfvj4BXWsr_mewB9EFlj60AuB0eterK3bLfzi6aBGUft_mmBfnJ96y70rUrdavjbTiJSkCs8HDT8SrtJsE49g',
      },
      {
        id: '3',
        nome: 'Robert Downey Jr.',
        papel: 'Lewis Strauss',
        foto: 'https://s2-oglobo.glbimg.com/kQQJbdEiNdPXd4xjhxbbHDQM690=/0x0:4064x2712/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2024/C/z/7rABhqS4azk9f71HXZBw/afp-20240311-34lc2wj-v1-highres-96thoscarsacademyawardspressroom.jpg',
      },
    ],
  },
    
  {
    id: '2',
    titulo: 'Interestelar',
    sinopse: 'Astronautas buscam um novo lar para a humanidade.',
    imagem: 'https://upload.wikimedia.org/wikipedia/pt/3/3a/Interstellar_Filme.png',
    descricao: 'Com a Terra em crise, a missão é encontrar outro planeta habitável.',
    elenco: [
      {
        id: '1',
        nome: 'Matthew McConaughey',
        papel: 'Cooper',
        foto: 'https://dallas.culturemap.com/media-library/matthe-mcconaughey-headshot.jpg?id=52679625&width=2000&height=1500&quality=65&coordinates=0%2C0%2C0%2C2',
      },
      {
        id: '2',
        nome: 'Anne Hathaway',
        papel: 'Brand',
        foto: 'https://www.correiobraziliense.com.br/cbradar/wp-content/uploads/2025/03/Anne-Hathaway_1742562732668-1140x570.jpg',
      },
      {
        id: '3',
        nome: 'Jessica Chastain',
        papel: 'Murph',
        foto: 'https://media.gettyimages.com/id/2156825088/pt/foto/new-york-new-york-jessica-chastain-attends-the-knife-premiere-during-the-2024-tribeca-festival.jpg?s=612x612&w=gi&k=20&c=3XAL0NGreMhENuweBPXtr-tDc2CD2AyoHfvb88PxLIw=',
      },
    ],
  },
];

export default function App() {
  const [filmeSelecionado, setFilmeSelecionado] = useState(null);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [profissao, setProfissao] = useState('');
  const [comentario, setComentario] = useState('');
  const [nivel, setNivel] = useState('baixo');
  const [area, setArea] = useState('tecnologia');
  const [interesse, setInteresse] = useState(50);
  const [conhecimento, setConhecimento] = useState(30);
  const [notificar, setNotificar] = useState(false);
  const [pesquisa, setPesquisa] = useState(true);
  const [enviado, setEnviado] = useState(false);

  function enviarFormulario() {
    setEnviado(true);
    setTimeout(() => setEnviado(false), 2000);
  }

  function renderElenco({ item }) {
    return (
      <View style={estilo.cardElenco}>
        <Image source={{ uri: item.foto }} style={estilo.fotoElenco} />
        <View>
          <Text style={estilo.nomeAtor}>{item.nome}</Text>
          <Text>{item.papel}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Filmes em Cartaz</Text>

      {filmeSelecionado ? (
        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
          <Image source={{ uri: filmeSelecionado.imagem }} style={estilo.imagemGrande} />
          <Text style={estilo.nomeFilme}>{filmeSelecionado.titulo}</Text>
          <Text style={estilo.descricao}>{filmeSelecionado.descricao}</Text>

          <View style={estilo.formulario}>
            <Text style={estilo.subtitulo}>Mostre seu interesse</Text>

            <TextInput
              placeholder="Seu nome"
              placeholderTextColor="#999"
              style={estilo.input}
              value={nome}
              onChangeText={setNome}
            />
            <TextInput
              placeholder="Seu e-mail"
              placeholderTextColor="#999"
              style={estilo.input}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              placeholder="Sua profissão"
              placeholderTextColor="#999"
              style={estilo.input}
              value={profissao}
              onChangeText={setProfissao}
            />
            <TextInput
              placeholder="Comentário adicional"
              placeholderTextColor="#999"
              style={[estilo.input, { height: 80, textAlignVertical: 'top' }]}
              multiline
              numberOfLines={4}
              value={comentario}
              onChangeText={setComentario}
            />


            <Text style={estilo.label}>Nível de interesse</Text>
            <View style={estilo.pickerWrapper}>
              <Picker
                selectedValue={nivel}
                onValueChange={(v) => setNivel(v)}
                style={estilo.picker}
                dropdownIconColor="#fff">
                <Picker.Item label="Baixo" value="baixo" />
                <Picker.Item label="Médio" value="medio" />
                <Picker.Item label="Alto" value="alto" />
              </Picker>
            </View>

            <Text style={estilo.label}>Área de atuação</Text>
            <View style={estilo.pickerWrapper}>
              <Picker
                selectedValue={area}
                onValueChange={(v) => setArea(v)}
                style={estilo.picker}
                dropdownIconColor="#fff">
                <Picker.Item label="Tecnologia" value="tecnologia" />
                <Picker.Item label="Educação" value="educacao" />
                <Picker.Item label="Saúde" value="saude" />
                <Picker.Item label="Outros" value="outros" />
              </Picker>
            </View>

            <Text style={estilo.label}>Interesse no filme: {interesse}%</Text>
            <Slider
              value={interesse}
              onValueChange={setInteresse}
              minimumValue={0}
              maximumValue={100}
              step={5}
              minimumTrackTintColor="#0af"
              thumbTintColor="#0af"
            />

            <Text style={estilo.label}>Conhecimento no tema: {conhecimento}%</Text>
            <Slider
              value={conhecimento}
              onValueChange={setConhecimento}
              minimumValue={0}
              maximumValue={100}
              step={5}
              minimumTrackTintColor="#0af"
              thumbTintColor="#0af"
            />

            <View style={estilo.switches}>
              <Text style={{ color: '#fff' }}>Receber notificações</Text>
              <Switch value={notificar} onValueChange={setNotificar} />
            </View>

            <View style={estilo.switches}>
              <Text style={{ color: '#fff' }}>Compartilhar para pesquisa</Text>
              <Switch value={pesquisa} onValueChange={setPesquisa} />
            </View>

            <TouchableOpacity style={estilo.botaoVerde} onPress={enviarFormulario}>
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>Enviar</Text>
            </TouchableOpacity>
            {enviado && <Text style={{ color: '#0f0', marginTop: 10 }}>Enviado com sucesso!</Text>}
          </View>


          <Text style={estilo.subtitulo}>Elenco</Text>
          <FlatList
            data={filmeSelecionado.elenco}
            keyExtractor={(item) => item.id}
            renderItem={renderElenco}
            style={estilo.listaElenco}
            contentContainerStyle={estilo.listaElencoConteudo}
            ItemSeparatorComponent={() => <View style={estilo.separador} />}
          />


          <TouchableOpacity onPress={() => setFilmeSelecionado(null)} style={estilo.botaoVoltar}>
            <Text style={{ color: 'white' }}>Voltar</Text>
          </TouchableOpacity>
        </ScrollView>
      ) : (
        <FlatList
          data={filmes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={estilo.card}>
              <Image source={{ uri: item.imagem }} style={estilo.imagem} />
              <Text style={estilo.nomeFilme}>{item.titulo}</Text>
              <Text style={estilo.descricao}>{item.sinopse}</Text>
              <TouchableOpacity onPress={() => setFilmeSelecionado(item)} style={estilo.botao}>
                <Text style={{ color: 'white' }}>Ver Detalhes</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
  },
  titulo: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  card: {
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    marginBottom: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 4,
  },
  imagem: {
    height: 160,
    borderRadius: 10,
    marginBottom: 10,
  },
  imagemGrande: {
    height: 250,
    width: '100%',
    borderRadius: 12,
    marginBottom: 10,
  },
  nomeFilme: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
    color: '#fff',
  },
  descricao: {
    textAlign: 'center',
    marginBottom: 10,
    color: '#ccc',
  },
  botao: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  botaoVoltar: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  subtitulo: {
    fontSize: 22,
    marginVertical: 10,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#1e1e1e',
    color: '#fff',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
  },
  formulario: {
    width: '100%',
    backgroundColor: '#1a1a1a',
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
  },
  label: {
    color: '#ccc',
    marginBottom: 6,
    marginTop: 10,
    fontSize: 14,
  },
  pickerWrapper: {
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
    marginBottom: 10,
  },
  picker: {
    color: '#fff',
  },
  botaoVerde: {
    backgroundColor: '#28a745',
    padding: 14,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  listaElenco: {
    width: '100%',
    marginTop: 10,
    color: '#fff',
  },
  
  listaElencoConteudo: {
    paddingVertical: 10,
    paddingBottom: 30,
  },
  
  separador: {
    height: 10,
  },
  
  cardElenco: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    padding: 12,
    borderRadius: 10,
    marginHorizontal: 4,
  },
  
  fotoElenco: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
    backgroundColor: '#333',
  },
  
  nomeAtor: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  },
  

});
