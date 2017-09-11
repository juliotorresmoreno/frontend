

import * as actionsTypes from './actionsTypes';

export const create = (store, data) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: actionsTypes.crudCreate,
            store: store,
            data: data
        });
        resolve();
    });
}

export const update = (store, row, data) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: actionsTypes.crudUpdate,
            store: store,
            data: data,
            row: row
        });
        resolve();
    });
}

export const remove = (store, row) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: actionsTypes.crudRemove,
            store: store,
            row: row
        });
        resolve();
    });
}