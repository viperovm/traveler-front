import { useState, useEffect } from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Chip from '@mui/material/Chip'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  }
}

const SelectInput = ({ action, name, label, val, options, multiple }) => {
  const theme = useTheme()
  const [data, setData] = useState([])

  const [newOptions, setNewOptions] = useState({})

  useEffect(() => {
    if (val) {
      let arr = []
      if (Array.isArray(val)) {
        arr = val
      } else {
        arr.push(val)
      }
       setData(arr)
    }
  }, [val])

  const getObject = arr => {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
      obj = {
        ...obj,
        [arr[i].id]: arr[i].name,
      }
    }
    setNewOptions(obj)
  }

  useEffect(() => {
    getObject(options)
  }, [options])

  // useEffect(() => {
  //   action(name, data)
  // }, [name, data])

  const handleData = e => {
    const {
      target: { value },
    } = e
    setData(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    )
    action(name, value)
  }

  const selected = (data, id) => {
    return data.includes(id)
  }

  return (
    <Select
      labelId='demo-multiple-chip-label'
      id='demo-multiple-chip'
      multiple={multiple}
      value={data ?? []}
      onChange={handleData}
      displayEmpty
      // input={<OutlinedInput id='select-multiple-chip' />}
      inputProps={{ 'aria-label': 'Without label' }}
      renderValue={selected => (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {selected &&
            selected.map(value => (
              <Chip key={value} label={newOptions[value]} />
            ))}
        </Box>
      )}
      MenuProps={MenuProps}
    >
      <MenuItem disabled value=''>
        <em>Выберите {label}</em>
      </MenuItem>
      {Object.keys(newOptions).map(id => (
        <MenuItem key={id} value={id} selected={() => selected(data, id)}>
          {newOptions[id]}
        </MenuItem>
      ))}
    </Select>
  )
}

export default SelectInput
