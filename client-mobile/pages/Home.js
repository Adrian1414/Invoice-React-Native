import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Animated,
  useWindowDimensions,
  SafeAreaView,
} from "react-native";
import { useRef, useState } from "react";

import { Searchbar } from "react-native-paper";
import { Avatar, Card, IconButton } from "react-native-paper";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const images = [
    "http://baitulmaqdis.com/wp/wp-content/uploads/2014/08/Senyum-pintu-BM.jpg",
    "https://www.maesahotel.com/wp-content/uploads/2020/04/Mengeluh-Pekerjaan.jpg",
    "https://tse3.mm.bing.net/th?id=OIP.itZOmLOpqJXEW3D64EX60wHaE8&pid=Api&P=0",
  ];

  const scrollX = useRef(new Animated.Value(0)).current;

  const { width: windowWidth } = useWindowDimensions();

  return (
    <ScrollView>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      <SafeAreaView style={styles.container}>
        <View style={styles.scrollContainer}>
          <ScrollView
            horizontal={true}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ])}
            scrollEventThrottle={1}
          >
            {images.map((image, imageIndex) => {
              return (
                <View
                  style={{ width: windowWidth, height: 250 }}
                  key={imageIndex}
                >
                  <ImageBackground
                    source={{ uri: image }}
                    style={styles.carousel}
                  ></ImageBackground>
                </View>
              );
            })}
          </ScrollView>
          <View style={styles.indicatorContainer}>
            {images.map((image, imageIndex) => {
              const width = scrollX.interpolate({
                inputRange: [
                  windowWidth * (imageIndex - 1),
                  windowWidth * imageIndex,
                  windowWidth * (imageIndex + 1),
                ],
                outputRange: [8, 10, 8],
                extrapolate: "clamp",
              });
              return (
                <Animated.View
                  key={imageIndex}
                  style={[styles.normalDot, { width, height: 8 }]}
                />
              );
            })}
          </View>
        </View>
      </SafeAreaView>

      <Text style={styles.InvoiceText}> Invoices</Text>

      <View style={styles.secondSect}>
        <TouchableOpacity>
          <Card.Title
            title="Sumarno"
            style={styles.card}
            subtitle="Rp.20.000"
            left={(props) => (
              <Avatar.Icon {...props} color="white" icon="calendar" />
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
        <TouchableOpacity>
          <Card.Title
            title="Sumarno"
            style={styles.card}
            subtitle="Rp.20.000"
            left={(props) => (
              <Avatar.Icon {...props} color="white" icon="calendar" />
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

        <TouchableOpacity>
          <Card.Title
            title="Sumarno"
            style={styles.card}
            subtitle="Rp.20.000"
            left={(props) => (
              <Avatar.Icon {...props} color="white" icon="calendar" />
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

        <TouchableOpacity>
          <Card.Title
            title="Sumarno"
            style={styles.card}
            subtitle="Rp.20.000"
            left={(props) => (
              <Avatar.Icon {...props} color="white" icon="calendar" />
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

        <TouchableOpacity>
          <Card.Title
            title="Sumarno"
            style={styles.card}
            subtitle="Rp.20.000"
            left={(props) => (
              <Avatar.Icon {...props} color="white" icon="calendar" />
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
  firstSect: {
    height: 200,
    backgroundColor: "blue",
  },
  secondSect: {
    height: 700,
    backgroundColor: "white",
  },
  card: {
    backgroundColor: "white",
    marginBottom: 12,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  InvoiceText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 20,
    paddingBottom: 10,
  },

  scrollContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  carousel: {
    flex: 1,
    // marginVertical: 4,
    // marginHorizontal: 16,
    borderRadius: 5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },

  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 3,
    backgroundColor: "silver",
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
