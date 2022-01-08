import React, { useState, useEffect } from "react";
import { UserContext } from "./context";
import { AsyncStorage } from "react-native";

export function UserProvider({ userInState, children }) {
  const [user, setUser] = useState(null);

  const loadUser = (user) => {
    setUser(user);
  }

  useEffect(() => {
    const recoverUserFromStorage = async () => {
      const userInStorage = await AsyncStorage.getItem("loggedUser")
      console.log({ userInStorage, userInState })
      return userInStorage || userInState
    }

    recoverUserFromStorage()
      .then(loggedUser => loadUser(loggedUser))
  }, [])

  const providerValue = {
    user,
    loadUser
  }

  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
}
