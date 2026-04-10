import { render, VNode } from "vue"

export default function useCustomControl() {
  return class CustomControl extends BMapGL.Control {
    vNode: VNode
    constructor(
      anchor: BMapGL.ControlAnchor,
      offset: BMapGL.Size,
      vNode: VNode,
    ) {
      super()
      this.vNode = vNode
      this.defaultAnchor = anchor
      this.defaultOffset = offset
    }
    initialize(map: BMapGL.Map): HTMLElement {
      const container = document.createElement("div")
      render(this.vNode, container)
      map.getContainer().appendChild(container)
      return container
    }
  }
}
