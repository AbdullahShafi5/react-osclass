import field from './../../constants/FieldNames';

const FOR_RENT = 'FOR_RENT';
const FOR_SALE = 'FOR_SALE';


export default function reducer(state={
    dropdown: [
        { label: field.LISTING_TYPE.label, value: null },
        { label: 'For Rent', value: FOR_RENT },
        { label: 'For Sale', value: FOR_SALE }
    ]
}, action) {

    console.log('ACTION TYPE');
    console.log(action.type);
    console.log(state);

    return state;
}