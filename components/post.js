import Link from 'next/link'

export default props =>
  <article>
      {props.slug}
    <Link href={{ pathname: '/publisher', query: { slug: props.slug } }} as={`/publisher/${props.slug}`}>
      <a>Read more...</a>
    </Link>
  </article>
