"use strict";
// interface for an iOS camera app
class Instagram {
    constructor(cameraMode, filter, burstMode) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstMode = burstMode;
    }
}
// can implement more than one interface, but must use the same names (such as createStory() method)
class Youtube {
    constructor(cameraMode, filter, burstMode, 
    // interface implementation allows for additions, but they MUST use all variables in the interface at a minimum
    short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstMode = burstMode;
        this.short = short;
    }
    createStory() {
        return "story created!";
    }
}
