import { niceDuration } from "../helpers/niceDuration";

describe("nice duration works correctly", () => {
  test("less than a minute", () => {
    expect(niceDuration(new Date(Date.now() - 100))).toEqual(
      "less than a minute ago"
    );
  });

  // I probably should not test this since this is from date-fns
  test("more than a minute", () => {
    // 45 days 3 hours 25 minutes 13 seconds ago
    expect(
      niceDuration(
        new Date(Date.now() - 1000 * (86400 * 45 + 3600 * 3 + 25 * 60 + 13))
      )
    ).toEqual("1 month 15 days 3 hours 25 minutes ago");
  });
});
