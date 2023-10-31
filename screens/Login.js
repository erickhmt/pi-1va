import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/nexamind-text-logo.png")}
        style={styles.logo}
      />
      <Text style={styles.welcomeText}>
        <Text style={styles.boldText}>Bem-vindo de Volta!</Text> Acesse sua
        conta para continuar a otimização da sua prática clínica. Estamos
        felizes em tê-lo conosco novamente!
      </Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.formInput}
          placeholder="Usuário"
          //   onChangeText={formik.handleChange('username')}
          //   value={formik.values.username}
          //   onBlur={formik.handleBlur('username')}
        />
        <TextInput
          style={[styles.formInput, styles.passwordField]}
          placeholder="Senha"
          // onChangeText={formik.handleChange('password')}
          // value={formik.values.password}
          // onBlur={formik.handleBlur('password')}
          secureTextEntry
        />
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            navigation.navigate("Home");
          }}
          //   disabled={!formik.isValid}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Não possui uma conta?</Text>
          <TouchableOpacity>
            <Text style={styles.signUpLink}>Registre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0", // gray.50 equivalent
  },
  logo: {
    height: 65,
    width: 200, // Adjust as needed
    resizeMode: "contain",
  },
  welcomeText: {
    fontSize: 14,
    color: "#4a5568", // gray.600 equivalent
    textAlign: "center",
    marginBottom: 20,
  },
  formContainer: {
    borderRadius: 8,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    padding: 20,
    width: "90%",
    maxWidth: 400,
  },
  formLabel: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  formInput: {
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },
  passwordToggle: {
    marginLeft: "auto",
  },
  passwordIcon: {
    fontSize: 20,
  },
  forgotPassword: {
    color: "#3182ce", // blue.600 equivalent
    textAlign: "right",
  },
  loginButton: {
    backgroundColor: "#2894d2",
    padding: 15,
    borderRadius: 4,
    alignItems: "center",
  },
  loginButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  signUpText: {
    fontSize: 14,
    marginRight: 5,
    color: "#4a5568", // gray.600 equivalent
  },
  signUpLink: {
    color: "#3182ce", // blue.600 equivalent
  },
});

export default LoginScreen;
