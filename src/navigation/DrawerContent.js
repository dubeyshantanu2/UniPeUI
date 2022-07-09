import React from 'react';
import { View } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { AuthContext } from '../components/context';

export function DrawerContent(props) {

    const { signOut } = React.useContext(AuthContext);

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <DrawerItem
                    label="Home"
                />
                <DrawerItem
                    label="Logout"
                    onPress={() => { signOut() }}
                />
            </DrawerContentScrollView>
        </View>
    )
}