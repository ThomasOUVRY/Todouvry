import React from 'react';
import {Box, Button, Center, Column, Container, FormControl, Heading, Input, Row,} from 'native-base';
import {auth} from '../../../config/Firebase';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../../../config/Routing';
import {t} from 'i18next';
import {PLACEHOLDER} from '../../../const/placeholder';

export const SignUp = () => {
    const navigation = useNavigation<NavigationProps>();
    const [userName, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');

    const handleChangeUserName = (text: string) => setUsername(text);
    const handleChangePassword = (text: string) => setPassword(text);

    const handleAccountCreation = () => {
        auth
            .createUserWithEmailAndPassword(userName, password)
            .then(async () =>
                auth.currentUser
                    ?.updateProfile({displayName: name})
                    .then(() => navigation.navigate('Home'))
            )
            .catch((error) => console.log(error));
    };

    return (
        <Center w="100%" h="100%">
            <Container maxWidth="2xl" centerContent={true} px={10} w="100%">
                <Column w={'80%'} space={'5'}>
                    <Box alignItems="center">
                        <Heading mb={10}>{t('signup')}</Heading>
                        <FormControl>
                            <FormControl.Label>{t('user.name')}</FormControl.Label>
                            <Input
                                onChangeText={setName}
                                w="100%"
                                variant="outline"
                                placeholder={PLACEHOLDER.name}
                                type={'text'}
                                value={name}
                            />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>{t('general.email')}</FormControl.Label>
                            <Input
                                onChangeText={handleChangeUserName}
                                w="100%"
                                variant="outline"
                                placeholder={PLACEHOLDER.email}
                                type={'text'}
                                value={userName}
                            />
                        </FormControl>

                        <FormControl>
                            <FormControl.Label>
                                {t('general.password')}
                            </FormControl.Label>
                            <Input
                                onChangeText={handleChangePassword}
                                w="100%"
                                variant="outline"
                                placeholder={t('helpText.password')}
                                type={'password'}
                                value={password}
                            />
                        </FormControl>
                    </Box>

                    <Row w="100%" space={'2'} justifyContent="space-between">
                        <Button
                            w="full"
                            size="sm"
                            onPress={handleAccountCreation}
                        >
                            Create account
                        </Button>
                    </Row>
                </Column>
            </Container>
        </Center>
    );
};
