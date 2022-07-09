import React from 'react';
import { Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeTabNavigator from './HomeTabNavigator';
import { DrawerContent } from './DrawerContent';
const Drawer = createDrawerNavigator();

function LogoTitle() {
    return (
        <Image
            style={{ width: 100, height: 50, resizeMode: "contain", }}
            source={require('../../assets/g518.png')}
        />
    );
}

function AppNavigator() {
    return (
        <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />} screenOptions={{
            headerTitleAlign: 'center',
        }}>
            <Drawer.Screen name="HomeTab"
                component={HomeTabNavigator}
                options={{
                    headerTitle: (props) =>
                        <LogoTitle {...props} />
                }} />
        </Drawer.Navigator>
    )

}

export default AppNavigator;