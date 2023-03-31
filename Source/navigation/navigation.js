import { createStackNavigator } from '@react-navigation/stack';
// import Routes from './router';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Images } from '../Assets/Images';
import { Colors } from '../Assets/Colors';
import { View, Dimensions, Image } from "react-native";
import First from '../First';
import Splash from '../Splash';
import Search from '../Second';



const Tab = createBottomTabNavigator();
const screenHeight = Dimensions.get('screen').height
const hideHeader = { headerShown: false };
const Stack = createStackNavigator();

export default function Navigator() {




    const BottomTabNavigator = () => {
        return (
            <Tab.Navigator initialRouteName='DashStack' backBehavior='history'
                screenOptions={{
                    tabBarStyle: { backgroundColor: Colors.bgGreyColor, height: screenHeight * .10 },
                    tabBarActiveTintColor: Colors.navyBlue,
                    tabBarInactiveTintColor: Colors.red,
                    tabBarLabelStyle: { fontSize: 12, bottom: '11%' },
                }}>

                <Tab.Screen name="Uni" component={First} options={{
                    tabBarLabel: 'First',
                    headerShown: false,
                    tabBarIcon: ({ focused, color }) => (
                        <View style={{ height: 47, width: 47, justifyContent: 'center', alignItems: 'center', backgroundColor: focused ? Colors.bgWhite : Colors.bgGreyColor, borderRadius: 10 }}>
                            <Image source={focused ? Images.uniFill : Images.uni} resizeMode='contain' style={{ width: '70%', height: '70%' }} tintColor={color} />
                        </View>
                    )
                }} />

                <Tab.Screen name="Search" component={Search} options={{
                    tabBarLabel: 'Second',
                    headerShown: false,
                    tabBarIcon: ({ focused, color }) => (
                        <View style={{ height: 47, width: 47, justifyContent: 'center', alignItems: 'center', backgroundColor: focused ? Colors.bgWhite : Colors.bgGreyColor, borderRadius: 10 }}>
                            <Image source={Images.search} resizeMode='contain' style={{ width: '65%', height: '65%' }} tintColor={color} />
                        </View>
                    )
                }} />


            </Tab.Navigator>
        )
    }

    const AppStack = () => {
        return (
            <Stack.Navigator initialRouteName='Splash' screenOptions={hideHeader} >
                <Stack.Screen name='Splash' component={Splash} />
                <Stack.Screen name='BottomTabs' component={BottomTabNavigator} />
            </Stack.Navigator>
        )
    }

    return (

        <AppStack />
    )
};