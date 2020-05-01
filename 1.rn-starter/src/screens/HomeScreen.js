import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there</Text>
      <Button
        title="Go to components demo"
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title="Go to list demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="Go to image screen"
        onPress={() => navigation.navigate('Image')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
