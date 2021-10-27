const texts = [
    'Ja!'
]

exports.handler = async function (event, context) {
    const text = Math.floor(Math.random() * 7);
    return {
        statusCode: 200,
        body: JSON.stringify({ message: texts[text] })
    };
}
