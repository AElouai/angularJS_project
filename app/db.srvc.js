/**
 * Created by obito on 24/05/17.
 */
"use strict";

angular.module('app').service('DB', ['$window', DB]);

function DB($window) {

    var srvc = this;
    srvc.storage = $window.localStorage;

    srvc.get = function (key) {
        let data = srvc.storage.getItem(key);
        return JSON.parse(data);
    };

    srvc.set = function (key,data) {
        srvc.storage.setItem(key, JSON.stringify(data));
    };

}
