export const DOMAIN                                     = 'http://osclass.dev.com';
export const BASE_URL                                   = DOMAIN + '/index.php';
export const RESPONSE_FORMAT                            = 'json';
export const DEFAULT_COUNTRY_ID                         = 'CA';

export const TOGGLE_COLOR                               = 'TOGGLE_COLOR';
export const EXAMPLE_REQUEST_START                      = 'EXAMPLE_REQUEST_START';
export const EXAMPLE_REQUEST_DATA                       = 'EXAMPLE_REQUEST_DATA';

/* REDUX FORM
==============================================*/
export const FORM_FIELD_CHANGED                         = '@@redux-form/CHANGE';


/* REQUESTS
==============================================*/

// LOCATION ***********************************/

// REGIONS
export const REGION_REQUEST_STARTED                     = 'REGION_REQUEST_STARTED';
export const REGION_REQUEST                             = 'REGION_REQUEST';
export const REGION_REQUEST_COMPLETED                   = 'REGION_REQUEST_COMPLETED';
export const REGION_REQUEST_FAILED                      = 'REGION_REQUEST_COMPLETED_FAILED';
export const REGION_CHANGED                             = 'REGION_CHANGED';

export const REGION_AUTOCOMPLETE_REQUEST_STARTED        = 'REGION_AUTOCOMPLETE_REQUEST_STARTED';
export const REGION_AUTOCOMPLETE_REQUEST                = 'REGION_AUTOCOMPLETE_REQUEST';
export const REGION_AUTOCOMPLETE_REQUEST_COMPLETED      = 'REGION_AUTOCOMPLETE_REQUEST_COMPLETED';
export const REGION_AUTOCOMPLETE_REQUEST_FAILED         = 'REGION_AUTOCOMPLETE_REQUEST_FAILED';

// CITIES
export const CITY_REQUEST_STARTED                       = 'CITY_REQUEST_STARTED';
export const CITY_REQUEST                               = 'CITY_REQUEST';
export const CITY_REQUEST_COMPLETED                     = 'CITY_REQUEST_COMPLETED';
export const CITY_REQUEST_FAILED                        = 'CITY_REQUEST_COMPLETED_FAILED';
export const CITY_CHANGED                               = 'CITY_CHANGED';

export const CITY_AUTOCOMPLETE_REQUEST_STARTED          = 'CITY_AUTOCOMPLETE_REQUEST_STARTED';
export const CITY_AUTOCOMPLETE_REQUEST                  = 'CITY_AUTOCOMPLETE_REQUEST';
export const CITY_AUTOCOMPLETE_REQUEST_COMPLETED        = 'CITY_AUTOCOMPLETE_REQUEST_COMPLETED';

// COUNTRIES
export const COUNTRY_REQUEST_STARTED                    = 'COUNTRY_REQUEST_STARTED';
export const COUNTRY_REQUEST                            = 'COUNTRY_REQUEST';
export const COUNTRY_REQUEST_COMPLETED                  = 'COUNTRY_REQUEST_COMPLETED';
export const COUNTRY_CHANGED                            = 'COUNTRY_CHANGED';

export const COUNTRY_AUTOCOMPLETE_REQUEST_STARTED       = 'COUNTRY_AUTOCOMPLETE_REQUEST_STARTED';
export const COUNTRY_AUTOCOMPLETE_REQUEST               = 'COUNTRY_AUTOCOMPLETE_REQUEST';
export const COUNTRY_AUTOCOMPLETE_REQUEST_COMPLETED     = 'COUNTRY_AUTOCOMPLETE_REQUEST_COMPLETED';



// SEARCH **************************************/
export const SEARCH_REQUEST_STARTED                     = 'SEARCH_REQUEST_STARTED';
export const SEARCH_REQUEST                             = 'SEARCH_REQUEST';
export const SEARCH_REQUEST_COMPLETED                   = 'SEARCH_REQUEST_COMPLETED';
export const SEARCH_REQUEST_FAILED                      = 'SEARCH_REQUEST_FAILED';

export const PROPERTY_TYPES_REQUEST_STARTED             = 'PROPERTY_TYPES_REQUEST_STARTED';
export const PROPERTY_TYPES_REQUEST_COMPLETED           = 'PROPERTY_TYPES_REQUEST_COMPLETED';
export const PROPERTY_TYPES_REQUEST_FAILED              = 'PROPERTY_TYPES_REQUEST_FAILED';

export const PROPERTY_ATTRIBUTES_REQUEST_STARTED        = 'PROPERTY_ATTRIBUTES_REQUEST_STARTED';
export const PROPERTY_ATTRIBUTES_REQUEST_COMPLETED      = 'PROPERTY_ATTRIBUTES_REQUEST_COMPLETED';
export const PROPERTY_ATTRIBUTES_REQUEST_FAILED         = 'PROPERTY_ATTRIBUTES_REQUEST_FAILED';


// LATEST LISTINGS
export const LATEST_LISTINGS_REQUEST_STARTED            = 'LATEST_LISTINGS_REQUEST_STARTED';
export const LATEST_LISTINGS_REQUEST_COMPLETED          = 'LATEST_LISTINGS_REQUEST_COMPLETED';
export const LATEST_LISTINGS_REQUEST_FAILED             = 'LATEST_LISTINGS_REQUEST_FAILED';



// USER ****************************************/
export const ADMIN_REQUEST_STARTED                      = 'ADMIN_REQUEST_STARTED';
export const ADMIN_REQUEST_COMPLETED                    = 'ADMIN_REQUEST_COMPLETED';
export const ADMIN_REQUEST_FAILED                       = 'ADMIN_REQUEST_FAILED';



// GENERAL *************************************/
export const ALERTS                                     = 'ALERTS';
export const RUNHOOK                                    = 'RUNHOOK';
export const CUSTOM                                     = 'CUSTOM';
export const CHECK_USERNAME_AVAILABILITY_REQUEST        = 'CHECK_USERNAME_AVAILABILITY_REQUEST';
export const AJAX_UPLOAD                                = 'AJAX_UPLOAD';
export const AJAX_VALIDATE                              = 'AJAX_VALIDATE';
export const DELETE_AJAX_UPLOAD                         = 'DELETE_AJAX_UPLOAD';