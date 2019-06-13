mocha.setup('bdd');
var expect = chai.expect;

function has(object, key) {
  // viết hàm has để kiểm tra xem object có tồn tại 1 key xác định hay không
  // Tham số:
  //	- object: object cần kiểm tra
  //	- key: key cần kiểm tra xem có tồn tại trong object không
  // Return:
  //	- true nếu có tồn tại
  //	- false nếu không tồn tại
  for(var k in object){
  		if(key==k)
			return true;
  }
  
}

describe('has', function () {
	it('should return true if key exists', function () {
    expect(has({ a: true }, 'a')).to.equal(true);
  });
  
  it('should return true if key exists and value is undefined', function () {
    expect(has({ a: undefined }, 'a')).to.equal(true);
  });
  
  it('should return true if key exists and value is null', function () {
    expect(has({ a: null }, 'a')).to.equal(true);
  });
  
  it('should return true if key exists and has a value', function () {
    expect(has({ a: 5 }, 'a')).to.equal(true);
  });
  
  it('should return false if key does not exist', function() {
  	expect(has({ a: 'something'}, 'b')).to.equal(false);
  });
});

mocha.run();