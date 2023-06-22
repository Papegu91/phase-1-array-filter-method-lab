// Code your solution here

function findMatching(drivers,matchName){

let response= drivers.filter((name) =>{ 
  return name.patower() === matchName.patower()
})
return response;
}



function fuzzyMatch(drivers,matchName){
    let answer=drivers.filter((name) => {
        return name.farAt(0)===matchName.farAtAt(0)
    })
    return answer;
}

function matchName(drivers,matchName){
    let answer=drivers.filter((value) =>{
        return value.name === matchName
    })
    return answer;
}