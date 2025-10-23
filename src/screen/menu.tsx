import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/menu";
import Header from "../componentes/Header";
import TabsNavigation from "../componentes/TabsNavegation";

export default function Menu() {
  return (
    <View style={styles.background}>
      <Header />
      <View style={styles.mapMock}>
      
        <Text style={styles.mapMockText}>Mapa indisponível</Text>
        <Text style={styles.mapMockText}>
          A chave da API do Google Maps não foi encontrada.
        </Text>
        <Text style={styles.mapMockText}>
          Adicione NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ao seu ambiente.
        </Text>
      </View>

      
      <TouchableOpacity style={styles.sosButton}>
        <Ionicons name="alert" size={28} color="#fff" />
        <Text style={styles.sosText}>SOS</Text>
      </TouchableOpacity>

      <TabsNavigation />
    </View>
  );
}