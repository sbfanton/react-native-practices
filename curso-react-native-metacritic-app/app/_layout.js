import { View } from 'react-native';
import { Slot } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
    return (
        <SafeAreaProvider>
            <View className="flex-1 bg-black">
                <StatusBar style="light" />
                <Slot />
            </View>
        </SafeAreaProvider>
    )
}