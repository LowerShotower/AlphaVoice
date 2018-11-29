import React,{ Component } from 'react'
import fetch from 'isomorphic-unfetch'
import "../styles/styles.scss"
import Link from 'next/link';
import Router from 'next/router';

export default class extends Component {

  static async getInitialProps ({ res }) {

      if(res){
          res.writeHead(302, {
              Location: '/video/alphavoiceio/'
          });
          res.end();
      } else {
          Router.push('/video/alphavoiceio/');
      }


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
