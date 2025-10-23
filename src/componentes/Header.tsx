import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../stylesComponentes/Header";

export default function Header() {
  return (
    <View style={styles.headerView}>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="#888" />
        <TextInput
          placeholder="Para onde vamos?"
          placeholderTextColor="#888"
          style={styles.input}
        />
      </View>
      
      <TouchableOpacity style={styles.profileButton}>
        <Ionicons name="person-outline" size={24} color="#444" />
      </TouchableOpacity>
    </View>
  );
}