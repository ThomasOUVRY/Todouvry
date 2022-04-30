import React from 'react';
import {HStack, NativeBaseProvider, Switch, Text, useColorMode,} from 'native-base';
import {initTranslations} from './i18n/i18n';
import {themeTodouvry} from './config/ThemeTodouvry';
import {Login} from './components/layouts/Login/Login';
import {SignUp} from './components/layouts/Login/SignUp';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from './components/layouts/Home/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import i18n from 'i18n-js';

// extend the theme
export const theme = themeTodouvry;
type MyThemeType = typeof theme;
declare module 'native-base' {
    interface ICustomTheme extends MyThemeType {
    }
}
const Stack = createNativeStackNavigator();
initTranslations();

export default function App() {
    return (
        <NativeBaseProvider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen
                        options={{headerShown: false}}
                        name="Login"
                        component={Login}
                    />
                    <Stack.Screen
                        options={{
                            title: i18n.t('signup'),
                            headerStyle: {
                                backgroundColor: '#0A0A0A',
                            },
                            headerTintColor: '#FFF8F8',
                            headerTitleStyle: {
                                color: '#FFF8F8',
                                fontWeight: 'bold',
                            }

                        }}
                        name="SignUp"
                        component={SignUp}
                    />
                    <Stack.Screen name="Home" component={Home}/>
                </Stack.Navigator>
            </NavigationContainer>
            <ToggleDarkMode></ToggleDarkMode>
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
