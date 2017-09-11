


import * as actionsTypes from './actionsTypes';

export const show = message => ({
    type: actionsTypes.messageShow,
    message: message
});

export const hide = message => ({
    type: actionsTypes.messageHide
});