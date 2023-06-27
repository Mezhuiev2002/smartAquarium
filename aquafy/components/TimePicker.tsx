import React, { useEffect, useMemo, useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import TimePickerModal from '@react-native-community/datetimepicker';
import styled from 'styled-components/native';
import { useAppDispatch } from '../hooks/redux';
import { fetchFood } from '../store/reducers/setFood';

const CenteredContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const ChooseButton = styled.TouchableOpacity`
  width: 180px;
  height: 60px;
  background-color: black;
  border-radius: 250%;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChooseText = styled.Text`
  color: white;
  font-size: 22px;
  font-weight: 700;
`;

const TimePicker: React.FC = () => {

  const getCurrentTime = (): Date => {
    const currentTime = new Date();
    console.log(currentTime)
    return currentTime;
  };
  const [selectedTime, setSelectedTime] = useState<Date>(getCurrentTime());
  const [isPickerVisible, setIsPickerVisible] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const showPicker = () => {
    setIsPickerVisible(true);
  };

  const hidePicker = () => {
    setIsPickerVisible(false);
  };

  const handleTimeConfirm = (event: any, time: Date | undefined) => {
    if (time) {
      setSelectedTime(time);
    }
    hidePicker();
  };

  useMemo(() => {
    console.log(selectedTime?.toLocaleTimeString())
    const timeString = selectedTime?.toLocaleTimeString();
    const timeParts = timeString.split(":");
    const hour = timeParts[0];
    const minute = timeParts[1];

    const formattedTime = `${hour}:${minute}`;
    const time = {
      "feedTime": formattedTime
    }
    dispatch(fetchFood(time))
  }, [selectedTime])

  return (
    <CenteredContainer>
      <ChooseButton onPress={showPicker}>
        <ChooseText>Обрати</ChooseText>
      </ChooseButton>
      {selectedTime && (
        <TextInput
          value={`Обраний час: ${selectedTime.toLocaleTimeString()}`}
          editable={false}
          style={{ textAlign: 'center' }}
        />
      )}
      {isPickerVisible && (
        <TimePickerModal
          value={selectedTime || new Date()}
          mode="time"
          is24Hour={true}
          display="spinner"
          onChange={handleTimeConfirm}
        />
      )}
    </CenteredContainer>
  );
};

export default TimePicker;
