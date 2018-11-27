import { Component } from 'react'
import fetch from 'isomorphic-unfetch'

export default class extends Component {
  static async getInitialProps (ctx) {

      const response = await fetch(`https://app.alphavoice.io/api/v1/app/?publisher=alphavoiceio&slug=${ctx.query.slug}`);
      const data = await response.json();
      let app_id = data.results[0].app_id;
      return { app_id };
  }

  render () {
    return (
      <main>
          { this.props.app_id}
      </main>
    )
  }
}
