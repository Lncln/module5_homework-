// SF Задание 8.
let Hero = new Map([
    ["Level", "99"],

    ["Class", "Wizard"],
    
    ["Primary Attribute",    "Intelligence"]
]);
for (let heroParameters of Hero.keys()) {
    let parametersValues = Hero.get(heroParameters)
    console.log(`Ключ - ${heroParameters}, значение - ${parametersValues}`);
}

// Почему нельзя так?
// let Hero = {Level: 99, Class: 'Wizard', PrimaryAttribute: 'Int'};
// for (let heroParameters in Hero) {
//     let parametersValues = Hero[heroParameters]
//     console.log(`Ключ - ${heroParameters}, значение - ${parametersValues}`);
// }
