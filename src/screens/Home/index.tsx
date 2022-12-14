import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

import { Participant } from '../../components/Participant';

export function Home() {
    const participants = ['teste1', 'teste2', 'teste3', 'teste4', 'teste5',
        'teste6', 'teste7', 'teste8', 'teste9', 'teste10'];

    function handleParticipantAdd() {
        if (participants.includes('teste1')) {
            return Alert.alert("Particpante existente", "Já existe um participante com esse nome na lista!")
        }
    }

    function handleParticipantRemove(name: string) {
        Alert.alert("Remover", `Desejar remover o participante ${name} ?`, [
            {
                text: 'Sim',
                onPress: () => Alert.alert('Deletado')
            },
            {
                text: 'Cancelar',
                style: 'cancel',
            }
        ]);
        
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do Evento
            </Text>
            <Text style={styles.eventDate}>
                Terça, 26 de setembro de 2022.
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participantes"
                    placeholderTextColor="#6b6b6b"
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
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
                        onRemove={() => handleParticipantRemove(item)} />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou no evento ainda? Adicione participantes a sua lista de presenças.
                    </Text>
                )}
            />
        </View>
    );
}