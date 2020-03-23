const axios = require("axios");

module.exports = {
    getHike: function (req, res) {
        const location = req.params.location;
        const difficulty = req.params.difficulty;
        const miles = req.params.miles;
        axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
            params: {
                address: location,
                key: process.env.geocode
            }
        })
            .then(response => {
                const { lat, lng } = response.data.results[0].geometry.location;
                getAllHikes(lat, lng);
            })
            .catch(err => {
                return res.status(500).send(err);
            });
        function getAllHikes(lat, lng) {
            axios.get(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lng}&maxDistance=${miles}&maxResults=50&key=${process.env.hikes}`)
                .then(response => {
                    const listDifficulty = {
                        'easy': [
                            'green',
                            'greenBlue'
                        ],
                        'medium': [
                            'blue',
                            'blueBlack'
                        ],
                        'hard': [
                            'black',
                            'blackBlack'
                        ]
                    }
                    function meetsDifficultyLevel(trail) {
                        if (trail.difficulty === listDifficulty[difficulty][0]) {
                            return true;
                        } else if(trail.difficulty === listDifficulty[difficulty][1]) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                    const filteredResults = response.data.trails.filter(meetsDifficultyLevel);
                    return res.status(200).json(filteredResults);
                })
                .catch(err => {
                    return res.status(500).send(err);
                })
        }
    }
}