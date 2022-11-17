const { findServer } = require("../app");
const { data, offlinedata } = require("./utils/data");

describe("Check server is online or offline", () => {
  test("check any of one server is online", async () => {
    const result = await findServer(data);
    expect(result).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({
          status: expect.any(String),
          value: expect.objectContaining({
            url: expect.any(String),
            priority: expect.any(Number),
          }),
        }),
      ])
    );
  });
  test("check all server is offline", async () => {
    const result = await findServer(offlinedata);
    expect(result).toBe("No servers are online");
  });
});
