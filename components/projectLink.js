import Link from 'next/link'


export default props =>
  <article>
      {props.slug}
    <Link href={{ pathname: '/project', query: { slug: props.slug } }} as={`/project/${props.slug}`}>
      <a className="example">Read more...</a>
    </Link>
  </article>
