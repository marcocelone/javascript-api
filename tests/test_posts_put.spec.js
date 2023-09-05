const request = require("supertest");
const expect = require("chai").expect;
const config = require("../config/config.json");

var BASEURL = config.baseUrl;

describe("Test Api PUT", () => {
  it("Should return 404 when try to update with put", () => {
    request(BASEURL)
      .put("/posts")
      .send({ userId: 11, title: "Spiral test", body: "spiral body" })
      .set("Content-Type", "application/json")
      .end((err, res) => {
        // console.log(res)
        expect(res.statusCode).to.be.equal(404);
      });
  });
  it("Should return 404 when try to update with put", () => {
    request(BASEURL)
      .put("/posts")
      .set("Content-Type", "application/json")
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(404);
      });
  });
});
