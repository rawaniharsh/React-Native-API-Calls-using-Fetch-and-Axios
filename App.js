import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import FetchApiCall from './src/fetchApiCall';
import AxiosApiCall from './src/axiosApiCall';
import { View } from 'react-native';

export default function App() {
  return (
    <View>
    <FetchApiCall/>
    <AxiosApiCall/>
    </View>
  );
}