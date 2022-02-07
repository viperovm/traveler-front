import { useState, useEffect } from 'react'
import { getTourTypes } from '../../redux/actions/toursActions'
import { connect } from 'react-redux'

const MyTours = ({ getTourTypes, toursTypes }) => {
  useEffect(() => {
    getTourTypes()
  }, [])

  const [status, setStatus] = useState({
    common: false,
    prices: false,
    options: false,
    details: false,
    day: false,
    leader: false,
    conditions: false,
    services: false,
    important: false,
    photos: false,
  })

  const [data, setData] = useState({
      direct_link: false,
    name: '',
    basic_type: '',
    additional_types: [],
    is_draft: false,
    is_active: false,
    on_moderation: false,
    wallpaper: '',
    week_recurrent: false,
    month_recurrent: false,
    description: '',
    plan: '',
    cancellation_terms: '',
    difficulty_level: null,
    difficulty_description: '',
    comfort_level: null,
    babies_alowed: false,
    animals_not_exploited: false,
    expert: null,
    start_region: null,
    finish_region: null,
    start_country: null,
    finish_country: null,
    start_city: null,
    finish_city: null,
  })

  return (
    <>
      <main>
        <div className='my-tours-heading'>
          <h2>{data.name ? data.name : 'Название тура'}</h2>
        </div>
        <div className='control-buttons'>
          <div className='control-buttons-set'>
            <button>Удалить</button>
            <button>Создать копию</button>
            <button>Предпросмотр</button>
          </div>
          <div className='control-buttons-set'>
            <button>В черновик</button>
            <button className='button-green'>На модерацию</button>
          </div>
        </div>
        <div className='common-section'>
          <div className='my-tours-section-heading'>
            <h4>Общее</h4>
          </div>
          <div className='my-tours-input-section'>
            <div className='input-label'>Название тура</div>
            <div className='my-tours-input-full'>
              <input
                value={data.name}
                type='text'
                onChange={e =>
                  setData({
                    ...data,
                    name: e.target.value,
                  })
                }
              />
              <div className='my-tours-input-explanations'>
                Максимум 50 символов
              </div>
            </div>
          </div>
          <div className='my-tours-input-section'>
            <div className='input-label'>Основной тип тура</div>
            <div className='my-tours-input-full'>
              <select
                onChange={e =>
                  setData({
                    ...data,
                    basic_type: e.target.value,
                  })
                }
              >
                <option selected>Выбрать</option>

                {toursTypes &&
                  toursTypes.map(item => (
                    <option value={item.id} key={item.id}>
                      {item.name}
                    </option>
                  ))}
              </select>
              <div className='my-tours-input-explanations'></div>
            </div>
          </div>
          <div className='my-tours-input-section'>
            <div className='input-label'>Дополнительные типы тура</div>
            <div className='my-tours-input-full'>
              <select
                onChange={e =>
                  setData({
                    ...data,
                    additional_types: e.target.value,
                  })
                }
              >
                <option selected>Выбрать</option>
                {toursTypes &&
                  toursTypes.map(item => (
                    <option value={item.id} key={item.id}>
                      {item.name}
                    </option>
                  ))}
              </select>
              <div className='my-tours-input-explanations'>
                Основной тип тура отображается в карточке тура в каталоге. Все
                возможные типы туров вы можете посмотреть здесь
              </div>
            </div>
          </div>
          <div className='my-tours-input-section'>
            <div className='input-label'>Страна тура</div>
            <div className='my-tours-input-full'>
              <select
                onChange={e =>
                  setData({
                    ...data,
                    start_country: e.target.value,
                  })
                }
              >
                <option selected>Выбрать</option>
                {toursTypes &&
                  toursTypes.map(item => (
                    <option value={item.id} key={item.id}>
                      {item.name}
                    </option>
                  ))}
              </select>
              <div className='my-tours-input-explanations'></div>
            </div>
          </div>
          <div className='my-tours-input-section'>
            <div className='input-label'>Регион</div>
            <div className='my-tours-input-full'>
              <select
                onChange={e =>
                  setData({
                    ...data,
                    start_region: e.target.value,
                  })
                }
              >
                <option selected>Выбрать</option>
                {toursTypes &&
                  toursTypes.map(item => (
                    <option value={item.id} key={item.id}>
                      {item.name}
                    </option>
                  ))}
              </select>
              <div className='my-tours-input-explanations'>
                Для путешествий по России не забудьте добавить регион, чтобы ваш
                тур попал в соответсвующий фильтр на сайте.{' '}
              </div>
            </div>
          </div>
          <div className='my-tours-input-section'>
            <div className='input-label'>Старт путешествия (город)</div>
            <div className='my-tours-input-full'>
              <input type='text' />
              <div className='my-tours-input-explanations'>
                Если вашего города нет в списке, оставьте поле пустым.{' '}
              </div>
            </div>
          </div>
          <div className='my-tours-input-section'>
            <div className='input-label'>Время прибытия (местное):</div>
            <div className='my-tours-input-full'>
              <input type='text' />
              <div className='my-tours-input-explanations'></div>
            </div>
          </div>
          <div className='my-tours-input-section'>
            <div className='input-label'>Финиш (город)</div>
            <div className='my-tours-input-full'>
              <input
                type='text'
                onChange={e =>
                  setData({
                    ...data,
                    start_region: e.target.value,
                  })
                }
              />
              <div className='my-tours-input-explanations'></div>
            </div>
          </div>
          <div className='my-tours-input-section'>
            <div className='input-label'>Время окончания тура (местное)</div>
            <div className='my-tours-input-full'>
              <input type='text' />
              <div className='my-tours-input-explanations'></div>
            </div>
          </div>
          <div className='checkbox-section'>
            <input
              type='checkbox'
              checked={data.direct_link}
              className='remember_checkbox'
              name='remember_me'
              onChange={e =>
                setData({
                  ...data,
                  direct_link: e.target.checked,
                })
              }
              //   value='yes'
            />
            <label htmlFor='remember_me'>
              Доступ к туру только по прямой ссылке
            </label>
          </div>
        </div>
      </main>
    </>
  )
}

const mapStateToProps = state => ({
  toursTypes: state.tours.tour_types,
})

export default connect(mapStateToProps, { getTourTypes })(MyTours)
