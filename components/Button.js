import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonComponent = ({
  children,
  onPress
}) => (
  <TouchableOpacity
    style={styles.button}
    onPress={onPress}
  >
    <Text
      style={styles.text}
    >
      {children}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 5,
    borderColor: '#2374AB',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '50%',
    maxWidth: '90%',
    alignSelf: 'center',
    marginBottom: 8,
    marginTop: 16,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: 5,
    marginRight: 5,
    lineHeight: 42,
    fontSize: 24,
    fontWeight: '400',
    color: '#2374AB',
  }
});

export default ButtonComponent;
