

import {navigatorInfo} from "utils";
import isitBrowser from "browser";

export default function isitPresto() {
    return isitBrowser() && /opera/i.test(navigatorInfo.userAgent);
}