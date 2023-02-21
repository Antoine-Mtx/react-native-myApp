import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomePage } from "../sections/HomePage";
import { Image } from "react-native";
import { SecondTab } from "../sections/SecondTab";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "black",
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Image
              style={{ width: 24, height: 24 }}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/25/25694.png",
              }}
            />
          ),
        }}
        name="Accueil"
        component={HomePage}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Image
              style={{ width: 24, height: 24 }}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/25/25694.png",
              }}
            />
          ),
        }}
        name="Autre"
        component={SecondTab}
      />
    </Tab.Navigator>
  );
}
