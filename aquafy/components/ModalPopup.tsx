import { View, Text, Button } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal';
import styled from 'styled-components/native';

const MyText = styled.Text`
    color: white;
`
const ModalContetn = styled.View`
    width: 100%;
    height: 60%;
    background-color: #bcd2f0;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const MyCloseButton = styled.TouchableOpacity`
    width: 100px;
    height: 30px;
    background-color: black;
    border-radius: 20%;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`
type ModalProps = {
    isVisible: boolean;
    onClose: () => void;
    child: any;
};



const CustomModal: React.FC<ModalProps> = ({ isVisible, onClose, child }) => {
    return (
        <Modal isVisible={isVisible} onBackdropPress={onClose}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
                <ModalContetn>
                    {child}
                    <MyCloseButton  onPress={onClose}>
                        <MyText>Choose</MyText>
                    </MyCloseButton>
                </ModalContetn>
            </View>
        </Modal>
    );
};

export default CustomModal