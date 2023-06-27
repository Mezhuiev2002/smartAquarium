import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import TimePicker from '../components/TimePicker'
import QuantityPicker from '../components/QuantityPicker'
import styled from 'styled-components/native'

const TitleText = styled.Text`
    color: black;
    font-size: 22px;
    font-weight: 700;
`

const FishFeed = () => {
  return (
    <View style={[styles.container]}>
      <TitleText>Оберіть час годування</TitleText>
      <TimePicker />
      <TitleText>Оберіть кількість порцій</TitleText>
      <QuantityPicker />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bcd2f0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default FishFeed