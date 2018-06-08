module.exports = function (setIntersection)(set1, set2){



//difference = set1.filter(function(x) {
 //return set2.indexOf(x) < 0 })


let case2 =  set1.filter(x => !set2.has(x));

return case2
};