import React from 'react';
import {Center, NativeBaseProvider,} from 'native-base';
import {themeTodouvry} from './config/ThemeTodouvry';
import {Login} from './components/layouts/login/Login';


// extend the theme
export const theme = themeTodouvry;
type MyThemeType = typeof theme;
declare module 'native-base' {
    interface ICustomTheme extends MyThemeType {
    }
}
export default function App() {
    return (
        <NativeBaseProvider theme={theme}>

            <Center width={'full'} height={'full'}>
                <Login/>
            </Center>
            {/*<Box height={'full'} _dark={{bg: 'todoDark.900'}}>
                <CheckIcon size="5" mt="0.5" color="emerald.500"/>
                <FormControl w="75%" maxW="300px">
                    <FormControl.Label>Password</FormControl.Label>
                    <Input variant={'outline'} placeholder="Enter password"/>
                    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs"/>}>
                        Try different from previous passwords.
                    </FormControl.ErrorMessage>
                </FormControl> 
            </Box>*/}
        </NativeBaseProvider>
    );
}

// Color Switch Component
/*
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
*/
