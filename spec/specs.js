describe('factorial', function() {

  it ("returns 1 if 0! is input", function() {
    expect(factorial(0)).to.equal(1);
  });

  it ("returns 24 if 4! is input", function() {
    expect(factorial(4)).to.equal(24);
  });

  it ("returns 362880 if 9! is input", function() {
    expect(factorial(9)).to.equal(362880);
  });

});
