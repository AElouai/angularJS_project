/**
 * Created by obito on 24/05/17.
 */
"use strict";

angular.module('app').service('Options', [Options]);

function Options() {

    var srvc = this;
    srvc.color = "white";

    let getColor = function () {
        return srvc.color;
    };


    let setColor = function (color) {
        srvc.color = color;
    };

    return {
        getColor: getColor,
        setColor: setColor
    };
}