const texts = [
    'Nope',
    'Nei, ikke akkurat nå...',
    'Kanskje vente til pandemien er over?',
    'NEI!',
    'Nah',
    'Helst ikke',
    `<a href="https://bit.ly/2PKucCJ" target="_blank">Les mer her!</a>`
]

exports.handler = async function (event, context) {
    const text = Math.floor(Math.random() * 7);
    return {
        statusCode: 200,
        body: JSON.stringify({ message: texts[text] })
    };
}