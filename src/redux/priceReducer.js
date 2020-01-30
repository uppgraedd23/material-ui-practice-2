const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

const initState = {
    items: JSON.parse(localStorage.getItem('priceList')) ||
        [
            {firstName: 'Daemon', lastName: 'Dash', phone: '0931600000', gender: true, age: '30'},
            {firstName: 'Britney', lastName: 'Spears', phone: '0931611111', gender: false, age: '50'},
        ]
}

const priceReducer = (state = initState, action) => {

    switch (action.type) {

        case ADD_ITEM: {
            let newItem = action.form
            let newPriceList = [...state.items, newItem]

            localStorage.setItem('priceList', JSON.stringify(newPriceList))
            return {
                ...state,
                items: newPriceList
            };
        }
        case DELETE_ITEM: {
            let deleteArray = action.names
            let list = state.items
            let filteredList = list.filter((filterItem) => !deleteArray.some((someItem) => someItem === filterItem.firstName))
            localStorage.setItem('priceList', JSON.stringify(filteredList))

            return {
                ...state,
                items: filteredList
            };
        }
        default:
            return state;
    }
}

export const newItemCreator = (form) => ({type: ADD_ITEM, form})
export const itemDeletor = (name) => ({type: DELETE_ITEM, name})


export default priceReducer