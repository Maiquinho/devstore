import data from '../data.json'

export async function GET() {
  const featuredData = data.products.filter((product) => product.featured)

  return Response.json(featuredData)
}
