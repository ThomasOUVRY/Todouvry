import React from 'react';
import {Box, Button, Center, Column, Container, FormControl, Heading, Input, Row,} from 'native-base';
import {auth} from '../../../config/Firebase';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../../../config/Routing';
import {t} from 'i18next';
import {PLACEHOLDER} from '../../../const/placeholder';
import {Formik} from "formik";
import {SingUpInfoDTO} from "../../../dto/SignUpInfo";
import SignUpValidation from "../../../validators/SignUpValidation";

export const SignUp = () => {
    const navigation = useNavigation<NavigationProps>();

    const initialValues: SingUpInfoDTO = new SingUpInfoDTO();

    const handleAccountCreation = (values: SingUpInfoDTO) => {
        auth
            .createUserWithEmailAndPassword(values.email!, values.password!)
            .then(async () =>
                auth.currentUser
                    ?.updateProfile({displayName: values.fullname!})
                    .then(() => navigation.navigate('Home'))
            )
            .catch((error) => console.log(error));
    };

    return (
        <Center w="100%" h="100%">
            <Container maxWidth="2xl" centerContent={true} px={10} w="100%">
                <Formik initialValues={initialValues} onSubmit={handleAccountCreation}
                        validationSchema={SignUpValidation}>
                    {({values, handleChange, errors, setFieldTouched, touched, handleSubmit}) => (
                        <Column w='100%' space='5'>
                            <Box alignItems="center">
                                <Heading mb={10}>{t('signup')}</Heading>
                                <FormControl isInvalid={touched.fullname && errors.fullname !== undefined}>
                                    <FormControl.Label>{t('user.name')}</FormControl.Label>
                                    <Input
                                        onChangeText={handleChange('fullname')}
                                        onBlur={() => setFieldTouched('fullname')}
                                        placeholder={PLACEHOLDER.name}
                                        type={'text'}
                                        value={values.fullname}
                                    />
                                    <FormControl.ErrorMessage>{errors.fullname}</FormControl.ErrorMessage>
                                </FormControl>
                                <FormControl isInvalid={touched.email && errors.email !== undefined}>
                                    <FormControl.Label>{t('general.email')}</FormControl.Label>
                                    <Input
                                        onChangeText={handleChange('email')}
                                        onBlur={() => setFieldTouched('email')}
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
                                        placeholder={t('helpText.password')}
                                        type={'password'}
                                        value={values.password}
                                    />
                                    <FormControl.ErrorMessage>{errors.password}</FormControl.ErrorMessage>
                                </FormControl>
                                <FormControl isInvalid={touched.confirmPassword && errors.confirmPassword !== undefined}>
                                    <FormControl.Label>
                                        {t('general.passwordConfirm')}
                                    </FormControl.Label>
                                    <Input
                                        onChangeText={handleChange('confirmPassword')}
                                        onBlur={() => setFieldTouched('confirmPassword')}
                                        placeholder={t('helpText.password')}
                                        type={'password'}
                                        value={values.confirmPassword}
                                    />
                                    <FormControl.ErrorMessage>{errors.confirmPassword}</FormControl.ErrorMessage>
                                </FormControl>
                            </Box>

                            <Row w="100%" space={'2'} justifyContent="space-between">
                                <Button
                                    w="full"
                                    size="sm"
                                    onPress={() => handleSubmit()}
                                >
                                    Create account
                                </Button>
                            </Row>
                        </Column>)}
                </Formik>
            </Container>
        </Center>
    );
};
