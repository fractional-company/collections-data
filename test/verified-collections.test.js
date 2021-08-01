import VerifiedCollections from "../src";

test("import VerifiedCollections", () => {
  expect.anything(VerifiedCollections);
});


test("data load works", async () => {
  const data = await VerifiedCollections.load()
  expect(data.length).toBeGreaterThan(0);
});
