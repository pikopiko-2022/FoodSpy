import { combineReducers } from 'redux'

import home from './home'
import list from './list'
import price from './price'

export default combineReducers({
  home: home,
  list: list,
  price: price,
})
