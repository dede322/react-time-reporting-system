import $ from 'jquery'
import noop from "./noop";

class Requests {
    _serverAdress = '';
    _requestInterceprors = [];
    _responseInterceptors = [];
    _store = null;

    setServerAdress = (serverAdress) => {
        this._serverAdress = serverAdress;
    };

    setStore = (store) => {
        this._store = store;
    };

    send = (params) => {
        params = this._generateRequestParams(params);

        this._requestInterceprors.forEach(function (interceptor) {
            params = interceptor(params);
        });

        $.ajax(params);
    };

    _generateRequestParams = (params) => {
        return {
            url: this._serverAdress + params.url,
            type: params.type || 'GET',
            success: params.success || noop,
            error: params.error || noop
        }
    }
}

let requests = new Requests();

export default requests;
