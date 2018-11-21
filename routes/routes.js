'use strict';

module.exports = function (app) {
    
    // API ROUTES
    app.route('/api/example')
        .get(function(req, res) {
            res.json({"title": "Example backend api route"});
        });
    
};
