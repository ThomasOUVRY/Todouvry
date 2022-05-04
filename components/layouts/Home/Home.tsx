import {Button, Center, Container, Heading, NativeBaseProvider} from 'native-base'
import React, {useEffect} from 'react'
import {auth, db} from '../../../config/Firebase'
import {useNavigation} from '@react-navigation/native'
import {NavigationProps} from '../../../config/Routing'
import {TaskDTO} from '../../../dto/Task';
import {Taskcard} from '../../shared/Taskcard';
import {themeTodouvry} from '../../../config/ThemeTodouvry';

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
            setTasks(tasks);
        });
    }, [])

    return <NativeBaseProvider theme={themeTodouvry}>
        <Center w="100%" h="100%" nativeID={'homeCenter'}>
            <Container w={'100%'} maxWidth="2xl" centerContent={true} px={10} nativeID="homeContainer">
                <Heading>Bonjour {auth.currentUser?.displayName}</Heading>
                {tasks.map((task) => <Taskcard key={task.id} task={task}></Taskcard>)}
                <Button w="100%" onPress={signOut} title={'salut'}> Se déconnecter </Button>
            </Container></Center>
    </NativeBaseProvider>
}
