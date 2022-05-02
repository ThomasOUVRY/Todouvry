import React from 'react'
import { Box, Button, Center, Column, Container, FormControl, Heading, Input, Row } from 'native-base'
import i18n from 'i18n-js'
import { PLACEHOLDER } from '../../../const/placeholder'
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../../../config/Firebase'

export const Login = () => {
  const navigation = useNavigation<StackNavigationProp>()

  const [userName, setUsername] = React.useState<string>('admin@ouvryt.fr')
  const [password, setPassword] = React.useState<string>('adminadmin')

  const handleChangeUserName = (text: string) => setUsername(text)
  const handleChangePassword = (text: string) => setPassword(text)

  const handleLogin = () => {
    auth.signInWithEmailAndPassword(userName, password).then(() => {
      setUsername('')
      setPassword('')
      navigation.navigate('Home')
    }).catch((error) => {
      const errorMessage = error.message
      window.alert(errorMessage)
    })
  }

  return (
        <Center w="100%" h="100%" nativeID={'centerContainer'}>
            <Container maxWidth="2xl" centerContent={true} px={10} w="100%">
                <Column space={'5'} w={'100%'}>
                    <Box alignItems="center">
                        <Heading mb={10}>TODOUVRY</Heading>
                        <FormControl>
                            <FormControl.Label>{i18n.t('general.email')}</FormControl.Label>
                            <Input
                                onChangeText={handleChangeUserName}
                                variant="outline"
                                placeholder={PLACEHOLDER.email}
                                type={'text'}
                                value={userName}
                            />
                        </FormControl>

                        <FormControl>
                            <FormControl.Label>
                                {i18n.t('general.password')}
                            </FormControl.Label>
                            <Input
                                onChangeText={handleChangePassword}
                                variant="outline"
                                placeholder={i18n.t('helpText.password')}
                                type={'password'}
                                value={password}
                            />
                        </FormControl>
                    </Box>

                    <Row space={'2'} justifyContent="space-between">
                        <Button flexGrow={1} onPress={() => navigation.navigate('SignUp')}>
                            {i18n.t('signup')}
                        </Button>
                        <Button flexGrow={1} onPress={handleLogin}>
                            {i18n.t('login')}
                        </Button>
                    </Row>
                </Column>
            </Container>
        </Center>
  )
}
