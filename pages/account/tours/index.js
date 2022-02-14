import { useState, useEffect } from 'react'
import { getTourTypes } from '../../../redux/actions/toursActions'
import { zeroingData } from '../../../redux/actions/tourSectionActions'
import { connect } from 'react-redux'
import Account from '../../../layouts/account/account'
import { setPage } from '../../../redux/actions/authActions'
import AddTour from '../../../components/AccountTours/Containers/AddTour'
import ToursList from '../../../components/AccountTours/Containers/ToursList'

const MyTours = ({
  getTourTypes,
  toursTypes,
  setPage,
  status,
  tourName,
  zeroingData,
}) => {
  const [editing, setEditing] = useState(false)

  const [title, setTitle] = useState('Название тура')

  useEffect(() => {
    tourName && setTitle(tourName)
  }, [tourName])

  const handleEditingButton = () => {
    zeroingData()
    setEditing(true)
  }

  return (
    <>
      <Account>
        <main>
          <div className='my-tours-heading'>
            <h2>{editing ? title : 'Мои туры'}</h2>
          </div>
          {!editing && (
            <div className='tours-list-add-button-wrapper'>
              <div className='tours-list-add-button-text'>
                Вам доступно безлимитное добавление туров и путешествий, более 2
                000 000 человек ждут их.
              </div>
              <div className='tours-list-add-button-button'>
                <button onClick={handleEditingButton}>
                  Добавить путешествие
                </button>
              </div>
            </div>
          )}
          <div className='control-buttons'>
            <div className='control-buttons-set'>
              {editing ? (
                <>
                  <button>Удалить</button>
                  <button>Создать копию</button>
                  <button>Предпросмотр</button>
                </>
              ) : (
                <>
                  <button>Опубликовано</button>
                  <button>На модерации</button>
                  <button>Черновики</button>
                </>
              )}
            </div>
            <div className='control-buttons-set'>
              {editing && (
                <>
                  <button>В черновик</button>
                  <button className='button-green'>На модерацию</button>
                </>
              )}
            </div>
          </div>
          {editing ? <AddTour /> : <ToursList />}
        </main>
      </Account>
    </>
  )
}

const mapStateToProps = state => ({
  toursTypes: state.tours.tour_types,
  status: state.auth.status,
  tourName: state.tourSection.tour_name,
})

export default connect(mapStateToProps, { getTourTypes, setPage, zeroingData })(
  MyTours
)