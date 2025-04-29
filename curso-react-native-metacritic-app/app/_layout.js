import { View, Pressable } from 'react-native';
import { Link, Slot, Stack, usePathname } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Logo } from '../components/Logo';
import { CircleInfoIcon, HomeIcon } from '../components/Icons';
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export default function Layout() {
    /*const insets = useSafeAreaInsets();*/

    const pathname = usePathname(); // ← te devuelve "/about", "/[slug]", etc.

    const isHome = pathname === '/';
    
    return (
        <View className="flex-1 bg-black">
            <StatusBar style="light" />
            <Stack 
                screenOptions={{
                    headerStyle: { backgroundColor: "black" },
                    headerTintColor: "white",
                    headerTitle: "",
                    headerLeft: () => <Logo />,
                    headerRight: () => <HeaderRight />
                }}
            />
        </View>
    )
}

function HeaderRight() {
    const pathname = usePathname();
  
    if (pathname === '/') {
      return (
        <Link asChild href="/about">
          <StyledPressable className="active:opacity-20">
            <CircleInfoIcon />
          </StyledPressable>
        </Link>
      );
    }
  
    return (
      <Link asChild href="/">
        <StyledPressable className="active:opacity-20">
          <HomeIcon />
        </StyledPressable>
      </Link>
    );
  }
  