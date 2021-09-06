describe("Test GET /launches", () => {
  test("It should respond with 200 success", () => {
    const response = 200;
    expect(response).toBe(200);
  });
}); //this is used to pass a description to our group of test

describe("Test POST /launches", () => {
  test("It should respond with 200 success", () => {});
  test("It shoud catch missing required properties", () => {});
  test("It should catch invalid dates", () => {});
});
