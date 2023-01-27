import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from "./navigation/Navigation";
import {NativeSafeAreaProvider} from "react-native-safe-area-context/lib/typescript/NativeSafeAreaProvider";
import {SafeAreaProvider} from "react-native-safe-area-context";

export default function App() {
  return (
      <SafeAreaProvider>
        <Navigation />
        <StatusBar />
      </SafeAreaProvider>
  );
}
