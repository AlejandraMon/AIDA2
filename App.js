
import React from "react";
import { Dashboard, DetectionScreen, ProfileScreen, ResultScreen, WearableScreen, SuggestionsScreen , EditProfileScreen, DataUser,InfoScreen, DetectionAScreen, DetectionTScreen} from "./src/screens";
import Router from './src/routes';
import {View, ActivityIndicator} from 'react-native';
import { AuthContext } from "./src/helpers/context";
import { NavigationContainer } from "@react-navigation/native";
import {DrawerContent} from './src/components/menu';
import { createDrawerNavigator } from "@react-navigation/drawer";
import AsyncStorage from 'react-native';


const Drawer = createDrawerNavigator();

export default function App(){
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };
  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };
  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async(foundUser) => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      const userToken = foundUser[0].userToken;
      const userName = foundUser[0].username;
      const id = foundUser[0].id;
      console.log(userName)
      console.log(id)
      
      try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async() => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      // setUserToken('fgkj');
      // setIsLoading(false);
    },
    toggleTheme: () => {
      setIsDarkTheme( isDarkTheme => !isDarkTheme );
    }
    
  }), []);

  React.useEffect(() => {
    setTimeout(async() => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);

  if( loginState.isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }
  return(
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      { loginState.userToken !== null ? (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="Inicio" component={Dashboard} />
          <Drawer.Screen name="Detecci??n de ECV" component={DetectionScreen} />
          <Drawer.Screen name="Detecci??n de arritmia" component={DetectionAScreen} />
          <Drawer.Screen name="Detecci??n de taquicardia" component={DetectionTScreen} />
          <Drawer.Screen name="Datos" component={DataUser} />
          <Drawer.Screen name="Perfil" component={ProfileScreen} />
          <Drawer.Screen name="Resultados" component={ResultScreen} />
          <Drawer.Screen name="Dispositivos" component={WearableScreen} />
          <Drawer.Screen name="Sugerencias" component={SuggestionsScreen} />
          <Drawer.Screen name="Editar perfil" component={EditProfileScreen} />
          <Drawer.Screen name="Acerca de" component={InfoScreen} />
        </Drawer.Navigator>
      )
    :
      <Router></Router>
    }
    </NavigationContainer>
    </AuthContext.Provider>
  );
}
