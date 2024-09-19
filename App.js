import {StatusBar} from 'expo-status-bar';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import ProductPage from "./Screen/ProductPage";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ProductColorSelection from "./Screen/ProductColorSelection";

const stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            {/*<ProductPage/>*/}
            <ProductColorSelection/>
        </NavigationContainer>
    );
}

