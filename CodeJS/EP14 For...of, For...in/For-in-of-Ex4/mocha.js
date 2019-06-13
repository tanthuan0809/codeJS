mocha.setup('bdd');
var expect = chai.expect;

function sum(numbers) {
  // Giả thiết: numbers là một array các số nguyên
  // Yêu cầu: 
  //	- trả về tổng các số, dùng vòng lặp for ... of
  //  - nếu array trống trả về 0
  var S=0;
  for( var number of numbers){
		S+=number;
  }
  return S;
}

describe('sum', function () {
	it('should return 0 if array is empty', function () {
    expect(sum([])).to.equal(0);
  });
  
  it('should return the sum if array is not empty', function() {
  	expect(sum([1])).to.equal(1);
    expect(sum([1, 2, 3])).to.equal(6);
  });
});

mocha.run();