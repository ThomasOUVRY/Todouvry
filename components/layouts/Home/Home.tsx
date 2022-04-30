import {Heading, View} from 'native-base';
import React from 'react';
import {auth} from '../../../config/Firebase';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../../../config/Routing';

export const Home = () => {

    const navigation = useNavigation<NavigationProps>();
    const signOut = () => {
        auth.signOut().then(() => {
            return navigation.navigate('Login');
        });
    }

    return <View>
        <Heading>Bonjour {auth.currentUser?.displayName}</Heading>

        <Button onPress={signOut} title={'salut'}> Se déconnecter </Button>
    </View>;
}