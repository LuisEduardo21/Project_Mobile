import { Text, TextInput, View } from 'react-native';
import { styles } from './styles';

export function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do Evento
            </Text>
            <Text style={styles.eventDate}>
                Terça, 26 de setembro de 2022.
            </Text>

            <TextInput
                style={styles.input}
                placeholder= "Nome do participantes"
                placeholderTextColor="#6b6b6b"
                
            />
        </View>
    );
}