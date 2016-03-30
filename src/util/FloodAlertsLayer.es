import keys from '../keys'
import Layer from './Layer'

//TODO: advisory map layers requires an Aeris subscription - they are not available under the development plan
export default class FloodAlertsLayer extends Layer {
  constructor(options) {
    super(options)
    this.refreshIntervalId = null
    // this.refreshTimeMs = 360000 //6 minutes
    this.refreshTimeMs = 3000 //6 minutes

    const url = `https://tile{s}.aerisapi.com/${keys.aerisApiId}_${keys.aerisApiSecret}/alerts-flood/{z}/{x}/{y}/0.png`
    this.layer = L.tileLayer(url, {
      subdomains: '1234',
      opacity: 0.6,
      attribution: 'Aeris Weather'
    })
  }

  show() {
    this.layer.addTo(this.map)
    this.refreshIntervalId = setInterval(() => this.layer.redraw(), this.refreshTimeMs)
  }

  hide() {
    if (this.refreshIntervalId) {
      clearInterval(this.refreshIntervalId)
      this.refreshIntervalId = null
    }

    if (this.map.hasLayer(this.layer)) {
      this.map.removeLayer(this.layer)
    }
  }
}