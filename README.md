# Geoloc

## Description:
Geoloc is a geolocation module written in pure JavaScript. The dependency on jQuery is only for using the "Deferred" object to allow use of promises when calling the module's functions.

## Dependencies:
* jQuery 2.0.3+

## Notes:
* This module has singleton-like properties. If a watch has already been initialized, you will have to clear it (clearWatch()) before initializing a new one (watch()).
* Calling the "current()" function prompts the user for approval to access their location. If they refuse, the promise is rejected so you should display some type of nice notice to the user.

## Sample Usage:
```
geolocation.current().then(function (loc) {
	// Draw point on map.

    geolocation.watch(function (loc) {
    	// Move point on map.
	});
}, function () {
    // Display "location unavailable" notification.
});
```