const request = require("supertest");
const expect = require("chai").expect;
const config = require("../config/config.json");

var BASEURL = config.baseUrl;

describe("Test Api DELETE", () => {
  it("Should give ok response", () => {
    request(BASEURL)
      .delete("/posts")
      .end((err, res) => {
        expect(res.ok).to.be.false;
      });
  });

  it("Should return 404 when try to delete", () => {
    request(BASEURL)
      .delete("/posts")
      .send({ userId: 11, title: "Spiral test", body: "spiral body" })
      .set("Content-Type", "application/json")
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(404);
      });
  });
  it("Should return 404 when delete with query", () => {
    request(BASEURL)
      .delete("/posts?userId=1&id=1")
      .set("Content-Type", "application/json")
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(404);
      });
  });
});
