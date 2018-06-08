function setDifference(set1, set2){

	
var test1 = set1.filter(x => !set2.includes(x));
var test2 = set2.filter(x => !set1.includes(x));
 return (test1 + test2)

};

module.exports = setDifference;
