import AsyncStorage from '@react-native-community/async-storage';

export async function storeValue(key, value) {
  try {
    await AsyncStorage.setItem('@' + key, value);

    console.log(key + ' value stored');
  } catch (e) {
    console.log('Unable to stored ' + key);
  }
}

export async function retriveValue(key) {
  try {
    const value = await AsyncStorage.getItem('@' + key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log(key + ' not  found!');
  }
}

export async function removeValue(key) {
  try {
    await AsyncStorage.removeItem('@' + key);
  } catch (e) {
    // remove error
  }
  console.log('Successfully removed ' + key);
}
