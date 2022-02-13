import React from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Community = () => {
  return (
    <View>
      <ImageBackground
        source={require("../../assets/community.png")}
        resizeMode="stretch"
        style={{
          marginTop: 35,
          width: "100%",
          height: 200,
          justifyContent: "center",
          alignItems: "center",
        }}
      ></ImageBackground>
      <View style={{ width: "100%", height: "40%", marginTop: 10 }}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.item}>
            <View style={styles.detailItem}>
              <Ionicons
                name={"clipboard-outline"}
                size={25}
                color={"#4792e6"}
              />
              <Text style={styles.text}>Hóa Đơn</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <View style={styles.detailItem}>
              <Ionicons
                name={"chatbox-ellipses-outline"}
                size={25}
                color={"#4792e6"}
              />
              <Text style={styles.text}>Phản Hồi</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <View style={styles.detailItem}>
              <Ionicons name={"cash-outline"} size={25} color={"#4792e6"} />
              <Text style={styles.text}>Dịch Vụ</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.item}>
            <View style={styles.detailItem}>
              <Ionicons
                name={"clipboard-outline"}
                size={25}
                color={"#4792e6"}
              />
              <Text style={styles.text}>Tiện Ích</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <View style={styles.detailItem}>
              <Ionicons name={"chatbox-outline"} size={25} color={"#4792e6"} />
              <Text style={styles.text}>Giao Tiếp</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <View style={styles.detailItem}>
              <Ionicons
                name={"car-sport-outline"}
                size={25}
                color={"#4792e6"}
              />
              <Text style={styles.text}>Bãi Đỗ Xe</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "50%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 5,
  },
  item: {
    width: "30%",
    height: "100%",
    backgroundColor:'#ffffff',
    borderRadius: 15,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
  detailItem: {
    width: "100%",
    height: "100%",
    borderWidth: 1,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Community;
