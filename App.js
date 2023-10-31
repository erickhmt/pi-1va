import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View } from "react-native";

import { ConversationsProvider } from "./ConversationsContext";
import Home from "./screens/Home";
import Login from "./screens/Login";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ConversationsProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            {/* <Stack.Screen name="Conversas" component={ListConversations} />
            <Stack.Screen name="ViewConversation" component={ViewConversation} />
            <Stack.Screen name="AddGroup" component={AddGroup} /> */}
            {/* <StatusBar style="auto" /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </ConversationsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
