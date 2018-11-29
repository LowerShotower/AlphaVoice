import React,{ Component } from 'react'
import fetch from 'isomorphic-unfetch'
import "../styles/styles.scss"
import Link from 'next/link';
import Router from 'next/router';

export default class extends Component {

  static async getInitialProps ({ res }) {
      res.redirect('/video/alphavoiceio/');
      /*console.log('1');
      if (!res.headersSent) {
          console.log('2');
          if (typeof res.writeHead === 'function') {
              console.log('3');
              res.writeHead(302, {Location: '/video/alphavoiceio/'});
          }
      }*/


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
