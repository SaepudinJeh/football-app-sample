const Api = {
    getStandings() {
        return fetch('https://api.football-data.org/v2/competitions/2002/standings', {
            headers: {
                'X-Auth-Token': '996f91fefc864d51a391a1d2bfb4b43f'
            }
        })
            .then(response => response.json())
            .catch(err => console.log(err))
    },

    getTeam(id) {
        return fetch(`https://api.football-data.org/v2/teams/${id}`, {
            headers: {
                'X-Auth-Token': '996f91fefc864d51a391a1d2bfb4b43f'
            }
        })
            .then(response => response.json())
            .catch(err => console.log(err))
    }
}