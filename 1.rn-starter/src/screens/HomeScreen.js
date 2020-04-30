import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = props => {
  console.log(props.navigation);
  return (
    <View>
      <Text style={styles.text}>Hi there</Text>
      <Button
        title="Go to components demo"
        onPress={() => console.log('Buttom pressed')}
      />
      <TouchableOpacity
        onPress={() => console.log('Touchable opacity pressed')}
      >
        <Text>Go to list demo</Text>
        <Text>Go to list demo</Text>
      </TouchableOpacity>
    </View>

  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
