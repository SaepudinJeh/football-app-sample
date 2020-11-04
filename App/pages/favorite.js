window.addEventListener('DOMContentLoaded', async () => {
    const data = await Db.getAllTeams()
    renderFavorites(data)
})

function renderFavorites(data) {
    console.log(data)
    const contsiner = document.getElementById('favorites')
    const list = data.map(team => (
        `<div>
            <a href="detail.html?id=${team.id}">${team.name}</a>
        </div>`
    )).join('')

    contsiner.innerHTML = list
}