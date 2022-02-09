import { useEffect } from 'react'
import Account from '../../layouts/account/account'

import { connect } from 'react-redux'
import { setPage } from '../../redux/actions/authActions'

const MyProfile = ({ status, setPage }) => {
  useEffect(() => {
    setPage('profile')
  }, [])

  return (
    <Account>
      <>
        {status === 'experts' && <div>Страница профиля эксперта</div>}
        {status === 'customers' && <div>Страница профиля клиента</div>}
      </>
    </Account>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  status: state.auth.status,
})

export default connect(mapStateToProps, { setPage })(MyProfile)
