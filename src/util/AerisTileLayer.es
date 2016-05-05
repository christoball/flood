import L from 'leaflet'

import keys from '../keys'
import TileLayer from './TileLayer'

//TODO: advisory map layers requires an Aeris subscription - they are not available under the development plan
export default class AerisTileLayer extends TileLayer {
  constructor(options) {
    super(options)
    this.layerUrl = `https://tile{s}.aerisapi.com/${keys.aerisApiId}_${keys.aerisApiSecret}/${options.code}/{z}/{x}/{y}/0.png`
    this.initLayer({
      attribution: '<a href="http://www.aerisweather.com">AerisWeather</a>'
    })
  }
}