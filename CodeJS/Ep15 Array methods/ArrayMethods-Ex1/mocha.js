mocha.setup('bdd');
var expect = chai.expect;

function removeEnd(arr, n) {
/*
	Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array
*/
	//var a;
	for(i=0;i<n;i++){
		arr.pop();
	}
	return arr;
}

console.log(removeEnd([2, 3, 1, 8, 9, 7], 3));

describe('removeEnd', () => {
  it('Remove n elements from the endof an given array', () => {
    expect(removeEnd([2, 3, 1, 8, 9, 7], 3)).to.eql([2, 3, 1]);
  });
});

mocha.run();