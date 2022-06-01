import AsyncStorage from '@react-native-async-storage/async-storage';

const tokenStoragePath = '@token'

export async function getToken(): Promise<string | null> {
    return AsyncStorage.getItem(tokenStoragePath)
}

export async function setToken(token: string): Promise<void> {
    return AsyncStorage.setItem(tokenStoragePath, token)
}

export async function destroyToken(): Promise<void> {
    return AsyncStorage.removeItem(tokenStoragePath)
}