import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { View, Text } from "react-native";

import PacientesScreen from "./PacientesScreen";

const Tab = createBottomTabNavigator();

function DashboardScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Dashboard Screen</Text>
      <Text>Sample Content for Dashboard</Text>
    </View>
  );
}

function ConfiguracoesScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Configurações Screen</Text>
      <Text>Sample Content for Configurações</Text>
    </View>
  );
}

function Home({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: "#3182ce",
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pacientes"
        component={PacientesScreen}
        options={{
          tabBarLabel: "Pacientes",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Configurações"
        tabBarIcon
        component={ConfiguracoesScreen}
        options={{
          tabBarLabel: "Configuraçoes",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cog" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Home;
