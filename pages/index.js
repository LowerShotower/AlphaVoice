import React,{ Component } from 'react'
import fetch from 'isomorphic-unfetch'
import "../styles/styles.scss"
import ProjectLink from '../components/projectLink'

export default class extends Component {

  static async getInitialProps () {

      const response = await fetch(`https://app.alphavoice.io/api/v1/app/?publisher=alphavoiceio`);
      const data = await response.json();
      let slugs = data.results.map((result) => result.slug);
      return { slugs };

  }

  render () {

    return (
      <main>
        <section>
          {
              this.props.slugs.map((slug,id) => <ProjectLink slug={slug} key={id} />)
          }
        </section>
      </main>
    )
  }
}
