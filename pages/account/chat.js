import { useEffect } from 'react'
import Account from '../../layouts/account/account'

import { connect } from 'react-redux'
import {
  setPage,
} from '../../redux/actions/authActions'

const Chat = ({ status, setPage }) => {
  useEffect(() => {
    setPage('chat')
  }, [])

  return (
    <Account>
      <>
        {status === 'experts' && (
            <div>
                Страница чата эксперта
            </div>
        )}
        {status === 'customers' && (
            <div>
                Страница чата клиента
            </div>
        )}
      </>
    </Account>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  status: state.auth.status,
})

export default connect(mapStateToProps, { setPage })(Chat)
