import { useState, useEffect } from 'react'


import NavItem from './NavItem'

const Nav = ({ status }) => {
  const [name, setName] = useState('account')

  const expert = [
    {
      name: 'account',
      title: 'Личный кабинет',
    },
    {
      name: 'tours',
      title: 'Мои туры',
      secondary: true,
    },
    {
      name: 'chat',
      title: 'Чат',
    },
    {
      name: 'profile',
      title: 'Мой профиль',
    },
    {
      name: 'orders',
      title: 'Заказы',
    },
    {
      name: 'settings',
      title: 'Настройка',
    },
    {
      name: 'props',
      title: 'Реквизиты',
    },
    {
      name: 'requests',
      title: 'Запросы на проверку',
    },
    {
      name: 'team',
      title: 'Моя команда',
    },
  ]

  const customer = [
    {
      name: 'account',
      title: 'Личный кабинет',
    },
    {
      name: 'history',
      title: 'История путешествий',
    },
    {
      name: 'bookings',
      title: 'Мои брони',
    },
    {
      name: 'chat',
      title: 'Чат',
    },
    {
      name: 'profile',
      title: 'Настройки профиля',
    },
  ]

  return (
    <>
      <ul>
        {status === 'experts' &&
          expert.map(item => (
            <NavItem
              key={item.name}
              action={setName}
              name={item.name}
              active={name}
              title={item.title}
              secondary={item.secondary}
            />
          ))}
        {status === 'customers' &&
          customer.map(item => (
            <NavItem
              key={item.name}
              action={setName}
              name={item.name}
              active={name}
              title={item.title}
              secondary={item.secondary}
            />
          ))}
      </ul>
    </>
  )
}



export default Nav
