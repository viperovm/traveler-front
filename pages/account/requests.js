import { useEffect } from 'react'
import Account from '../../layouts/account/account'

import Router from 'next/router'

import { connect } from 'react-redux'
import { setPage } from '../../redux/actions/authActions'

const Requests = ({ status, setPage }) => {
  useEffect(() => {
    setPage('requests')
  }, [])

  useEffect(() => {
    if (status === 'customers') {
      Router.push('/does-not-exist')
    }
  }, [status])

  return (
    <Account>
      <>
        {status === 'experts' && (
          <div>Страница Запросов на проверку эксперта</div>
        )}
        {/* {status === 'customers' && <div>Страница профиля клиента</div>} */}
      </>
    </Account>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  status: state.auth.status,
})

export default connect(mapStateToProps, { setPage })(Requests)
