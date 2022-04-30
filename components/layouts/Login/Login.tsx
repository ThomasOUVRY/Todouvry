import React from 'react';
import {Box, Button, Center, Column, FormControl, Heading, Input, Row} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from 'react-navigation-stack/lib/typescript/src/vendor/types';
import {auth} from '../../../config/Firebase';


export const Login = () => {
    const navigation = useNavigation<StackNavigationProp>();

    const [userName, setUsername] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');

    const handleChangeUserName = (text: string) => setUsername(text);
    const handleChangePassword = (text: string) => setPassword(text);

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(userName, password).then(() => navigation.navigate('Home'));
    }

    return <Center h="100%" _dark={{bg: 'todoDark.900'}}>
        <Column w={'80%'} space={'5'}>

            <Box alignItems="center">
                <Heading>TODOUVRY</Heading>
                <FormControl>
                    <FormControl.Label>Username</FormControl.Label>
                    <Input onChangeText={handleChangeUserName} w="100%" variant="outline" placeholder="username"
                           type={'text'}
                           value={userName}/>
                </FormControl>

                <FormControl>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input onChangeText={handleChangePassword} w="100%" variant="outline" placeholder="password"
                           type={'password'}
                           value={password}/>
                </FormControl>
            </Box>


            <Row w="100%" space={'2'} justifyContent="space-between">
                <Button width="1/2" size="sm" bgColor={'todoRed.900'} onPress={() => navigation.navigate('SignUp')}>
                    Sign up
                </Button>
                <Button width="1/2" size="sm" bgColor={'todoRed.900'} onPress={handleLogin}>
                    Log in
                </Button>
            </Row>
        </Column>
    </Center>
}