mocha.setup('bdd');
var expect = chai.expect;

// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
	var newArr = arr.filter(ele => ele >=5);
	return newArr;
}

describe('first', function () {
	it('case 1', function () {
    expect(fiveAndGreaterOnly([3, 6, 8, 2])).to.eql([6, 8]);
  });
  it('case 2', function () {
    expect(fiveAndGreaterOnly([1, 5, 5])).to.eql([5, 5]);
  });
});

mocha.run();