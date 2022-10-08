import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

import { Participant } from '../../components/Participant';

export function Home() {
    function handleParticipantAdd() {
        console.log('você clicou no botão!');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do Evento
            </Text>
            <Text style={styles.eventDate}>
                Terça, 26 de setembro de 2022.
            </Text>

            <View style = {styles.form}>
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

            <Participant />
            <Participant />
        </View>
    );
}