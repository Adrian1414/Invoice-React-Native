import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import CustomerList from "../pages/CustomerList";

import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator()

export default function TabNavigator() {
    return (
        <Tab.Navigator>

            <Tab.Screen
            name="Home"
            component={Home}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size}) =>  (
                    <MaterialCommunityIcons name="home" size={24} color={color} />
                )
            }}
            >
            </Tab.Screen>

            <Tab.Screen
            name="Customers"
            component={CustomerList}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size}) =>  (
                    <Fontisto name="persons" size={size} color={color} />
                )
            }}
            >
            </Tab.Screen>

        </Tab.Navigator>
    )
}