// var friendsData = require("../data/friends.js")

// module.exports = function(app) {
//     app.post("/api/friends", function(req, res) {
//         console.log(req.body)
//         var Friend = function(name, photo, scores){
//             this.name = name;
//             this.photo = photo;
//             this.scores = scores.map(function(score){
//                 return parseInt(score)
//             })
//         }
//         var newFriend = new Friend(req.body.name, req.body.photo, req.body.scores)

//         var totalMatches = [];
//         for (let i = 0; i < friendsData.length; i++) {
//             var matchScore = [];
//             for (let y = 0; y < newFriend.scores.length; y++) {
//                 matchScore.push(Math.abs(newFriend.scores[y] - friendsData[i].scores[y]))
//             }
//             totalMatches.push(matchScore)
//         }

//         function reducer(accumulator, currentValue) {
//             return accumulator + currentValue
//         }
//         var chosenFriendArray = []

//         for (let i = 0; i < totalMatches.length; i++) {
//             chosenFriendArray.push(totalMatches[i].reducer(reducer))
//         }

//         var matchedFriendIndex = Math.min.apply(null, chosenFriendArray)
//         var friendDataIndex = chosenFriendArray.indexOf(matchedFriendIndex)

//         friendsData.push(newFriend)

//         res.json(friendsData[friendDataIndex])
//     })
// }