import { View, Text, ScrollView, Button } from "react-native"
import {createTransition, SlideLeft} from 'react-native-transition'

const Transition = createTransition(SlideLeft);

export default function CustomerList() {
    this.switch = () => {
        Transition.show(
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text>This is another view</Text>
          </View>
        );
      }
    return (
          <Transition>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text>This the initial View</Text>
          <Button title="Press to Switch" onPress={this.switch} />
        </View>
      </Transition>
        )
}