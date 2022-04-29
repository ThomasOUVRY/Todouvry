import React from 'react';
import {Box, Button, Center, Column, FormControl, Heading, Input, Row} from 'native-base';

export const Login = () => {

    const [userName, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleChangeUserName = (text: string) => setUsername(text);
    const handleChangePassword = (text: string) => setPassword(text);

    return <Center>
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
                <Button width="1/2" size="sm" bgColor={'todoRed.900'} onPress={() => console.log(userName)}>
                    Sign up
                </Button>
                <Button width="1/2" size="sm" bgColor={'todoRed.900'}>
                    Log in
                </Button>
            </Row>
        </Column>
    </Center>
}