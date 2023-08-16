// テストスイート
describe("true is truthy and false is falsy", () => {
  // テストケース
  test("true is truthy", () => {
    expect(true).toBe(true);
  });
  // テストケース
  it("false is falsy", () => {
    expect(false).toBe(false);
  });
});
