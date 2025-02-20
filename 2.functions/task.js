function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = arr[0];
  for(let i=1; i< arr.length; i++){
    if (min > arr[i]){
      min = arr[i];
    }

    if (max < arr[i]){
      max = arr[i];
    }

    sum+=arr[i];

  }
  let avg = sum / arr.length;
  avg = Number(avg.toFixed(2));

  return { min: min, max: max, avg: avg };
}


function summElementsWorker(...arr) {
  return arr.reduce((sum, current)=> sum + current, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length ===0){
    return 0;
  }
  return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
  
  let sumEvenElements = arr.filter(element => element % 2 === 0 ).reduce((sum, current)=> sum + current, 0);
  let sumOddElements = arr.filter(element => element % 2 === 1 ).reduce((sum, current)=> sum + current, 0);
  
 return sumEvenElements - sumOddElements;
}



function averageEvenElementsWorker(...arr) {
  
  let evenElements = arr.filter(element => element % 2 === 0 )
  if(evenElements.length===0){
    return 0;
  }
  let avg = evenElements.reduce((sum, current)=> sum + current, 0) / evenElements.length;
  return avg;

}



function makeWork (arrOfArr, func) {
  let maxWorkerResults = [];
  for(let i=0; i< arrOfArr.length; i++){
    maxWorkerResults.push(func(...arrOfArr[i]));
  }
  return Math.max(...maxWorkerResults);
}
