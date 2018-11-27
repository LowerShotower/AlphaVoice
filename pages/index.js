import React,{ Component } from 'react'
import fetch from 'isomorphic-unfetch'
import "../styles/styles.scss"
import Post from '../components/post'

export default class extends Component {

  static async getInitialProps () {
    // fetch list of posts
      const response = await fetch(`https://app.alphavoice.io/api/v1/app/?publisher=alphavoiceio`)
      const data = await response.json()
      let slugs = data.results.map((result) => result.slug);
      return { slugs };
  }

  render () {

    return (
      <main>
        <section>
          {
              this.props.slugs.map((slug,id) => <Post slug={slug} key={id} />)
          }
        </section>
      </main>
    )
  }
}
