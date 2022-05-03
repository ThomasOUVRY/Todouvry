import React from 'react'
import {Box, Button, Center, Column, Container, FormControl, Heading, Input, Row} from 'native-base'
import {PLACEHOLDER} from '../../../const/placeholder'
import {StackNavigationProp} from 'react-navigation-stack/lib/typescript/src/vendor/types'
import {useNavigation} from '@react-navigation/native'
import {Formik} from "formik";
import {LoginInfoDTO} from "../../../dto/LoginInfo";
import {auth} from "../../../config/Firebase";
import {t} from "i18next";
import LoginValidation, {MAX_LENGTH_PASSWORD} from "../../../validators/LoginValidation";


export const Login = () => {
    const navigation = useNavigation<StackNavigationProp>()

    const initialValues = new LoginInfoDTO();

    const onSubmit = (values: LoginInfoDTO) => {
        auth.signInWithEmailAndPassword(values.email!, values.password!).then(() => {
            navigation.navigate('Home')
        }).catch((error) => {
            const errorMessage = error.message
            window.alert(errorMessage)
        })
    };

    return (
        <Center w="100%" h="100%" nativeID={'centerContainer'}>
            <Container maxWidth="2xl" centerContent={true} px={10} w="100%">
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={LoginValidation}>
                    {({values, handleChange, errors, setFieldTouched, touched, handleSubmit}) => (
                        <Column space={'5'} w={'100%'}>
                            <Box alignItems="center">
                                <Heading mb={10}>TODOUVRY</Heading>
                                <FormControl isInvalid={touched.email && errors.email !== undefined}>
                                    <FormControl.Label>{t('general.email')}</FormControl.Label>
                                    <Input
                                        onChangeText={handleChange('email')}
                                        onBlur={() => setFieldTouched('email')}
                                        variant="outline"
                                        placeholder={PLACEHOLDER.email}
                                        type={'text'}
                                        value={values.email}
                                    />
                                    <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage>
                                </FormControl>

                                <FormControl isInvalid={touched.password && errors.password !== undefined}>
                                    <FormControl.Label>
                                        {t('general.password')}
                                    </FormControl.Label>
                                    <Input
                                        onChangeText={handleChange('password')}
                                        onBlur={() => setFieldTouched('password')}
                                        variant="outline"
                                        placeholder={t('helpText.password')}
                                        type={'password'}
                                        value={values.password}
                                        maxLength={MAX_LENGTH_PASSWORD}
                                    />
                                    <FormControl.ErrorMessage>{errors.password}</FormControl.ErrorMessage>
                                </FormControl>
                            </Box>

                            <Row space={'2'} justifyContent="space-between">
                                <Button flexGrow={1} onPress={() => navigation.navigate('SignUp')}>
                                    {t('signup')}
                                </Button>
                                <Button flexGrow={1} onPress={() => handleSubmit()}>
                                    {t('login')}
                                </Button>
                            </Row>
                        </Column>)}
                </Formik>
            </Container>
        </Center>
    )
}
