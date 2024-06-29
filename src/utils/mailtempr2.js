let temps = (data) => {
    let f = `
<p>Heres the customer data</p>
`
    let items = Object.keys(data).map(r => {
        return `<p><b>${r}: </b>${data[r]}</p>`
    })


    return f + items.join('')
}



module.exports = temps