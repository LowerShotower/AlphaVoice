const fetch = require('isomorphic-unfetch')

const withSass = require('@zeit/next-sass')

module.exports = withSass({
  async exportPathMap () {
    // we fetch our list of posts, this allow us to dynamically generate the exported pages
      const response = await fetch(`https://app.alphavoice.io/api/v1/app/?publisher=alphavoiceio`)
      const data = await response.json()
      let slugs = data.results.map((result) => result.slug);

    // tranform the list of posts into a map of pages with the pathname `/post/:id`
    const pages = slugs.reduce(
      (pages, slug) =>
        Object.assign({}, pages, {
          [`video/alphavoiceio/${slug}`]: {
            page: '/show',
            query: { slug }
          }
        }),
      {}
    );

    // combine the map of post pages with the home
    return Object.assign({}, pages, {
        '/': { page: '/' },
        '/video/alphavoiceio/': { page: '/publisher' }
    })
  }
});

