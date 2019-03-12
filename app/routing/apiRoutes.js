var friends = require('./../data/friends')

module.exports = function (app) {
    app.get('/api/friends',function(req,res){
        res.json(friends)
    })

    // will get inputs from form and sends to server
    app.post('/api/friends',function(req,res){
        friends.push(req.body);
        res.json(req.body)
    })
}

// for the totalDifference, I'm unsure of how to do this but I think we would need to have three variables

//var totalDifference = 0
//var firstpersonScore
//var usersScore

//compare the firstpersonScore against usersScore and index through the scores to return totalDifference