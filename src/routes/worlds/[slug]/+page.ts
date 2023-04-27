export async function load({ fetch, params }) {
    const response = await fetch(`https://wg.wupass.xyz/worlds/?id=${params.slug}`)
    const world = await response.json()

    return world
}
