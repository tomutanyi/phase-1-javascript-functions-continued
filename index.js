// code your solution here
function saturdayFun(lawyer = 'roller-skate', target = "This Saturday"){
    return (`${target}, I want to ${lawyer}!`)

}


function mondayWork(lawyer = 'go to the office', target = "This Monday"){
    return (`${target}, I will ${lawyer}.`)

}

function wrapAdjective (special = '||'){
    return function (adjective = "special"){
        return `You are ${special}${adjective}${special}!`;

    };
}