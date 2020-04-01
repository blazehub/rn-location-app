import { ADD_PLACE } from "./places-actions"
import Place from "../models/place";

const intialState = {
    places: []
}


export default (state = intialState, action) => {

    switch (action.type) {
        case ADD_PLACE:
            const newPlace = new Place(new Date().getTime(), action.placeData.title);
            return {
                places: state.places.concat(newPlace)
            }
            break;
        default:
            return state;
    }
}