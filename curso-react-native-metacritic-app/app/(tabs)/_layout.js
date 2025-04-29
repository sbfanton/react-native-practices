import { Tabs } from "expo-router";
import { View } from "react-native";
import { HomeIcon, CircleInfoIcon } from "../../components/Icons";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: "#000" },
                tabBarActiveTintColor: "#FFBD3F",
                tabBarActiveBackgroundColor: "#1b1c1c"
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => <HomeIcon color={color} size={30} />
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: "About",
                    tabBarIcon: ({ color }) => <CircleInfoIcon color={color} size={30}/>
                }}
            />
        </Tabs>);
}