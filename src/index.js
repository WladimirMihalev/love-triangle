/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = [])
  {
    let array = preferences;
    let triangles = array.filter(function (item,index,array) {
       var secondValue=array[item-1];
       var thirdValue=array[secondValue-1];
        return (thirdValue-1 === index)&&(item!==index+1);
    });
   
    return triangles.length/3;
};
/*x = i+ 1+1
y = i+1

1,2,3
2,3,1  
0,1,2  
array  

   /**
    1st Spichonee loves 2nd Spichonee.
    2nd Spichonee loves 3rd Spichonee.
    3rd Spichonee love 1st Spichonee.
    There is love triangle.
  */