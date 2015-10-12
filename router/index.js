'use strict';

module.exports = function(app) {
    // here we list our individual sets of routes to use in the router
    require('./routes/users')(app);
};