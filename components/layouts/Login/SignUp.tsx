import React from 'react';
import {Box, Button, Center, Column, FormControl, Heading, Input, Row} from 'native-base';
import {auth} from '../../../config/Firebase';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../../../config/Routing';


export const SignUp = () => {

    const navigation = useNavigation<NavigationProps>();
    const [userName, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [lastname, setLastname] = React.useState('');
    const [firstname, setFirstname] = React.useState('');

    const handleChangeUserName = (text: string) => setUsername(text);
    const handleChangePassword = (text: string) => setPassword(text);

    const handleAccountCreation = () => {
        auth.createUserWithEmailAndPassword(userName, password)
            .then(async () => auth.currentUser?.updateProfile({displayName: `${firstname} ${lastname}`})
                .then(() => navigation.navigate('Home')))
            .catch((error) => console.log(error));
    };

    return <Center h="100%" _dark={{bg: 'todoDark.900'}}>
        <Column w={'80%'} space={'5'}>

            <Box alignItems="center">
                <Heading>Sign up </Heading>
                <FormControl>
                    <FormControl.Label>Nom</FormControl.Label>
                    <Input onChangeText={setLastname} w="100%" variant="outline" placeholder="Shrek"
                           type={'text'}
                           value={lastname}/>
                </FormControl>

                <FormControl>
                    <FormControl.Label>Prénom</FormControl.Label>
                    <Input onChangeText={setFirstname} w="100%" variant="outline" placeholder="Jean eudes"
                           type={'text'}
                           value={firstname}/>
                </FormControl>
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
                <Button w="full" size="sm" bgColor={'todoRed.900'} onPress={handleAccountCreation}>
                    Create account
                </Button>
            </Row>
        </Column>
    </Center>
}