"use strict";
// a blueprint, cannot be created as a new object
// useful as setup for classes that inherit the abstract class
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
// inherits TakePhoto
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        // must add super() to bring in requirements from TakePhoto
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    // must be declared since it is defined in TakePhoto
    getSepia() {
        console.log("satisfying setup requirement");
    }
}
