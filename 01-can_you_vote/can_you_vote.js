// define a function that will check if I can vote or not
const canIVote = legalAge => {
    // define a variable legalAge
legalAge = 18;
age = Math.ceil(Math.random()*50)
    // create if else statement that console.log() if you can vote or not
    if (legalAge <= age) {
        return(console.log(`you are old ${age} years, you can vote`))
    } else {
        return(console.log(`you are old ${age} years, you can't vote`))
    }
}


// define a variable for your age

// call the function and see if you can vote
canIVote(16);