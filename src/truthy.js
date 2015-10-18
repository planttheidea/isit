

import {not} from "helpers";
import isitExisty from "existy";
import isitNaN from "nan";

export default function isitTruthy(obj) {
    return isitExisty(obj) && obj !== false && not(isitNaN(obj)) && obj !== "" && obj !== 0;
};