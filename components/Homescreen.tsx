import React from "react";
import { Pressable, View, Text, ImageBackground } from "react-native";
import Styles from "./Styles";

interface HomeScreenProps {
  navigation: any;
}
  
  const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
      <View style={Styles.textBody}>
      <ImageBackground source={require('../assets/home.png')}  style={Styles.image}>
      <Pressable style={Styles.button} onPress={() => navigation.navigate('Weather')}>
        <Text style={{fontWeight:"600", color:"white"}}>Let's go!</Text>
      </Pressable>
      </ImageBackground>
      </View>
    );
  };
  
  export default HomeScreen;
  
  
  
  
  
  
