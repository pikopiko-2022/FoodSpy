import { combineReducers } from 'redux'

import home from './home'
import list from './list'
import price from './price'
import basket from './basket'

export default combineReducers({
  home: home,
  list: list,
  price: price,
  basket: basket,
})
