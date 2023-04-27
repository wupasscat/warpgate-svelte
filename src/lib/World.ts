export const load = async ({ fetch }) => {
    try {
        const response = await fetch(
            'https://wg.wupass.xyz/worlds/?id=1'
        )
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`)
        }
        const world = await response.json()
        return world
    } 
    catch (error) {
        console.error(error)
        return { error: 'Unable to fetch world' }
    }
}
