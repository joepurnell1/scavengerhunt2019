import { AsyncStorage } from "react-native"

export async function storeAuthToken(token) {
  try {
    await AsyncStorage.setItem('@ScavengerStore:authToken', token);
  } catch (error) {
    console.error('error storing token', error);
  }
}

export async function getAuthToken() {
  try {
    const value = await AsyncStorage.getItem('@ScavengerStore:authToken');
    if (value !== null) {
      return value;
    }
    return undefined;
  } catch (error) {
    console.error('error getting token', error);
  }
}
