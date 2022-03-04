export const MenuLink = (props) => {
  return <li className="visited:text-white hover:text-violet-600 active:text-violet-700 py-1">
  <a href={props.url}>{props.frequency}</a>
  </li>
}
