import { connect } from 'react-redux'
import { increment, doubleAsync } from '../modules/user'
import User from '../components/User'

const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(User)
