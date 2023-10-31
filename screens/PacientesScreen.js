import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

function PacientesScreen() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    async function loadPatients() {
      try {
        const savedPatients = await AsyncStorage.getItem("patients");
        if (savedPatients !== null) {
          setPatients(JSON.parse(savedPatients));
        }
      } catch (error) {
        console.error("Error loading patients data:", error);
      }
    }

    loadPatients();
  }, []);

  const savePatientsToStorage = async (updatedPatients) => {
    try {
      await AsyncStorage.setItem('patients', JSON.stringify(updatedPatients));
    } catch (error) {
      console.error('Error saving patients data:', error);
    }
  };

  const handleAddPatient = () => {
    // Generate a unique ID for the new patient (you can use a library like uuid)
    const newPatientId = Math.random().toString(36).substr(2, 9);
    const newPatient = { id: newPatientId, name: `Patient ${newPatientId}` };

    const updatedPatients = [...patients, newPatient];
    setPatients(updatedPatients);

    savePatientsToStorage(updatedPatients);
  };

  const handleDeletePatient = (patientId) => {
    // Filter out the deleted patient from the list
    const updatedPatients = patients.filter(
      (patient) => patient.id !== patientId,
    );
    setPatients(updatedPatients);

    savePatientsToStorage(updatedPatients);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pacientes Screen</Text>
      <FlatList
        data={patients}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.patientItem}>
            <Text style={styles.patientName}>{item.name}</Text>
            <TouchableOpacity
              style={styles.deleteButton}
              a
              onPress={() => handleDeletePatient(item.id)}
            >
              <FontAwesome name="trash" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddPatient}>
        <Text style={styles.addButtonText}>Add Patient</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  patientItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    elevation: 2,
  },
  patientName: {
    flex: 1,
    fontSize: 18,
    marginRight: 8,
  },
  deleteButton: {
    padding: 8,
  },
});

export default PacientesScreen;
