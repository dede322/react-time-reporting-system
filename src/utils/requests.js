import { domain } from '../config'
import $ from 'jquery'
import noop from "./noop";

export const requests = (params) => {
    const url = domain + params.url;
    const type = params.type || 'GET';
    const success = params.success || noop;
    const error = params.error || noop;

    $.ajax({
        url: url,
        type: type,
        success: success,
        error: error
    });
};
