import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

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
      <Button
        title="Go to counter screen"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="Go to color screen"
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title="Go to square screen"
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        title="Go to text screen"
        onPress={() => navigation.navigate('Text')}
      />
      <Button
        title="Go to box screen"
        onPress={() => navigation.navigate('Box')}
      />
      <Button
        title="Go to layout task screen"
        onPress={() => navigation.navigate('LayoutTask')}
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
