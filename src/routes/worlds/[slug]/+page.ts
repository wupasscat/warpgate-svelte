export async function load({ fetch, params }) {
    const response = await fetch(`http://127.0.0.1/worlds/?id=${params.slug}`)
    const world = await response.json()

    return world
}
