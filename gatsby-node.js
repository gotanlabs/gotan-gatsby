const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // CREACION DE PAGINAS DE ARTÍCULO
  const { data: pageQueryData } = await graphql(`
    query Pages {
        allSanityLandings {
            nodes {
              slug {
                current
              }
            }
          }
    }
  `)

  if (pageQueryData.errors) {
    reporter.panicOnBuild("Error creando paginas")
  }

  pageQueryData.allSanityLandings.nodes.forEach(node => {
    const page = path.resolve("./src/templates/page.js")
    createPage({
      path: "/" + node.slug.current,
      component: page,
      context: { slug: node.slug.current },
    })
  })
}