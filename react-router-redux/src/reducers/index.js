import { combineReducers } from 'redux';

const itemIDs = (state = [], action) => {
    switch (action.type) {
        case 'GET_ITEM_IDS':
            const mock = [{ id: 'item001' }, { id: 'item002' }, { id: 'item003' }];
            return mock.map(item => item.id);
        default:
            return state;
    }
}

export default combineReducers({
    itemIDs
});