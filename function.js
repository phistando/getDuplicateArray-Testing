function getDuplicatesArr(arr) {

    var count = {};
    resultArr = [];

    for (var i = 0; i < arr.length; i++) {
      var item = arr[i];
      count[item] = count[item] >=1 ? count[item] += 1 : 1;
      if(count[item] == 2){
        resultArr.push(item);
      }
    }
    resultArr = resultArr.sort();
    return resultArr;
}
