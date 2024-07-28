export {};
let guest_List: string[] = ["usman", "humail", "ashir"];
for (let i = 0; i < guest_List.length; i++) {
	console.log(`Hi ${guestList[i]}, I invite you for a dinner at my home`);
}
let guestHoCantMakeit: string = guestList[1];
console.log(`\n\t${guestHoCantMakeit}, can't make it to the dinner
`);

guest_List[1] = "Afaq";
for (let i = 0; i < guest_List.length; i++) {
	console.log(` Hi ${guest_List[i]}, I invite you for a dinner at my home`);
}
console.log("\n\t i just found a bigger dinner table.\n");

guest_List.unshift("Moazan");

const indexToInsert = 2;
const newValue = "fahad";
guest_List.splice(indexToInsert, 0, newValue);

guest_List.push("wasi");

for (let i = 0; i < guest_List.length; i++) {
	console.log(` Hi ${guest_List[i]}, I invite you for a dinner at my home`);
}
