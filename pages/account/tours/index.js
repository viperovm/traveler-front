import { useState, useEffect } from 'react'
import {
  getTourTypes,
  clearCurrentTour,
  addTour,
  updateTour,
} from '../../../redux/actions/toursActions'
import {
  openSecondaryMenu,
} from '../../../redux/actions/tourSectionActions'
import { clear_tour } from '../../../redux/actions/currentTourActions'
import { connect } from 'react-redux'
import Account from '../../../layouts/account/account'
import { setPage,  } from '../../../redux/actions/authActions'
import AddTour from '../../../components/AccountTours/Containers/AddTour'
import ToursList from '../../../components/AccountTours/Components/ToursList'

import CircularProgress from '@mui/material/CircularProgress'

const MyTours = ({
  tour,
  addTour,
  clearCurrentTour,
  openSecondaryMenu,
  updateTour,
  clear_tour,
}) => {
  const [editing, setEditing] = useState(false)
  const [title, setTitle] = useState('Название тура')

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (tour && tour.name) {
      setTitle(tour.name)
    } else {
      setTitle('Название тура')
    }
  }, [tour])

  const handleTourDelete = () => {
    setEditing(false)
    clearCurrentTour(current_tour.id)
    clear_tour()
  }

  const handleCompleted = () => {
    clear_tour()
    setEditing(false)
  }

  const handleModeration = () => {
    setLoading(true)
    updateTour({...tour, on_moderation: true, is_draft: false }, tour.id)
    setTimeout(() => {
      clear_tour()
      setEditing(false)
    }, 1000)
    setLoading(false)
  }

  const handleDraft = () => {
    setLoading(true)
    updateTour({ ...tour, on_moderation: false, is_draft: true }, tour.id)
    setTimeout(() => {
      clear_tour()
      setEditing(false)
    }, 1000)
    setLoading(false)
  }

  useEffect(() => {
    openSecondaryMenu(editing)
  }, [editing])

  const handleEditingButton = () => {
    if (tour && tour.id) {
      setEditing(true)
    } else {
      clear_tour()
      addTour()
      setEditing(true)
    }
  }

  const List = () => {
    if (loading) {
      return <CircularProgress />
    } else {
      return <ToursList />
    }
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
                  {tour && tour.id
                    ? 'Продолжить редактирование'
                    : 'Добавить путешествие'}
                </button>
              </div>
            </div>
          )}
          <div className='control-buttons'>
            <div className='control-buttons-set'>
              {editing ? (
                <>
                  <button onClick={handleTourDelete}>Удалить</button>
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
                  <button onClick={handleDraft}>В черновик</button>
                  <button className='button-green' onClick={handleModeration}>
                    На модерацию
                  </button>
                </>
              )}
            </div>
          </div>
          {editing ? <AddTour completed={handleCompleted} /> : <List />}
        </main>
      </Account>
    </>
  )
}

const mapStateToProps = state => ({
  toursTypes: state.tours.tour_types,
  status: state.auth.status,
  tourName: state.tourSection.tour_name,
  tour: state.local_tour.tour,
})

export default connect(mapStateToProps, {
  setPage,
  addTour,
  clearCurrentTour,
  openSecondaryMenu,
  updateTour,
  clear_tour,
})(MyTours)
