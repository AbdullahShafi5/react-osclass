import field from './../../constants/FieldNames';

function getPrices(type='min') {

    return [
        { label: (type === 'max' ? field.PRICE_MAX.label : field.PRICE_MIN.label), value: null },
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 },
        { label: '4', value: 4 },
        { label: '5', value: 5 },
        { label: '6', value: 6 },
        { label: '7', value: 7 },
        { label: '8', value: 8 },
        { label: '9', value: 9 },
        { label: '10', value: 10 },
    ];
}


export function reducerMin(state={
    dropdown: getPrices('min')
}, action) {

    return state;
}

export function reducerMax(state={
    dropdown: getPrices('max')
}, action) {

    return state;
}