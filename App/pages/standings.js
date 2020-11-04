window.addEventListener('DOMContentLoaded', async () => {
    const data = await Api.getStandings()
    renderStandings(data)
})

function renderStandings(data) {
    console.log(data)
    const container = document.getElementById('standings')
    const list = data.standings[0].table.map(item => (
        `<div>
            <a href="pages/detail.html?id=${item.team.id}">${item.team.name}</a>
        </div>`
    )).join('')

    container.innerHTML = list
}