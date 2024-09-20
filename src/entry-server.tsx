import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import Router from './router'

interface IRenderProps {
  path: string
}

export function render({ path }: IRenderProps) {
  const html = ReactDOMServer.renderToString(
    
      <StaticRouter location={path} >
        <Router />
      </StaticRouter>

  )
  return { html }
}
