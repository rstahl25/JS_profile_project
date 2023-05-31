// JS Portfolio Project 
// Build a program to randomly return 
//   a message to the user each time the
//   program is run.
// Ryan Stahl
// May 31, 2023

const chooseLOZMessage = messages => {
    let max = messages.length;
    let message = messages[Math.floor(Math.random() * max)];

    return message;
}

const chooseLuckyNumber = nums => {
    let finalNum = 0;

    for(let ctr = 0; ctr < 4; ctr++)
    {
        finalNum += nums[Math.floor(Math.random() * nums.length)];
    }
    return finalNum;
}

const chooseDog = dogs => {
    return dogs[Math.floor(Math.random() * dogs.length)];
}

const options = [
    "It's dangerous to go alone! Take this!.",
    "Thank you, Master Link. May we meet again in another life.",
    "A sword weilds no strength unless the hand that holds it has courage.",
    "Courage need not be remembered, for it is never forgotten.",
    "Shadow and light are two sides of the same coin. One cannot exist without the other.",
    "The flow of time is always cruel... Its speed seems different for each person, but no one can change it...",
    "Whenever there is a meeting, a parting is sure to follow. However, that parting needs not last forever.",
    "This news has just filled my heart with rainbows!"
];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const dogs = [
    {breed: 'Husky', name: 'Sparky', age: 4}, 
    {breed: 'German Shepherd', name: 'Sarge', age: 6}, 
    {breed: 'Greyhound', name: 'Loki', age: 2}
];

const randMessage = chooseLOZMessage(options);
const luckyNumber = chooseLuckyNumber(numbers);
const newDog = chooseDog(dogs);

console.log("Welcome user, to my message generator!I will be giving you three different random messages.");
console.log("First, I will randomly give you a quote from the Legend of Zelda series.");
console.log("Second, I will give you a random lucky number.\nFinally, I will give you a random dog to play with chosen out of three!\n");

console.log("1. Here is the Legend of Zelda message: '" + randMessage + "'.");
console.log("2. Here is your lucky number for today: " + luckyNumber);
console.log("3. Here is your dog: \nName: " + newDog.name + "\nBreed: " + newDog.breed + "\nAge: " + newDog.age);



