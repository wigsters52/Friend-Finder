const friends = require('../data/friends.js')

//routing apiroutes with get and post functions

module.exports = function (app) {
    app.get('/api/friends', function (req, res){
        res.json(friends)
    })
    //when a user submits a form 
    app.post('/api/friends', function (req, res){
        //looping through all of the outcomes
        var bestMatch = {
            name: '',
            photo:'',
            friendDifference: 1000
        }
        const userData = req.body
        const userScores = UserData.userScores
        const userName = userData.name
        const userPhoto = userData.photo

        let totalDiffernce = 0
        //loop through the friends data array of objects to get each friends scores
        for (var i = 0; i < friends.length - 1; i++) {
            console.log(friends[i].name)
            totalDiffernce = 0

        //looping through scores
        for (var j = 0; j < 10; j++) {
        //difference between scrore
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
                
                if (totalDifference <= bestMatch.friendDifference) {

                    
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }
        friends.push(userData);

        res.json(bestMatch);

    })
}
