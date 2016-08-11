describe("duplicated array", function() {
  it("duplicates repeated value in ascending order once", function() {
    expect(getDuplicatesArr([2,2,3,3,1,1])).toEqual([1,2,3]);
  });
});


describe("duplicated array", function() {
  it("return empty array if no duplicates", function() {
    expect(getDuplicatesArr([1,2,3])).toEqual([]);
  });
});
