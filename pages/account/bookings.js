import { useEffect } from 'react'
import Account from '../../layouts/account/account'

import Router from 'next/router'

import { connect } from 'react-redux'
import { setPage } from '../../redux/actions/authActions'

const Bookings = ({ status, setPage }) => {
  useEffect(() => {
    setPage('bookings')
  }, [])

  useEffect(() => {
    if (status && status === 'experts') {
      Router.push('/does-not-exist')
    }
  }, [status])

  return (
    <Account>
      <>
        {/* {status === 'experts' && <div>Страница команды эксперта</div>} */}
        {status === 'customers' && <div>Страница броней клиента</div>}
      </>
    </Account>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  status: state.auth.status,
})

export default connect(mapStateToProps, { setPage })(Bookings)
