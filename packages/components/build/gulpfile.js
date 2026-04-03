import gulp  from 'gulp'
import { removeDist, buildStyle, buildComponent } from './index.js'

const { series } = gulp

export default series(
  removeDist,
  buildComponent,
  buildStyle,
  // buildRootStyle,
)