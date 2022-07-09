import React, { useState, useEffect, useMemo, useReducer } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from "./src/navigation/AuthNavigator";
import AppNavigator from "./src/navigation/AppNavigator";
import { AuthContext } from './src/components/context';

const App = () => {

  const initialLoginState = {
    isLoading: true,
    mobile: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'INIT':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          mobile: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          mobile: null,
          userToken: null,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState)

  const authContext = useMemo(() => ({

    signIn: async (mobile, code) => {
      let userToken;
      userToken = null;
      if (mobile !== null && code !== null) {
        try {
          userToken = 'dvcdsvds';
          await AsyncStorage.setItem('userToken', userToken)
        } catch (e) {
          console.log(e);
        }
      }
      dispatch({ type: 'LOGIN', id: mobile, token: userToken });
    },

    signOut: async () => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
  }), []);

  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      // console.log("user token init", userToken)
      dispatch({ type: 'INIT', token: userToken })
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" color={"blue"} />
      </View>
    )
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer >
        {
          loginState.userToken === null ?
            <AuthNavigator />
            :
            <AppNavigator />
        }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;