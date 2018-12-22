// Modules
import alertify from 'alertifyjs';

// Style
import 'alertifyjs/build/css/alertify.min.css';

// Constants
const defaultCallBack = () => { console.log('default callback --> clean notify'); };
const defaultTimeToLive = 2;

/**
 * Notify the user something happened.
 * @param message
 * @param type
 * @param ttl
 * @param callBack
 */
export function notify(message, type = 'custom', callBack = defaultCallBack, ttl = defaultTimeToLive) {
    alertify.notify(message, type, ttl, callBack());
}