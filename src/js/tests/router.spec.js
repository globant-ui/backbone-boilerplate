define(
  [
    'src/js/app/router'
  ],
  function(Router) {
    'use strict';

    describe('Router', function() {

      it('should exists', function() {
        var newRouter = new Router();

        expect(newRouter).not.toBeNull();
      });

    });

  }
);
