import React,{ Component } from 'react'
import fetch from 'isomorphic-unfetch'
import "../styles/styles.scss"
import Link from 'next/link';
import Router from 'next/router';

export default class extends Component {

  static async getInitialProps ({res}) {


      /*if(res) {

      }
      else {
          console.log(window.location.href);
          window.location.href = '/video/alphavoiceio/';
      }*/

      return {};

  }

    componentDidMount() {
        window.location.href = '/video/alphavoiceio/';
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
