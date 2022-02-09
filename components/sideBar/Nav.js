import { useState, useEffect } from 'react'

import NavItem from './navItem'

const Nav = ({ status }) => {
  const [name, setName] = useState('account')

  const expertTours = [
    { value: 'common', text: 'Общее', completed: true },
    { value: 'prices', text: 'Цены и даты', completed: true },
    { value: 'options', text: 'Условия отмены', completed: false },
    { value: 'details', text: 'Детали', completed: false },
    { value: 'day', text: 'День за днем', completed: false },
    { value: 'leader', text: 'Турлидер', completed: false },
    { value: 'conditions', text: 'Условия', completed: false },
    { value: 'services', text: 'Доп. услуги', completed: false },
    { value: 'important', text: 'Важно знать', completed: false },
    { value: 'photos', text: 'Фотографии', completed: false },
  ]

  const expert = [
    {
      name: 'account',
      title: 'Личный кабинет',
    },
    {
      name: 'tours',
      title: 'Мои туры',
      secondary: expertTours,
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
