// does the browser used render via blink?

import {navigatorInfo} from "./utils";
import isitBrowser from "./browser";

export default function isitBlink() {
    return isitBrowser() && /chrome/i.test(navigatorInfo.userAgent);
}