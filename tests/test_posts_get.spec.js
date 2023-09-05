const request = require("supertest");
const expect = require("chai").expect;
const config = require("../config/config.json");

var BASEURL = config.baseUrl;

describe("Test Api GET", () => {
  it("Should give ok response", () => {
    request(BASEURL)
      .get("/posts")
      .end((err, res) => {
        expect(res.ok).to.be.true;
      });
  });

  it("Should give 200 response", (done) => {
    request(BASEURL).get("/posts").expect(200, done);
  });
  it("Should give id 1", (err, res) => {
    request(BASEURL)
      .get("/posts")
      .end(err, (res) => {
        expect(res.body.userId[0]).to.be.equal("1");
      });
  });
  it("Should test return body of query by id 4", (done) => {
    request(BASEURL)
      .get("/posts")
      .query({ id: "4" })
      .expect(200, done, { title: "eum et est occaecati", userId: "1" });
  });
});
