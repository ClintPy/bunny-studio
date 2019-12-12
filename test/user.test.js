process.env.NODE_ENV = "test";

let mongoose = require("mongoose");
let User = require("../models/UserModel");

// Require Dev dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();

chai.use(chaiHttp);

// Parent Block
describe("User", () => {
  beforeEach(done => {
    // Before each test we empty the database
    User.remove({}, err => {
      done();
    });
  });
});

/**
 * Test the /GET route
 */

describe("/GET user", () => {
  it("it should GET all users", done => {
    chai
      .request(server)
      .get("/api/v1/users")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        res.body.length.should.be.eql(0);
        done();
      });
  });
});
