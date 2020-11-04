window.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search)
    const teamId = urlParams.get("id")

    const data = await Api.getTeam(teamId)
    renderDetail(data)
    saveTeam(data)
})

function renderDetail(data) {
    console.log(data)
    const container = document.getElementById('detail')
    const detail =
        `<div>
            <img src="${data.crestUrl}"/>
            <h2>${data.name}</h2>
        </div>`

    container.innerHTML = detail
}

// function saveTeam(data) {
//     const button = document.getElementById('save')

//     button.addEventListener('click', () => {
//         Db.addTeam(data)
//         console.log('Ditambahkan ke favorite!')
//     })
// }

async function saveTeam(data) {
    const button = document.getElementById('save')
    if (await Db.getTeam(data.id)) {
        button.innerHTML = 'delete'
    }

    button.addEventListener('click', async () => {
        let exist = await Db.getTeam(data.id)

        if (exist) {
            Db.deleteTeam(data.id)
            button.innerHTML = 'bookmark'
            console.log('Team berhasil dihapus!')
        } else {
            Db.addTeam(data)
            button.innerHTML = 'delete'
            console.log('Team berhasil ditambahkan!')
        }
    })
}