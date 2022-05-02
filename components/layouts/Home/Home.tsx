import { Heading, View } from 'native-base'
import React, { useEffect } from 'react'
import { auth, db } from '../../../config/Firebase'
import { Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NavigationProps } from '../../../config/Routing'
import moment from 'moment'

export const Home = () => {
  const navigation = useNavigation<NavigationProps>()
  const signOut = () => {
    auth.signOut().then(() => {
      return navigation.navigate('Login')
    })
  }

  useEffect(() => {
    db.collection('tasks').where('id_user', '==', auth.currentUser?.uid).get().then(result => result.docs.forEach(res => console.log(moment(res.get('due_date')))))
  }, [])

  return <View>
    <Heading>Bonjour {auth.currentUser?.displayName}</Heading>

    <Button onPress={signOut} title={'salut'}> Se déconnecter </Button>
  </View>
}
