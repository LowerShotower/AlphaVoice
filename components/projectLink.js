import Link from 'next/link'

export default props =>
  <article>
      {props.slug}
    <Link href={{ pathname: '/show', query: { slug: props.slug } }} as={`/video/alphavoiceio/${props.slug}`}>
      <a className="example">Read more...</a>
    </Link>
  </article>
