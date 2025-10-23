import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../stylesComponentes/TabsNavegation";

export default function TabsNavegation() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tabButton}>
        <Ionicons name="shield-checkmark" size={24} color="#f4511e" />
        <Text style={styles.tabText}>Guardião</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabButton}>
        <Ionicons name="navigate" size={24} color="#f4511e" />
        <Text style={styles.tabText}>Rotas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabButton}>
        <Ionicons name="alert-circle" size={24} color="#f4511e" />
        <Text style={styles.tabText}>Reporte</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabButton}>
        <Ionicons name="car" size={24} color="#f4511e" />
        <Text style={styles.tabText}>Estacione</Text>
      </TouchableOpacity>
    </View>
  );
}