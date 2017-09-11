
import * as actionsTypes from './actionsTypes';

export const login = credentials => dispatch => {
    return new Promise((resolve, reject) => {
        if (credentials.usuario === 'admin' && credentials.password === 'admin') {
            dispatch({
                type: actionsTypes.authLogin,
                session: {
                    usuario: credentials.usuario
                }
            });
            resolve();
        }
    })
}