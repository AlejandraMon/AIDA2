import React, { useState, useEffect } from "react";
import { UserContext } from "./context";
import { AsyncStorage } from "react-native";

export function UserProvider({ value, children }) {
  const [user, setUser] = useState(null);

  const loadUser = (user) => {
    setUser(user);
  }

  useEffect(() => {
    const recoverUserFromStorage = async () => {
      return await AsyncStorage.getItem("loggedUser")
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
