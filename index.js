


function superbowlWin(record){
  let answer = record.find(game => {
     return game.result === "W"
  })
  if (typeof answer === "object"){
    return answer.year
  } else {
    return undefined
  }
}