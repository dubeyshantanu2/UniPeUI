import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

export default function HomeTabNavigator() {
    return (

        <Tab.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ size, color }) => (
                    <Ionicons name="home-outline" size={size} color={color} />
                ),
            }} />
            <Tab.Screen name="Documents" component={HomeScreen} options={{
                tabBarLabel: 'Documents',
                tabBarIcon: ({ size, color }) => (
                    <Ionicons name="document-text-outline" size={size} color={color} />
                ),
            }} />
            <Tab.Screen name="Benefits" component={HomeScreen} options={{
                tabBarLabel: 'Benefits',
                tabBarIcon: ({ size, color }) => (
                    <Ionicons name="clipboard-outline" size={size} color={color} />
                ),
            }} />
            <Tab.Screen name="Banking" component={HomeScreen} options={{
                tabBarLabel: 'Banking',
                tabBarIcon: ({ size, color }) => (
                    <Ionicons name="logo-usd" size={size} color={color} />
                ),
            }} />
            {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
        </Tab.Navigator>

    );
}