import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import SplashScreen from '../../assets/image/splashScreen.svg'; // SVG faylini to'g'ri import qilish

type OnboardingScreen1Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Onboarding'>;
};

export default function OnboardingScreen1({ navigation }: OnboardingScreen1Props) {
  return (
    <View style={styles.container}>
      <SplashScreen width="100%" height="100%" style={styles.bg} /> {/* SVG ni ko'rsatish */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  content: {
    flex: 1,
    paddingTop: 59,
    paddingBottom: 65,
    paddingHorizontal: 46,
    justifyContent: 'space-between',
    position: "absolute", // Bu joyni rasmning ustida ko'rsatish uchun
    zIndex: 1,
  },
  title: {
    fontSize: 38,
    textAlign: 'center',
    color: "#FAFAFA",
    zIndex: 2,
  },
  button: {
    backgroundColor: "#371B34",
    paddingVertical: 20,
    paddingHorizontal: 70,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: "#FAFAFA",
    fontSize: 16,
    fontWeight: 'bold',
  },
  bg: {
    position: "absolute",
    top: 0,
    left: 0,
  },
});
