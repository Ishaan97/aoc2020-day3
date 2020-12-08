const readFile = require("fs").readFileSync;

const inputs = []

const file = readFile('input.txt', 'utf-8').split('\n').forEach(data => {
    inputs.push(data.trim());
});

const WIDTH = inputs[0].length;

function isTree(inputRow, col){
    return (inputRow[col] === '#')
}
function countNumberOfTrees(inputs, right, down) {
    let treeCount = 0
    let posRow = 0;
    let posCol = 0;    
    while(posRow < inputs.length){
        // console.log(`Position - {${posRow}, ${posCol}}`)
        if(isTree(inputs[posRow], posCol)){
            treeCount++;
        }

        posRow = posRow + down;
        posCol = (posCol+right)%WIDTH;
    }
    console.log(`Trees : ${treeCount} at slope ${right}, ${down}`)
    return treeCount;
}

function countTreesForAllSlopes(inputs){
    slopes = [[1,1], [3,1], [5,1], [7,1], [1,2]]
    let treeCountMultiplied = 1;
    for(slope of slopes)
    {
        treeCountMultiplied *= countNumberOfTrees(inputs, slope[0], slope[1])
    }
    console.log("Tree count multiplied = "+treeCountMultiplied)
}

countTreesForAllSlopes(inputs);