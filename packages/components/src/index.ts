
import { makeInstaller } from './utils/withInstall'
import installs from './install'
import "virtual:uno.css";
import "./styles/reset.less"

export * from './components'

export default makeInstaller([...installs])

