import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const QuantityPicker: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < 5) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleDecrease} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <View style={styles.quantityContainer}>
        <Text style={styles.quantityText}>{quantity}</Text>
      </View>
      <TouchableOpacity onPress={handleIncrease} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    width: 70,
    height: 70,
    marginHorizontal: 5,
    backgroundColor: 'black',
    borderRadius: 50,
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  quantityContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20, // Adjust the spacing here
    marginRight: 20, // Adjust the spacing here
  },
  quantityText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default QuantityPicker;
