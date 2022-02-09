import { useEffect } from 'react'
import Account from '../../layouts/account/account'

import Router from 'next/router'

import { connect } from 'react-redux'
import { setPage } from '../../redux/actions/authActions'

const Props = ({ status, setPage }) => {
  useEffect(() => {
    setPage('props')
  }, [])

  useEffect(() => {
    if (status === 'customers') {
      Router.push('/does-not-exist')
    }
  }, [status])

  return (
    <Account>
      <>
        {status === 'experts' && <div>Страница реквизитов эксперта</div>}
        {/* {status === 'customers' && <div>Страница профиля клиента</div>} */}
      </>
    </Account>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  status: state.auth.status,
})

export default connect(mapStateToProps, { setPage })(Props)
