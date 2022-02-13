import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");
const height = width * 0.5; //50%

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    fontWeight: "bold",
    paddingTop: 10,
  },
  container1: {
    alignItems: "center",
    fontWeight: "bold",
  },
  imagesStyle: {
    borderRadius: 10,
  },
  imagesStyle2: {
    width: "100%",
    height: width * 0.29,
    marginTop: 20,
  },
  imagesStyle1: {
    width: "100%",
    height: width * 0.37,
    marginTop: 20,
  },
  imagesStyle3: {
    borderRadius: 20,
  },
  button: {
    backgroundColor: "#859a9b",
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: "#303838",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  op: {
    width: width * 0.9,
    height: 95,
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 10,
  },
  opItem: {
    paddingTop: 5,
    width: 80,
    height: 80,
    alignItems: "center",
  },
  opImages: {
    width: width * 0.225 * 0.6,
    height: width * 0.225 * 0.6,
    resizeMode: "cover",
  },
  textScreen: {
    paddingLeft: 15,
    paddingTop: 10,
    fontWeight: "bold",
  },
});

function ScrollTop() {
  return (
    <ScrollView
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      style={({ width, height }, styles.imagesStyle)}
    >
      <View>
        <Image
          style={({ resizeMode: "cover" }, styles.imagesStyle)}
          source={require("../../assets/3.png")}
        />
      </View>
      <View>
        <Image
          style={({ resizeMode: "cover" }, styles.imagesStyle)}
          source={require("../../assets/2.png")}
        />
      </View>
      <View>
        <Image
          style={({ resizeMode: "cover" }, styles.imagesStyle)}
          source={require("../../assets/1.png")}
        />
      </View>
      <View>
        <Image
          style={({ resizeMode: "cover" }, styles.imagesStyle)}
          source={require("../../assets/4.png")}
        />
      </View>
    </ScrollView>
  );
}
function Tang() {
  return (
    <ScrollView
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.imagesStyle1}
    >
      <View style={{ paddingLeft: 15, alignItems: "center" }}>
        <Image
          style={({ resizeMode: "cover" }, styles.imagesStyle3)}
          source={require("../../assets/tang1.png")}
        />
        <Text style={styles.container}> Tầng 1</Text>
      </View>
      <View style={{ paddingLeft: 15, alignItems: "center" }}>
        <Image
          style={({ resizeMode: "cover" }, styles.imagesStyle3)}
          source={require("../../assets/tang2.png")}
        />
        <Text style={styles.container}> Tầng 2</Text>
      </View>
      <View style={{ paddingLeft: 15, alignItems: "center" }}>
        <Image
          style={({ resizeMode: "cover" }, styles.imagesStyle3)}
          source={require("../../assets/tang3.png")}
        />
        <Text style={styles.container}> Tầng 3</Text>
      </View>
      <View style={{ paddingLeft: 15, alignItems: "center" }}>
        <Image
          style={({ resizeMode: "cover" }, styles.imagesStyle3)}
          source={require("../../assets/tang4.png")}
        />
        <Text style={styles.container}> Tầng 4</Text>
      </View>
    </ScrollView>
  );
}
function List() {
  return (
    <ScrollView
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.imagesStyle2}
    >
      <View style={{ paddingLeft: 15, alignItems: "center" }}>
        <Image
          style={{ resizeMode: "cover" }}
          source={require("../../assets/living1.png")}
        />
        <Text style={styles.container}>Living{"\n"}Room</Text>
      </View>
      <View style={{ paddingLeft: 15, alignItems: "center" }}>
        <Image
          style={{ resizeMode: "cover" }}
          source={require("../../assets/bed.png")}
        />
        <Text style={styles.container}>Bed Room</Text>
      </View>
      <View style={{ paddingLeft: 15, alignItems: "center" }}>
        <Image
          style={{ resizeMode: "cover" }}
          source={require("../../assets/meeting.png")}
        />
        <Text style={styles.container}>Meeting{"\n"} Room</Text>
      </View>
      <View style={{ paddingLeft: 15, alignItems: "center" }}>
        <Image
          style={{ resizeMode: "cover" }}
          source={require("../../assets/kitchen.png")}
        />
        <Text style={styles.container}>Kitchen{"\n"} Room</Text>
      </View>
      <View style={{ paddingLeft: 15, alignItems: "center" }}>
        <Image
          style={{ resizeMode: "cover" }}
          source={require("../../assets/living2.png")}
        />
        <Text style={styles.container}>Living{"\n"}room 2</Text>
      </View>
      <View style={{ paddingLeft: 15, alignItems: "center" }}>
        <Image
          style={{ resizeMode: "cover" }}
          source={require("../../assets/setting.png")}
        />
        <Text style={styles.container}>Setting{"\n"} room</Text>
      </View>
      <View style={{ paddingLeft: 15, alignItems: "center" }}>
        <Image
          style={{ resizeMode: "cover" }}
          source={require("../../assets/girls.png")}
        />
        <Text style={styles.container}>phòng con{"\n"} gái</Text>
      </View>
    </ScrollView>
  );
}
function Option() {
  return (
    <View
      style={{
        width: "100%",
        height: 100,
        paddingTop: 5,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={styles.op}>
        <ScrollView horizontal
         showsHorizontalScrollIndicator={false}
         >
          <View style={styles.opItem}>
            <Image
              style={styles.opImages}
              source={require("../../assets/smartLight.png")}
            />
            <Text style={styles.container1}>Smart light</Text>
          </View>
          <View style={styles.opItem}>
            <Image
              style={styles.opImages}
              source={require("../../assets/smartCurtain.png")}
            />
            <Text style={styles.container1}>Smart curtain</Text>
          </View>
          <View style={styles.opItem}>
            <Image
              style={styles.opImages}
              source={require("../../assets/smartAir.png")}
            />
            <Text style={styles.container1}>Smart air</Text>
          </View>
          <View style={styles.opItem}>
            <Image
              style={styles.opImages}
              source={require("../../assets/smartWater.png")}
            />
            <Text style={styles.container1}>Smart{"\n"}water</Text>
          </View>
          <View style={styles.opItem}>
            <Image
              style={styles.opImages}
              source={require("../../assets/smartSecurity.png")}
            />
            <Text style={styles.container1}> Smart{"\n"}security</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default function HomeScreen() {
  return (
    <ScrollView>
      <ScrollTop />
      <Tang />
      <Text style={styles.textScreen}>Danh sách phòng</Text>
      <List />
      <Text style={styles.textScreen}>Chức năng</Text>
      <Option />
    </ScrollView>
  );
}
