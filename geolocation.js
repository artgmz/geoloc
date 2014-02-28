// Geolocation module.
// Pseudo-singleton to store watch id. Also uses promises and browser's navigator.geolocation.
var geolocation = (function ($) {
    "use strict";

    var watchId = null; // Storage for watch id.

    // Async get and return current geolocation.
    function current() {
        var deferred = new $.Deferred();

        navigator.geolocation.getCurrentPosition(function (geoloc) {
            deferred.resolve({ lat: geoloc.coords.latitude, lon: geoloc.coords.longitude });
        }, function () { deferred.reject(); });

        return deferred.promise();
    }

    // Watch geolocation. Does nothing if watch already exists.
    // HANDLER: Function to trigger when geolocation changes.
    function watch(handler) { if (!watchId) { watchId = navigator.geolocation.watchPosition(handler); } };

    // Stop watching geolocation so handler is no longer triggered.
    function clearWatch() {
        navigator.geolocation.clearWatch(watchId);
        watchId = null;
    }

    // Module methods.
    return {
        current: current,
        watch: watch,
        clearWatch: clearWatch
    };
})(jQuery);