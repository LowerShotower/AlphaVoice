import React,{ Component } from 'react'
import fetch from 'isomorphic-unfetch'
import "../styles/styles.scss"
import Link from 'next/link';

export default class extends Component {

  static async getInitialProps ({ res }) {

      res.writeHead(302, {
          Location: '/video/alphavoiceio/'
      });
      res.end();

      return {}

  }

  render () {

    return (
      <main>
          <Link href={{ pathname: '/publisher' }} as={`/video/alphavoiceio/`}>
              <a className="example">Publisher "alphavoiceio"</a>
          </Link>
      </main>
    )
  }
}
