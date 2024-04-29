
const writeClipboard = async (text : string) => {
    try {
        await navigator.clipboard.writeText(text)
        return 'Texto copiado al portapapeles'
    } catch (err) {
        console.error('Error al copiar al portapapeles:', err)
    }
}

export default writeClipboard;