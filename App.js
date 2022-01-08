
import React from "react";
import { Dashboard, DetectionScreen, ProfileScreen, ResultScreen, WearableScreen, SuggestionsScreen , EditProfileScreen, DataUser,InfoScreen, DetectionAScreen, DetectionTScreen} from "./src/screens";
import Router from './src/routes';
import {View, ActivityIndicator} from 'react-native';
import { AuthContext } from "./src/helpers/context";
import { NavigationContainer } from "@react-navigation/native";
import {DrawerContent} from './src/components/menu';
import { createDrawerNavigator } from "@react-navigation/drawer";
import AsyncStorage from 'react-native';
import { UserProvider } from "./src/contexts";


const Drawer = createDrawerNavigator();

export default function App(){
  const initialLoginState = {
    isLoading: true,
    userName: null,
    loggedUser: null,
  };
  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_USER':
        return {
          ...prevState,
          loggedUser: action.loggedUser,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          loggedUser: action.loggedUser,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          loggedUser: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          loggedUser: action.loggedUser,
          isLoading: false,
        };
    }
  };
  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async(loggedUser) => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      const userName = loggedUser.username;
      const id = loggedUser.iduser;
      console.log(userName)
      console.log(id)

      try {
        await AsyncStorage.setItem('loggedUser', loggedUser);
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'LOGIN', id: userName, loggedUser });
    },
    signOut: async() => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('loggedUser');
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
      let loggedUser;
      loggedUser = null;
      try {
        loggedUser = await AsyncStorage.getItem('loggedUser');
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'RETRIEVE_USER', loggedUser });
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
      { loginState.loggedUser !== null ? (
        <UserProvider>
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Inicio" component={Dashboard} />
            <Drawer.Screen name="Detección de ECV" component={DetectionScreen} />
            <Drawer.Screen name="Detección de arritmia" component={DetectionAScreen} />
            <Drawer.Screen name="Detección de taquicardia" component={DetectionTScreen} />
            <Drawer.Screen name="Datos" component={DataUser} />
            <Drawer.Screen name="Perfil" component={ProfileScreen} />
            <Drawer.Screen name="Resultados" component={ResultScreen} />
            <Drawer.Screen name="Dispositivos" component={WearableScreen} />
            <Drawer.Screen name="Sugerencias" component={SuggestionsScreen} />
            <Drawer.Screen name="Editar perfil" component={EditProfileScreen} />
            <Drawer.Screen name="Acerca de" component={InfoScreen} />
          </Drawer.Navigator>
        </UserProvider>
      )
    :
      <Router />
    }
    </NavigationContainer>
    </AuthContext.Provider>
  );
}
