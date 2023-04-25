export const load = async ({ fetch }) => {
    try {
        const response = await fetch(
            'http://127.0.0.1:8000/worlds/?id=1'
        )
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`)
        }
        const emerald = await response.json()
        return emerald
    } 
    catch (error) {
        console.error(error)
        return { error: 'Unable to fetch world' }
    }
}
