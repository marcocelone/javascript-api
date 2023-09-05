const request = require("supertest");
const expect = require("chai").expect;
const config = require("../config/config.json");

var BASEURL = config.baseUrl;

describe("Test Api POST", () => {
  it("Should give ok response", () => {
    request(BASEURL)
      .post("/posts")
      .set("Content-Type", "application/json")
      .end((err, res) => {
        expect(res.ok).to.be.true;
      });
  });

  it("Should give 201 response", (done) => {
    request(BASEURL)
      .post("/posts")
      .set("Content-Type", "application/json")
      .expect(201, done);
  });
  it("Should test the full response", () => {
    request(BASEURL)
      .post("/posts")
      .send({ userId: 11, title: "Spiral test", body: "spiral body" })
      .set("Content-Type", "application/json")
      .end((err, res) => {
        // console.log(res)
        expect(res.statusCode).to.be.equal(201);
        expect(res.body.userId).to.be.equal(11);
        expect(res.body.id).to.be.equal(101);
        expect(res.body.title).to.be.equal("Spiral test");
        expect(res.body.body).to.be.equal("spiral body");
      });
  });
  it("Should send and empy json in body", () => {
    request(BASEURL)
      .post("/posts")
      .send({})
      .set("Content-Type", "application/json")
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(201);
        expect(res.body.id).to.be.equal(101);
      });
  });
  it("Should send a post without body", () => {
    request(BASEURL)
      .post("/posts")
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(201);
      });
  });
});
