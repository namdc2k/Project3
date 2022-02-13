import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

function List() {
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getNews = async () => {
    try {
      const response = await fetch(
        "https://api.npoint.io/e40dda44d6b27f4155fb"
      );
      const json = await response.json();
      setData(json.news);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <View style={{ flex: 1, paddingLeft: 20, paddingRight: 20 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Details", {
                  detail: item.detail,
                })
              }
            >
              <View style={styles.container}>
                <Image
                  style={styles.imageStyle}
                  source={{ uri: item.url }}
                />
                <Text style={{ fontSize: 16,textAlign: "center" }}> {item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

function Details({ route }) {
  const { detail } = route.params;
  return (
    <View>
      <Text style={{ fontSize: 20, padding: 20 }}>{detail}</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();
function News() {
  return (
    <Stack.Navigator
      initialRouteName="News"
    >
      <Stack.Screen name="News" component={List} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    paddingBottom: 1,
    borderColor: "red",
    marginTop: 5,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle:{
    width: "100%",
    height: "80%",
    resizeMode: "cover",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  }
});
export default News;
