import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./src/screens/HomeScreen";
import Personal from "./src/screens/Personal";
import Community from "./src/screens/Community";
import News from "./src/screens/News";

const Tab = createBottomTabNavigator();

function MyTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (focused) color = "#4792e6";
          if (route.name === "Home") {
            iconName = focused ? "home-sharp" : "home-outline";
          } else if (route.name === "Tin Tức") {
            iconName = focused ? "newspaper" : "newspaper-outline";
          } else if (route.name === "Cộng Đồng") {
            iconName = focused ? "globe-sharp" : "globe-outline";
          } else {
            iconName = focused ? "person-sharp" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#000020",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen options={{headerShown:false}} name="Tin Tức" component={News} />
      <Tab.Screen options={{headerShown:false}} name="Cộng Đồng" component={Community} />
      <Tab.Screen name="Cá Nhân" component={Personal} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTab/>
    </NavigationContainer>
  );
}