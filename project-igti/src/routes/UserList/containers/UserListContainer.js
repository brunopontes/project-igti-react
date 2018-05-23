import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { getContactService } from '../modules/userlist'
import UserList from '../components/UserList'


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getContactService
  }, dispatch)
}

const mapStateToProps = (state) => ({
  userlist: state.userlist
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
