import * as Linking from 'expo-linking';
import { useCallback, useContext } from 'react';

import { context } from '@stores/common';

const useCall = (): (() => void) => {
    const { task } = useContext(context);

    const call = useCallback((): void => {
        if (task?.telefone) {
            const url = `tel://${task.telefone}`;
            Linking.openURL(url);
        }
    }, [task]);

    return call;
};

export default useCall;
