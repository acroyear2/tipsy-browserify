var browserify = require('browserify'),
    assert = require('assert');

describe('browserify the tipsy plugin', function () {

  it('should be browserifiable', function (done) {
    var b = browserify(['./jquery.tipsy.js']);
    var bundle = b.bundle();

    bundle.on('error', function (e) {
      throw e;
    });

    bundle.on('end', done);
  });

});
