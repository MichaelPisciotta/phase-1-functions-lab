// Code your solution in this file!

function distanceFromHqInBlocks(startingBlock) {
    if (startingBlock > 42){
        return startingBlock - 42
    } else if (startingBlock < 42){
        return 42 - startingBlock
    } else {
        return 0
    }
}




function distanceFromHqInFeet(startingBlock) {
    return distanceFromHqInBlocks(startingBlock) * 264

}



function distanceTravelledInFeet(startingBlock, stoppingBlock) {
    let blockDistance;
    if (startingBlock > stoppingBlock){
         blockDistance = startingBlock - stoppingBlock
    } else if(startingBlock < stoppingBlock){
        blockDistance = stoppingBlock - startingBlock
    } else {
        blockDistance = 0
    }
    return blockDistance * 264
    
}


function calculatesFarePrice(startingBlock, stoppingBlock) {
    let feetDistance = distanceTravelledInFeet(startingBlock, stoppingBlock)
    if (feetDistance <= 400){
        return 0
    } else if(feetDistance > 400 && feetDistance < 2000) {
        return 0.02 * (feetDistance - 400)
    } else if (feetDistance > 2000 && feetDistance <= 2500){
        return 25
    } else {
      return  'cannot travel that far'
    }

}


