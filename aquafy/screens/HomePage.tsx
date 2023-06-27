import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import CustomModal from '../components/ModalPopup';
import ChooseColor from '../components/ChooseColor';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchData } from '../store/reducers/getData';

const Main = styled.View`
  display: flex;
  flex-direction: column;
`

const TopBar = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const TopSide = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const TopText = styled.Text`
  font-size: 24px;
  font-weight: 500;
  min-width: 80px;
`

const TitleText = styled.Text`
  font-size: 32px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 5%;
`

const Logo = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 10px;
`
const ImageMain = styled.Image`
  width: 50px;
  height: 50px;
  margin-left: 20px;
  margin-right: 20px;
`

const MyButton = styled.TouchableOpacity`
  background-color: black;
  width: 90%;
  height: 185px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin: 10px 0px 10px 0px;
`

const ColorButton = styled.TouchableOpacity`
  background-color: #ff0000c7;
  width: 80px;
  height: 80px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin: 10px 0px 10px 0px;
`

const MyButtons = styled.View`
  align-items: center;
  margin: 10% 0 10% 0;
`

const ButtonTitle = styled.Text`
  font-weight: 800;
`

export default function HomePage() {
  const [filterButton, setFilterButton] = useState(false)
  const [tempButton, setTempButton] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useAppDispatch()
  const {data, status} = useAppSelector(state => state.dataReducer) 

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const timeFetch = () => {
    setInterval(()=> {
      dispatch(fetchData())
      console.log('fpfpfpf')
    }, 5000)
  }

  useEffect(()=> {
    dispatch(fetchData())
    timeFetch()
  }, [])
  

  

  return (
    <SafeAreaProvider>
      <SafeAreaView style = {[styles.container]}>
        <Main>
          <TopBar>
            <TopSide>
              <ImageMain source={require('../assets/water-temperature.png')}/>
              <TopText>{data?.temperature} &#8451;</TopText>
            </TopSide>
            <TopSide>
              <TopText>{data?.level}</TopText>
              <ImageMain source={require('../assets/water-level.png')}/>
            </TopSide>
          </TopBar>
          <StatusBar style="auto" />
          <MyButtons>
            <MyButton onPress={()=> setFilterButton(!filterButton)}>
              <ButtonTitle style={[styles.buttonText]}>{filterButton ? 'Увімкнути фільтр' : 'Вимкнути фільтр'}</ButtonTitle>
            </MyButton>
            <MyButton onPress={()=> setTempButton(!tempButton)}>
              <ButtonTitle style={[styles.buttonText]}>{tempButton ? 'Увімкнути підігрів' : 'Вимкнути підігрів'}</ButtonTitle>
            </MyButton>
            <MyButton onPress={openModal}>
              <ButtonTitle style={[styles.buttonText]} >Обрати колір</ButtonTitle>
            </MyButton>
            <CustomModal isVisible={isModalVisible} onClose={closeModal} child = {<ChooseColor/>} />
          </MyButtons>
          {/* <TitleText>Обрати колір підсвітки</TitleText>
          <TopBar>
            <ColorButton></ColorButton>
            <ColorButton style={{backgroundColor: '#00df00'}}></ColorButton>
            <ColorButton style={{backgroundColor: '#0096FF'}}></ColorButton>
            <ColorButton style={{backgroundColor: '#fff4cf'}}></ColorButton>
          </TopBar> */}
        </Main>
      </SafeAreaView>
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bcd2f0',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 24
  },
});
