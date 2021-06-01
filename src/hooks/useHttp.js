import { useCallback, useReducer } from "react";

function httpReducer(state, action) {
    switch (action.type) {
        case 'SEND':
            return {
                data: null,
                error: null,
                status: 'pending'
            }
        case 'SUCCESS':
            return {
                data: action.responseData,
                error: null,
                status: 'completed'
            }
        case 'ERROR':
            return {
                data: null,
                error: action.errorMessage,
                status: 'completed'
            }
        
        return state;
    }
}

function useHttp(requestFunction, startWithPending = false) {
    const [httpState, dispatch] = useReducer(httpReducer, {
        data: null,
        error: null,
        status: startWithPending ? 'pending' : null
    });

    const sendRequest = useCallback(
        async function(requestData) {
            dispatch({
                type: 'SEND'
            });

            try {
                const responseData = await requestFunction(requestData);
                dispatch({
                    type: 'SUCCESS',
                    responseData
                });
            }
            catch (error) {
                dispatch({
                    type: 'ERROR',
                    errorMessage: error.message || 'Something went wrong!'
                });
            }
        }, [requestFunction]
    );
    
    return {
        sendRequest,
        ...httpState
    };
}

export default useHttp;