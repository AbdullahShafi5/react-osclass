
const field = {
    REGION             : { label: 'Location',               name: 'region'},
    CITY               : { label: 'City',                   name: 'city'},
    ROOMS              : { label: 'Bedrooms',               name: 'numRooms'},
    ROOMS_MIN          : { label: 'Bedrooms',               name: 'numRoomsMin'},
    BATHROOMS          : { label: 'Bathrooms',              name: 'numBathrooms'},
    PRICE_MIN          : { label: 'Price Min',              name: 'price_min'},
    PRICE_MAX          : { label: 'Price Max',              name: 'price_max'},
    TYPE               : { label: 'Property Type',          name: 'p_type'},
    LISTING_TYPE       : { label: 'Type',                   name: 'property_type'},
    FLOORS             : { label: 'Floors',                 name: 'numFloors'},
    NUM_FLOOR          : { label: 'Number of Floors',       name: 'floorNumber'},
    GARAGES            : { label: 'Garages',                name: 'numGarages'},
    YEAR               : { label: 'Year',                   name: 'year'},
    SQUARE_FOOTAGE     : { label: 'Square Meters',          name: 'squareMeters'},
    HEATING            : { label: 'Heating',                name: 'heating'},
    AIR_CONDITION      : { label: 'Air Conditioning',       name: 'airCondition'},
    ELEVATOR           : { label: 'Elevator',               name: 'elevator'},
    TERRACE            : { label: 'Terrace',                name: 'terrace'},
    PARKING            : { label: 'Parking',                name: 'parking'},
    FURNISHED          : { label: 'Furnished',              name: 'furnished'},
    NEW                : { label: 'New',                    name: 'new'},
    BY_OWNER           : { label: 'By Owner',               name: 'by_owner'},
    SQ_TOTAL           : { label: 'Total Square Meters',    name: 'squareMetersTotal'},
    AGENCY             : { label: 'Agency',                 name: 'agency'},
    CONDITION          : { label: 'Condition',              name: 'condition'},
    STATUS             : { label: 'Status',                 name: 'status'}
};

export default field;

export function getField(name) {

    let k = Object.keys(field).filter(key => {
        return field[key].name === name;
    }).pop();

    return field.hasOwnProperty(k) ? field[k] : null;
}