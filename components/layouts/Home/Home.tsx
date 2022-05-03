import {Heading, Text, View} from 'native-base'
import React, {useEffect} from 'react'
import {auth, db} from '../../../config/Firebase'
import {Button} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {NavigationProps} from '../../../config/Routing'
import {TaskDTO} from "../../../dto/Task";

export const Home = () => {
    const navigation = useNavigation<NavigationProps>()
    const [tasks, setTasks] = React.useState<TaskDTO[]>([]);

    const signOut = () => {
        auth.signOut().then(() => {
            return navigation.navigate('Login')
        })
    }

    useEffect(() => {
        db.collection('tasks').where('id_user', '==', auth.currentUser?.uid).get().then(result => result.docs.map((res) => new TaskDTO(res.id, res.get('id_user'), res.get('libelle'), res.get('due_date')))).then(tasks => {
            console.log(auth.currentUser?.uid)
            setTasks(tasks);
            console.dir(tasks);
        });
    }, [])

    return <View>
        <Heading>Bonjour {auth.currentUser?.displayName}</Heading>
        {tasks.map((task) =>
            <Text>{JSON.stringify(task)})</Text>
        )}
        <Button onPress={signOut} title={'salut'}> Se déconnecter </Button>
    </View>
}
