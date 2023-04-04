"use strict";
// // interface for an iOS camera app
// interface TakePhoto {
//     cameraMode: string
//     filter: string
//     burstMode: number
// }
// interface Story {
//     createStory(): string
// }
// class Instagram implements TakePhoto {
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burstMode: number
//     ){}
// }
// // can implement more than one interface, but must use the same names (such as createStory() method)
// class Youtube implements TakePhoto, Story {
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burstMode: number,
//         // interface implementation allows for additions, but they MUST use all variables in the interface at a minimum
//         public short: string
//     ){}
//     createStory(): string {
//         return "story created!"
//     }
// }
