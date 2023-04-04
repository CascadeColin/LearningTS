// a blueprint, cannot be created as a new object
// useful as setup for classes that inherit the abstract class
abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  // sets it up to be required to declare in an inherited class, but will be defined by that class
  abstract getSepia(): void;
}

// inherits TakePhoto
class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    // must add super() to bring in requirements from TakePhoto
    super(cameraMode, filter);
  }

  // must be declared since it is defined in TakePhoto
  getSepia(): void {
    console.log("satisfying setup requirement");
  }
}