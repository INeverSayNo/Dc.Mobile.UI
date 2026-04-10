import gulp  from 'gulp'
import { removeDist, buildStyle, buildComponent, buildGlobalDts } from './index.js'

const { series } = gulp

export default series(
  removeDist,
  buildComponent,
  buildStyle,
  buildGlobalDts
  // buildRootStyle,
)