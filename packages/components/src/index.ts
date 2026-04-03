
import { makeInstaller } from './utils/withInstall'
import installs from './install'
import "virtual:uno.css";

export * from './components'

export default makeInstaller([...installs])

