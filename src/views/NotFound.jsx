import { UseDynamicTitle } from '../components'

function NotFound() {
  UseDynamicTitle('404');
  return (
    <div>404 - NotFound</div>
  )
}

export default NotFound