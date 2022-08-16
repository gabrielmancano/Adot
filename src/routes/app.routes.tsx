import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomeHeader from "../components/HomeHeader/HomeHeader";
import Cats from "../pages/Cats";
import Cadaster from "../pages/Cadaster";
import Dogs from "../pages/Dogs";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
    return (
        <Navigator
            initialRouteName="Home"
        >
            <Screen
                name="Home"
                component={HomeHeader}
                options={{ headerShown: false }}
            />

            <Screen
                name="Cats"
                component={Cats}
                options={{ headerShown: false }}
            />

            <Screen
                name="Dogs"
                component={Dogs}
                options={{ headerShown: false }}
            />

            <Screen
                name="Cadaster"
                component={Cadaster}
                options={{ headerShown: false }}
            />
        </Navigator>
    )
}