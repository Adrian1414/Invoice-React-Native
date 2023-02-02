import { Text, View, ScrollView, StyleSheet } from "react-native"

export default function Home () {
    return (
        <ScrollView>
            <View style={styles.firstSect}>
            <Text> layer 1 </Text>
            </View>
            <View style={styles.secondSect} >
                <Text>layer 2</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    firstSect: {
        height: 200,
        backgroundColor: 'blue'
    },
    secondSect: {
        height: 700,
        backgroundColor: 'red'
    }
})