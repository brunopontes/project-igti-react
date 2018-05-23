import { connect } from 'react-redux'
import { increment, doubleAsync } from '../modules/home'

import Home from '../components/Home'

const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
    home: state.home
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
