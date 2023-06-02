import React, {useEffect, useState} from "react";
import { ActivityIndicator, View, Text, ImageBackground, Pressable, Modal, TextInput } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { RootState, AppDispatch } from "../store/store";
import { fetchWeatherData } from "../features/weatherSlice";
import { updateSteps } from "../features/stepSlice";
import Styles from "./Styles";

interface WeatherProps {
  navigation: any;
}
  
const Weather: React.FC<WeatherProps> = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [goal, setGoal] = useState<number>(10000);
    const weatherData = useSelector((state: RootState)=> state.weatherData);
    const dispatch = useDispatch<AppDispatch>();
    const stepsData = useSelector((state:RootState)=> state.steps);

    useEffect(() => {
        if (!weatherData.data) {
            dispatch(fetchWeatherData())
        }
    }, [])
    
    const updateGoal = () => {
        console.log(goal)
        setModalVisible(false);
        dispatch(updateSteps(
            {
                steps: stepsData.steps,
                goal:goal
            }
        ))
    }

    return (
        <View style={{flex:1}}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={Styles.centeredView}>
                <View style={Styles.modalView}>
                    <input
                        type="number"
                        onChange={(e) => setGoal(e.target.valueAsNumber)}
                        value={goal}
                    />
                    <Pressable onPress={updateGoal} style={Styles.buttonClose}>
                        <Text >Confirm</Text>
                    </Pressable>
                </View>
                </View>
            </Modal>
            <ImageBackground source={weatherData?.data?.main?.temp <298.5 ? require('../assets/cloudy.png') : require('../assets/sunny.png')} style={Styles.image}>
                <View style={{ padding:"20px", flex:1}}>
                        {weatherData.loading ? <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><ActivityIndicator size="large" color="#8CD6EB" /></View>: weatherData.error ? weatherData.error : weatherData.data ? <Text>
                            <View  style={{
                            flexDirection: 'column', 
                            }}>
                                <View><Text>{weatherData.data.name}</Text></View>
                                <View><Text style={{fontSize:48}}>{(weatherData.data.main.temp - 273.15).toFixed(1)}°C</Text></View>
                                
                            </View>
                        </Text> : <Text>Woops, something went wrong</Text>}
                        <View style={{margin:"auto", flex:2, justifyContent:"center", marginTop:"94px"}}>
                            <AnimatedCircularProgress
                                size={250}
                                width={25}
                                fill={(stepsData.steps/stepsData.goal)*100 <= 100 ? (stepsData.steps/stepsData.goal)*100  : 100}
                                tintColor="#4CBB17"
                                backgroundColor="rgb(171,177,186,40)">
                                {
                                    () => (
                                    <View style={{display:"flex", flexDirection:"column", alignItems: 'center', justifyContent: 'center'}}>
                                        <Text style={{fontSize:20}}>{stepsData.steps.toLocaleString() }/{stepsData.goal.toLocaleString()}</Text>
                                        <Text>steps</Text>
                                    </View>
                                    )
                                }
                                </AnimatedCircularProgress>
                        </View>
                        <Pressable style={{flex:1, margin:"auto"}} onPress={()=>{setModalVisible(true)}}>
                                <View style={Styles.buttonOpen}><Text>Set New Goal</Text></View>
                        </Pressable>
                </View>
            </ImageBackground>
        </View>
        );
};
  
export default Weather;