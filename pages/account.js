import {useState, useEffect} from 'react'
import MainLayout from "../layouts/MainLayout"

import { connect } from 'react-redux'
import SideBar from '../components/SideBar'
import ExpertAccount from '../components/ExpertAccount/ExpertAccount'
import MyTours from '../components/ExpertAccount/MyTours'
import Chat from '../components/ExpertAccount/Chat'
import MyProfile from '../components/ExpertAccount/MyProfile'
import Orders from '../components/ExpertAccount/Orders'
import Settings from '../components/ExpertAccount/Settings'
import Props from '../components/ExpertAccount/Props'
import Requests from '../components/ExpertAccount/Requests'
import MyTeam from '../components/ExpertAccount/MyTeam'

import { load_user } from '../redux/actions/authActions'

const Account = ({ load_user, expert }) => {
  const [active, setActive] = useState('account')
  const [page, setPage] = useState(<ExpertAccount expert={expert} />)
  const [avatarLetter, setAvatarLetter] = useState('')


  useEffect(() => {
    load_user()
  }, [])


  useEffect(() => {
    if (expert) {
      if (expert.name) {
        setAvatarLetter(expert.name[0])
      } else if (expert.email) {
        setAvatarLetter(expert.email[0])
      } else {
        setAvatarLetter('#')
      }
    }
  }, [expert])

  

  return (
    <MainLayout>
      <>
        <section>
          <div className='wrapper'>
            <div className='breadcrumbs breadcrumbs_margin'>
              <span>Главная</span> - <span>Личный кабинет</span>
            </div>
          </div>
        </section>

        <section>
          <div className='wrapper'>
            <div className='account_block'>
              <SideBar action={setActive} active={active} />
              {active === 'account' && (
                <ExpertAccount expert={expert} letter={avatarLetter} />
              )}
              {active === 'tours' && (
                <MyTours expert={expert} />
              )}
              {active === 'chat' && (
                <Chat expert={expert} />
              )}
              {active === 'profile' && (
                <MyProfile expert={expert} />
              )}
              {active === 'orders' && (
                <Orders expert={expert} />
              )}
              {active === 'settings' && (
                <Settings expert={expert} />
              )}
              {active === 'props' && (
                <Props expert={expert} />
              )}
              {active === 'requests' && (
                <Requests expert={expert} />
              )}
              {active === 'team' && (
                <MyTeam expert={expert} />
              )}
             
            </div>
          </div>
        </section>
      </>
    </MainLayout>
  )
}

const mapStateToProps = state => ({
  expert: state.auth.expert
})

export default connect(mapStateToProps, { load_user })(Account)