import React from 'react';
import {DarkTheme, NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {TypeRootStackParamList, TypeRootTabParamList} from "./types";
import Dialogs from "../screens/Dialogs";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import TabBarIcon from "../components/ui/TabBarIcon";
import Auth from "../screens/Auth";
import {linking} from "./linkConfig";
import NotFound from "../screens/NotFound";

const Stack = createNativeStackNavigator<TypeRootStackParamList>()
const Tab = createBottomTabNavigator<TypeRootTabParamList>()

const Navigation = () => {
    const isAuth = true
    return (
        <NavigationContainer linking={linking} >
            <Stack.Navigator>
                {isAuth ?
                    <>
                        <Stack.Screen name={'Home'} component={BottomNavigation} options={{ title: '', headerShown: false}}/>
                        <Stack.Screen name={'NotFound'} component={NotFound} options={{ title: ''}}/>
                    </>
                        :
                    <Stack.Screen name={'Auth'} component={Auth} options={{headerShown: false}}/>}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const BottomNavigation = () => {
    return (
        <Tab.Navigator  initialRouteName={'Dialogs'} screenOptions={{tabBarActiveTintColor: '#070928', tabBarInactiveTintColor: '#8d8d8d'}}>
            <Tab.Screen name={'Profile'} component={Profile} options={({navigation}) => ({tabBarIcon: ({color}) => <TabBarIcon name={"home"} color={color} />, tabBarLabel: ''})}/>
            <Tab.Screen name={'Dialogs'} component={Dialogs} options={({navigation}) => ({tabBarIcon: ({color}) => <TabBarIcon name={"message1"} color={color} />, })}/>
            <Tab.Screen name={'Settings'} component={Settings} options={({navigation}) => ({tabBarIcon: ({color}) => <TabBarIcon name={"setting"} color={color} />, })}/>
        </Tab.Navigator>
    )
}



export default Navigation;
