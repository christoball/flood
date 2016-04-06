export const CHANGE_LAYER_STATUS_ACTION = 'CHANGE_LAYER_STATUS'
export const layerStatusChange = (id, status) => {
  return {
    type: CHANGE_LAYER_STATUS_ACTION,
    id,
    status
  }
}

export const DISPLAY_MAP_ITEM_INFO_ACTION = 'DISPLAY_MAP_ITEM_INFO'
export const displayMapItemInfo = (data) => {
  return {
    type: DISPLAY_MAP_ITEM_INFO_ACTION,
    data,
  }
}

export const HOVER_OVER_MAP_CLICKABLE_ACTION = 'HOVER_OVER_MAP_CLICKABLE'
export const hoverOverMapClickable = (data) => {
  return {
    type: HOVER_OVER_MAP_CLICKABLE_ACTION,
    data,
  }
}

export const SET_BASE_LAYER_ACTION = 'SET_BASE_LAYER'
export const setBaseLayer = (id) => {
  return {
    type: SET_BASE_LAYER_ACTION,
    id
  }
}

export const SET_FEATURE_LAYER_ACTION = 'SET_FEATURE_LAYER'
export const setFeatureLayer = (id) => {
  return {
    type: SET_FEATURE_LAYER_ACTION,
    id
  }
}
