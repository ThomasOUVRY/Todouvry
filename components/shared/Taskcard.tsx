import {TaskDTO} from '../../dto/Task';
import {Box, Divider, VStack} from 'native-base';
import React from 'react';

export const Taskcard = (props: { task: TaskDTO }) => {
    const {task} = props;

    return <Box w='100%'>
        <VStack space="4" divider={<Divider/>}>
            <Box px="4" pt="4">
                {task.id_user}
            </Box>
            <Box px="4">
                {task.libelle}
            </Box>
        </VStack>
    </Box>

}