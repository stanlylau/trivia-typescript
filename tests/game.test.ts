import { Game } from "../src/game";

describe("The test environment", () => {
  it("should pass", () => {
    expect(true).toBe(true);
  });

  it("should access game", function () {
    expect(Game).toBeDefined();
  });
});
