import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Personal = () => {
  var status = 0;
  var caret = "caret-forward-outline";
  function change() {
    {
      status === 1
        ? ((status = 0), (caret = "caret-down-outline"))
        : ((status = 1), (caret = "caret-forward-outline"));
    }
  }
  return (
    <View>
      <ImageBackground
        source={require("../../assets/backPer.png")}
        resizeMode="stretch"
        style={{
          width: "100%",
          height: 200,
          alignItems: "center",
          justifyContent: "center",
        }}
        imageStyle={{ opacity: 0.4 }}
      >
        <View
          style={{
            width: "80%",
            height: 180,
            justifyContent: "flex-end",
          }}
        >
          <View style={{ height: 70, flexDirection: "row" }}>
            <Image source={require("../../assets/man.png")} />
            <View style={{ paddingTop: 7 }}>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                {"   "}
                User: Nguyễn Văn A
              </Text>
              <Text style={{ fontWeight: "bold" }}>
                {"    "}Meyhome ID: 123456
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.container}>
        <Ionicons
          name={"information-circle-outline"}
          size={25}
          color={"#DAE121"}
        />
        <Text style={styles.text}>Thông tin cá nhân</Text>
        <TouchableOpacity onPress={() => change()}>
          <Ionicons name={caret} size={25} color={"gray"} />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Ionicons name={"lock-closed-outline"} size={25} color={"#00921D"} />
        <Text style={styles.text}>Bảo mật tài khoản</Text>
        <TouchableOpacity onPress={() => change()}>
          <Ionicons name={caret} size={25} color={"gray"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    paddingTop: 10,
    marginTop: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    borderWidth: 1,
    borderColor: "#e3e6e8",
  },
  text: {
    paddingTop: 3,
    fontWeight: "bold",
  },
});

export default Personal;
