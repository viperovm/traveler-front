import { useEffect } from 'react'
import Account from '../../layouts/account/account'

import Router from 'next/router'

import { connect } from 'react-redux'
import { setPage } from '../../redux/actions/authActions'

const History = ({ status, setPage }) => {
  useEffect(() => {
    setPage('history')
  }, [])

  useEffect(() => {
    if (status === 'experts') {
      Router.push('/does-not-exist')
    }
  }, [status])

  return (
    <Account>
      <>
        {/* {status === 'experts' && <div>Страница реквизитов эксперта</div>} */}
        {status === 'customers' && <div>Страница истории путешествий клиента</div>}
      </>
    </Account>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  status: state.auth.status,
})

export default connect(mapStateToProps, { setPage })(History)
