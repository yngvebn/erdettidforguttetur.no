const texts = [
    'Ja!'
]

exports.handler = async function (event, context) {
    const text = 0;
    return {
        statusCode: 200,
        body: JSON.stringify({ message: texts[text] })
    };
}
