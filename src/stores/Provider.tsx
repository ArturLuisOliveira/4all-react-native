import React, { ReactElement, useMemo, useReducer } from 'react';
import { reducer, initialState, context as Context } from '@stores/common';
import { CommonStoreDTO } from './common/dto';

interface Props {
    children: ReactElement;
}

function Provider({ children }: Props): ReactElement {
    const [state, dispatch] = useReducer(reducer, initialState);

    const contextValue: CommonStoreDTO = useMemo(() => ({ ...state, dispatch }), [state, dispatch]);

    return (
        <>
            <Context.Provider value={contextValue}>{children}</Context.Provider>
        </>
    );
}

export default Provider;
