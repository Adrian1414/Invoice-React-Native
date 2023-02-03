import {View, TouchableOpacity, StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function FloatingButton() {
    return (
        <View>
        <TouchableOpacity
      style={ styles.button}
    >
     <AntDesign name="plus" size={30} color="white" />
     
    </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    button: {
     
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        position: 'absolute',
        bottom: 90,
        right: 10,
        height: 60,
        backgroundColor: '#00d9ff',
        borderRadius: 100,
    }
})