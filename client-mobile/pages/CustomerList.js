import { View, Text, ScrollView,  TouchableOpacity, StyleSheet } from "react-native";
import {useState} from "react";
import { Avatar, Card, IconButton } from "react-native-paper";
import { Searchbar } from "react-native-paper";

export default function CustomerList() {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <ScrollView>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <View>
        <Text style={styles.CustomersText}> Customers</Text>

        <TouchableOpacity>
          <Card.Title
            title="Sumanti  "
            style={styles.card}
            subtitle="Rp.20.000"
            left={(props) => (
              <Avatar.Icon {...props} color="white" icon="head" />
            )}
            right={(props) => (
              <IconButton
                {...props}
                icon="trash-can"
                onPress={() => console.log("pressed")}
              />
            )}
          />
        </TouchableOpacity>
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  CustomersText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  card: {
    backgroundColor: "white",
    marginBottom: 12,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
})