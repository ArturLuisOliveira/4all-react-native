import { useCallback, useContext } from 'react';

import { context, actions } from '@stores/common';

interface UseAddressModal {
    openAddress(): void;
    closeAddress(): void;
}

const useAddressModal = (): UseAddressModal => {
    const { dispatch } = useContext(context);

    const openAddress = useCallback(() => {
        if (dispatch) dispatch({ type: actions.SET_IS_ADDRESS_MODAL_OPEN, payload: true });
    }, [dispatch]);

    const closeAddress = useCallback(() => {
        if (dispatch) dispatch({ type: actions.SET_IS_ADDRESS_MODAL_OPEN, payload: false });
    }, [dispatch]);

    return { openAddress, closeAddress };
};

export default useAddressModal;
