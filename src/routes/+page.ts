export const load = async ({ fetch }) => {
    try {
        const response = await fetch(
            'https://wg.wupass.xyz/worlds/?id=1'
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
