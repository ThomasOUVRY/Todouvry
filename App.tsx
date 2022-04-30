import React from 'react';
import {Box, HStack, NativeBaseProvider, Switch, Text, useColorMode} from 'native-base';
import {themeTodouvry} from './config/ThemeTodouvry';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './components/layouts/Home/Home';
import {Login} from './components/layouts/Login/Login';
import {SignUp} from './components/layouts/Login/SignUp';

// extend the theme
export const theme = themeTodouvry;
type MyThemeType = typeof theme;
declare module 'native-base' {
    interface ICustomTheme extends MyThemeType {
    }
}
const Stack = createNativeStackNavigator();

export default function App() {

    return (
        <NativeBaseProvider theme={theme}>
            <Box flex={1}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Login">
                        <Stack.Screen options={{headerShown: false}} name="Login" component={Login}/>
                        <Stack.Screen options={{headerShown: false}} name="SignUp" component={SignUp}/>
                        <Stack.Screen name="Home" component={Home}/>
                    </Stack.Navigator>
                </NavigationContainer>
                <ToggleDarkMode></ToggleDarkMode>
            </Box>
        </NativeBaseProvider>
    );
}

// Color Switch Component
function ToggleDarkMode() {
    const {colorMode, toggleColorMode} = useColorMode();
    return (
        <HStack space={2} alignItems="center">
            <Text>Dark</Text>
            <Switch
                isChecked={colorMode === 'light'}
                onToggle={toggleColorMode}
                aria-label={
                    colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
                }
            />
            <Text>Light</Text>
        </HStack>
    );
}
