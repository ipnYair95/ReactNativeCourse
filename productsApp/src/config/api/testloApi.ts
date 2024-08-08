import { STAGE, API_URL as PROD_URL, API_URL_IOS, API_URL_ANDROID } from "@env";
import axios from "axios";
import { Platform } from "react-native";
import { StorageAdapter } from "../adapters/storage-adapter";

export const API_URL = (STAGE === 'production')
    ? PROD_URL
    : Platform.OS === 'ios' ? API_URL_IOS : API_URL_ANDROID

const testloApi = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',

    }
})

testloApi.interceptors.request.use(

    async (config) => {

        const token = await StorageAdapter.getItem('token');

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        console.log(config)

        return config;
    }

);


export {
    testloApi
}