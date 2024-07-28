"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guest_List = ["usman", "humail", "ashir"];
for (let i = 0; i < guest_List.length; i++) {
    console.log(`Hi ${guest_List[i]}, I invite you for a dinner at my home`);
}
let guestHowCantMakeit = guest_List[1];
console.log(`\n${guestHowCantMakeit}, can't make it to the dinner`);
guest_List[1] = "Afaq";
for (let i = 0; i < guest_List.length; i++) {
    console.log(`Hi ${guest_List[i]}, I invite you for a dinner at my home`);
}
