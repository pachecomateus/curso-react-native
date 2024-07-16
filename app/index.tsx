import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, StatusBar, Alert } from "react-native";
import { styles } from "./styles";
import Participant from "../src/components/Participant";

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState("")

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert("Erro", "Já existe um participante com esse nome.");
    }

    setParticipants(prevState => [...prevState, participantName])
    setParticipantName("")
  }

  function handleParticipantRemove(name: string) {

    Alert.alert("Remover participante", `Tem certeza que deseja remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: "Não",
        style: "cancel"
      }
    ]);
  }

  return (
    <>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="#131016"
      />
      <View style={styles.container}>
        <Text style={styles.eventName}>
          Nome do evento
        </Text>
        <Text style={styles.eventDate}>
          Sexta, 4 de Setembro de 2023
        </Text>

        <View style={styles.form}>
          <TextInput 
            style={styles.input}
            placeholder="Nome do participante"
            placeholderTextColor="#6B6B6B"
            onChangeText={setParticipantName}
            value={participantName}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleParticipantAdd}
          >
            <Text style={styles.buttonText}>
              +
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={participants}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Participant
              key={item}
              name={item}
              onRemove={() => handleParticipantRemove(item)} 
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>Nenhum participante. Adicione participantes a lista.</Text>
          )}
        />
      </View>
    </>
  );
}