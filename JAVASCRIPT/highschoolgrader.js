const testScores = [85, 90, 78, 92, 88];
const average = testScores.reduce((total, score) => total + score, 0) / testScores.length;

console.log("Average test score:", average);