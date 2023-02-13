import {
    GET_DOGS,
    ALL_TEMPS,
    FILTER_TEMPS,
    FILTER_FROM,
    ORDER_AZ,
    ORDER_WEIGHT,
    SEARCH_DOGS,
    CREATE_DOGS,
    DETAILS_DOGS,
    DELETE_DOG
} from '../actions/actions.js'

const inicialState = {
    dog: [],
    noFiltered: [],
    tempers: [],
    dogDetails: [] 
}

