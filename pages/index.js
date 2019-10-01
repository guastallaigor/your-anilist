
import App from '../components/App'
import MainHero from '../components/MainHero'
import Header from '../components/Header'
import Waves from '../components/Waves'
import PostList from '../components/PostList'
import { withApollo } from '../lib/apollo'
import '../styles/index.css'

const IndexPage = props => (
  <App>
    <Header />
    <MainHero />
    <Waves />
    <PostList />
  </App>
)

export default withApollo(IndexPage)
