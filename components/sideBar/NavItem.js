import Image from 'next/image'
import { useState, useEffect } from 'react'
import {
  HomeOutlined,
  GlobalOutlined,
  CommentOutlined,
  UserOutlined,
  UnorderedListOutlined,
  SettingOutlined,
  CreditCardOutlined,
  CheckCircleOutlined,
  TeamOutlined,
} from '@ant-design/icons'
import Link from 'next/link'
import { connect } from 'react-redux'
import {
  setPage,
} from '../../redux/actions/authActions'
import SecondaryNav from './SecondaryNav'
// import SvgColor from 'react-svg-color'

const NavItem = ({ page, setPage, action, name, active, title, secondary }) => {
  
  return (
    <>
      <li
        onClick={() => setPage(name)}
        className={`sidebar-menu-items ${page === name ? 'active' : ''} ${
          secondary && name === page && 'with-submenu'
        }`}
      >
        <Link href={name === 'account' ? '/' + name : '/account/' + name}>
          <a>
            <div
              className={`account-sidebar-menu-icon ${
                name === page ? 'active' : ''
              }`}
            >
              {name === 'account' && (
                <HomeOutlined
                  style={{
                    color: `${name === page ? '#2898cd' : '#000'}`,
                  }}
                />
              )}
              {name === 'tours' && (
                <GlobalOutlined
                  style={{
                    color: `${name === page ? '#2898cd' : '#000'}`,
                  }}
                />
              )}
              {name === 'history' && (
                <GlobalOutlined
                  style={{
                    color: `${name === page ? '#2898cd' : '#000'}`,
                  }}
                />
              )}
              {name === 'chat' && (
                <CommentOutlined
                  style={{
                    color: `${name === page ? '#2898cd' : '#000'}`,
                  }}
                />
              )}
              {name === 'profile' && (
                <UserOutlined
                  style={{
                    color: `${name === page ? '#2898cd' : '#000'}`,
                  }}
                />
              )}
              {name === 'orders' && (
                <UnorderedListOutlined
                  style={{
                    color: `${name === page ? '#2898cd' : '#000'}`,
                  }}
                />
              )}
              {name === 'bookings' && (
                <UnorderedListOutlined
                  style={{
                    color: `${name === page ? '#2898cd' : '#000'}`,
                  }}
                />
              )}
              {name === 'settings' && (
                <SettingOutlined
                  style={{
                    color: `${name === page ? '#2898cd' : '#000'}`,
                  }}
                />
              )}
              {name === 'props' && (
                <CreditCardOutlined
                  style={{
                    color: `${name === page ? '#2898cd' : '#000'}`,
                  }}
                />
              )}
              {name === 'requests' && (
                <CheckCircleOutlined
                  style={{
                    color: `${name === page ? '#2898cd' : '#000'}`,
                  }}
                />
              )}
              {name === 'team' && (
                <TeamOutlined
                  style={{
                    color: `${name === page ? '#2898cd' : '#000'}`,
                  }}
                />
              )}
            </div>
            {title}
          </a>
        </Link>
      </li>
      {secondary && name === page && <SecondaryNav data={secondary} />}
    </>
  )
}

const mapStateToProps = state => ({
  page: state.auth.page
})

export default connect(mapStateToProps, { setPage })(NavItem)
