import { ComputedRef, MaybeRef, unref } from "vue"

import type { StationItem, Address } from "../type"

export const PointStyle: Partial<HTMLElement["style"]> = {
  border: "none",
  color: "#145ca8",
  fontSize: "12px",
  width: "max-content",
  marginLeft: "20px",
  marginTop: "-16px",
}

export const LogisticCenterLabelStyle: Partial<HTMLElement["style"]> = {
  padding: ".1rem .2rem",
  border: "none",
  borderRadius: "4px",
  backdropFilter: "blur(8px)",
  backgroundColor: "#87ceeb45",
  color: "black",
  fontSize: "12px",
  width: "10rem",
  minWidth: "3rem",
  textAlign: "center",
  position: "absolute",
  top: "-25px",
  right: "-58px",
  transform: "scale(.8)",
}
export const railwayBureauArea = new Map<
  string,
  Record<"bureauColor" | "lineColor", string>
>([
  ["西安局", { bureauColor: "rgba(0, 169, 115, 0.5)", lineColor: "red" }],
  ["哈尔滨局", { bureauColor: "rgba(115, 9, 170, 0.5)", lineColor: "#efb336" }],
  ["兰州局", { bureauColor: "rgba(149, 164, 120, 0.5)", lineColor: "#3c53ff" }],
  ["郑州局", { bureauColor: "rgba(116, 192, 162, 0.5)", lineColor: "#07c160" }],
  ["昆明局", { bureauColor: "rgba(110, 123, 176, 0.5)", lineColor: "red" }],
  ["北京局", { bureauColor: "rgba(134, 110, 176, 0.5)", lineColor: "red" }],
  ["沈阳局", { bureauColor: "rgba(251, 155, 36, 0.5)", lineColor: "#07c160" }],
  ["太原局", { bureauColor: "rgba(99, 44, 153, 0.5)", lineColor: "#3c53ff" }],
  ["南宁局", { bureauColor: "rgba(120, 167, 196, 0.5)", lineColor: "#3c53ff" }],
  ["成都局", { bureauColor: "rgba(56, 56, 74, 0.5)", lineColor: "#07c160" }],
  [
    "乌鲁木齐局",
    { bureauColor: "rgba(255, 184, 153, 0.5)", lineColor: "#07c160" },
  ],
  [
    "呼和浩特局",
    { bureauColor: "rgba(245, 61, 101, 0.5)", lineColor: "#efb336" },
  ],
  ["青藏公司", { bureauColor: "rgba(154, 24, 68, 0.5)", lineColor: "red" }],
  ["济南局", { bureauColor: "rgba(250, 161, 57, 0.5)", lineColor: "#efb336" }],
  ["上海局", { bureauColor: "rgba(25, 176, 118, 0.5)", lineColor: "red" }],
  ["武汉局", { bureauColor: "rgba(64, 219, 217, 0.5)", lineColor: "#3c53ff" }],
  [
    "广铁（集团）公司",
    { bureauColor: "rgba(18, 64, 171, 0.5)", lineColor: "#efb336" },
  ],
  ["南昌局", { bureauColor: "rgba(255, 90, 64, 0.5)", lineColor: "#07c160" }],
])

export const bureaInfoList = [
  {
    gid: 86,
    code: "T00",
    name: "沈阳局",
    fullName: "沈阳铁路局",
    shortName: "沈",
    areaType: 1,
    num: "02",
    id: "3a15a529-50c0-da56-7c79-ba3ddcc11c4b",
  },
  {
    gid: 29,
    code: "B00",
    name: "哈尔滨局",
    fullName: "哈尔滨铁路局",
    shortName: "哈",
    areaType: 1,
    num: "01",
    id: "3a15a53c-b537-8050-9c6d-360f468a0a20",
  },
  {
    gid: 50,
    code: "M00",
    name: "昆明局",
    fullName: "昆明铁路局 ",
    shortName: "昆",
    areaType: 1,
    num: "12",
    id: "3a15a1b4-a262-8d6c-c3e0-a555e3d0edf3",
  },
  {
    gid: 123,
    code: "F00",
    name: "郑州局",
    fullName: "郑州铁路局 ",
    shortName: "郑",
    areaType: 1,
    num: "05",
    id: "3a15a703-8671-8510-80b5-86e432a3c13c",
  },
  {
    gid: 4,
    code: "P00",
    name: "北京局",
    fullName: "北京铁路局",
    shortName: "京",
    areaType: 1,
    num: "03",
    id: "3a15ab87-c2ce-98ca-a36c-b099f7de02b3",
  },
  {
    gid: 53,
    code: "J00",
    name: "兰州局",
    fullName: "兰州铁路局 ",
    shortName: "兰",
    areaType: 1,
    num: "13",
    id: "3a15a6cd-c541-98aa-3e84-9c7910f07b66",
  },
  {
    gid: 63,
    code: "Z00",
    name: "南宁局",
    fullName: "南宁铁路局",
    shortName: "宁",
    areaType: 1,
    num: "10",
    id: "3a15af69-3589-6472-3c55-d8289602bd13",
  },
  {
    gid: 102,
    code: "R00",
    name: "乌鲁木齐局",
    fullName: "乌鲁木齐铁路局",
    shortName: "乌",
    areaType: 1,
    num: "14",
    id: "3a15a1de-31a9-f4be-ea00-206f949459af",
  },
  {
    gid: 36,
    code: "C00",
    name: "呼和浩特局",
    fullName: "呼和浩特铁路局",
    shortName: "呼",
    areaType: 1,
    num: "04",
    id: "3a15a595-eede-cc7b-5451-4a85017db92f",
  },
  {
    gid: 94,
    code: "V00",
    name: "太原局",
    fullName: "太原铁路局",
    shortName: "太",
    areaType: 1,
    num: "16",
    id: "3a15aaa9-d101-f31c-0bcc-f1e4ddf914a2",
  },
  {
    gid: 111,
    code: "Y00",
    name: "西安局",
    fullName: "西安铁路局",
    shortName: "西",
    areaType: 1,
    num: "18",
    id: "3a15a6cd-01ca-03d3-35d6-30bd8d6e6eb5",
  },
  {
    gid: 70,
    code: "O00",
    name: "青藏公司",
    fullName: "青藏铁路公司",
    shortName: "青",
    areaType: 1,
    num: "15",
    id: "3a15a6bc-bd91-819d-69d7-4748c342007a",
  },
  {
    gid: 11,
    code: "W00",
    name: "成都局",
    fullName: "成都铁路局",
    shortName: "成",
    areaType: 1,
    num: "11",
    id: "3a15afb2-5589-91b1-cec3-b73cc992e00e",
  },
  {
    gid: 44,
    code: "K00",
    name: "济南局",
    fullName: "济南铁路局 ",
    shortName: "济",
    areaType: 1,
    num: "06",
    id: "3a15abe5-7069-9d58-aa4d-2dcaa0ee4547",
  },
  {
    gid: 78,
    code: "H00",
    name: "上海局",
    fullName: "上海铁路局 ",
    shortName: "上",
    areaType: 1,
    num: "07",
    id: "3a15abe2-dbdb-f569-ef51-707cab602bb9",
  },
  {
    gid: 105,
    code: "N00",
    name: "武汉局",
    fullName: "武汉铁路局 ",
    shortName: "武",
    areaType: 1,
    num: "17",
    id: "3a15abe6-9bbb-0ef5-c853-c12637e29e69",
  },
  {
    gid: 20,
    code: "Q00",
    name: "广铁（集团）公司",
    fullName: "广州铁路（集团）公司",
    shortName: "广",
    areaType: 1,
    num: "09",
    id: "3a15ac1c-e4f9-d9c7-4ca0-781e37cdcf46",
  },
  {
    gid: 60,
    code: "G00",
    name: "南昌局",
    fullName: "南昌铁路局 ",
    shortName: "南",
    areaType: 1,
    num: "08",
    id: "3a15ac1d-16dd-3ac6-71ac-d45423760b39",
  },
]

export const stationServices = [
  {
    key: "isContainerHandle",
    name: "集",
  },
  {
    key: "isDangerousHandle",
    name: "危",
  },
]

export function createDcIconMarker(
  lat: number,
  lng: number,
  iconPath: string,
  iconSize?: [number, number],
  imageSize?: [number, number],
) {
  const locationIcon = new BMapGL.Icon(
    iconPath,
    new BMapGL.Size(iconSize ? iconSize[0] : 20, iconSize ? iconSize[1] : 20),
    {
      anchor: new BMapGL.Size(
        iconSize ? iconSize[0] / 2 : 10,
        iconSize ? iconSize[1] / 2 : 10,
      ),
      imageSize: imageSize ? new BMapGL.Size(imageSize[0], imageSize[1]) : undefined,
    },
  )

  return new BMapGL.Marker(new BMapGL.Point(lng, lat), {
    icon: locationIcon,
  })
}

export function usePrivateLineHelper() {
  /** 创建专用线标记 */
  function createPrivateLineMark(
    center: BMapGL.Point,
    zyxList?: StationItem["zyxList"],
  ) {
    const lineCount =
      zyxList?.filter((x) => {
        const address = GetAddress(x.address || "")
        return !address?.lat || !address?.lng
      })?.length || 0
    const deg = -(lineCount > 0 ? 360 / lineCount : 15)
    return (
      zyxList?.map((x, index) => {
        const address = GetAddress(x.address || "")
        const point =
          address?.lat && address.lng
            ? new BMapGL.Point(parseFloat(address.lng), parseFloat(address.lat))
            : getCirclePoint(center, deg * index, 70000)
        const namePath = getNameLength(x.name)
        const labelEl = document.createElement("p")
        Object.assign(labelEl.style, privateLineStyle)
        labelEl.innerHTML = x.name
        const label = createLabelMarker({
          lat: point.lat,
          lng: point.lng,
          label: labelEl,
          className: "z-1005",
        })
        const hasContainer = x.containerArriveHS || x.containerSendHS
        const marker = createDcIconMarker(
          point.lat,
          point.lng,
          hasContainer
            ? "https://gateway.dczhiyun.com/api/abp/minio/wechat/icon/railwayStationIcon.svg"
            : "https://gateway.dczhiyun.com/api/abp/minio/wechat/icon/locationMarker.svg",
        )

        return {
          point,
          label,
          marker,
          station: x.stationId,
        }
      }) || []
    )
  }

  function GetAddress(address: string, needDef = false) {
    try {
      return JSON.parse(address) as Address
    } catch (error) {
      if (needDef) {
        return {
          address: "",
          lat: "",
          lng: "",
        }
      }
      return undefined
    }
  }

  function getCirclePoint(point: BMapGL.Point, deg: number, circleR: number) {
    const cirx = point.lat
    const ciry = point.lng
    const r = circleR / 6378137
    const diffy =
      (Math.round(Math.sin((deg * Math.PI) / 180) * 100000000000) /
        100000000000) *
      r
    const diffx =
      (Math.round(Math.cos((deg * Math.PI) / 180) * 100000000000) /
        100000000000) *
      r

    if (deg <= 90) {
      return new BMapGL.Point(cirx - diffx, ciry + diffy)
    }
    if (deg > 90 && deg <= 180) {
      return new BMapGL.Point(cirx + diffx, ciry + diffy)
    }
    if (deg > 180 && deg <= 270) {
      return new BMapGL.Point(cirx + diffx, ciry - diffy)
    }
    if (deg > 270 && deg <= 360) {
      return new BMapGL.Point(cirx - diffx, ciry - diffy)
    }
    return new BMapGL.Point(cirx + diffx, ciry + diffy)
  }

  function getNameLength(name: string) {
    const anumLength =
      name.match(/[A-Za-z0-9]+/g)?.reduce((a, c) => {
        return a + c.length
      }, 0) || 0
    const startLength = name.match(/\★/g)?.length || 0
    return (
      (name.length - anumLength - startLength) / 2 +
      anumLength / 4 +
      startLength / 3.3
    )
  }

  const privateLineStyle: Partial<HTMLElement["style"]> = {
    padding: ".1rem .2rem",
    border: "none",
    borderRadius: "4px",
    backdropFilter: "blur(8px)",
    backgroundColor: "#87ceeb45",
    color: "black",
    fontSize: "12px",
    width: "13rem",
    minWidth: "13rem",
    textAlign: "center",
    position: "absolute",
    bottom: "-22px",
    left: "-90px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }

  return {
    privateLineStyle,
    createPrivateLineMark,
  }
}

interface SetCenterMarkLabelOptions {
  point: BMapGL.Point
  name: string
  iconPath: string
  zoomLevel?: number
  needCenter?: boolean
  labelOffsetX?: number
  iconSize?: BMapGL.Size
}
const setCenterMarkLabel = (
  MapInstance:
    | MaybeRef<BMapGL.Map>
    | ComputedRef<BMapGL.Map | null | undefined>,
  options: SetCenterMarkLabelOptions,
) => {
  const {
    point,
    name,
    iconPath,
    zoomLevel = 17,
    needCenter = true,
    labelOffsetX = 20,
    iconSize = null,
  } = options
  needCenter && unref(MapInstance)?.panTo(point)

  const marker = new BMapGL.Marker(point, {
    icon: new BMapGL.Icon(iconPath, iconSize || new BMapGL.Size(20, 20), {
      anchor: new BMapGL.Size(10, 10),
    }),
  })

  unref(MapInstance)?.addOverlay(marker)

  const labelEl = document.createElement("p")
  Object.assign(labelEl.style, PointStyle)
  labelEl.innerHTML = name


  const _labelOffsetX = name.length >= 3 ? 8 : name.length >= 5 ? 12 : 4
  const labelMarker = createLabelMarker({
    lat: point.lat,
    lng: point.lng,
    label: labelEl,
    className: "z-1005",
    offsetX: _labelOffsetX,
  })
  unref(MapInstance)?.addOverlay(labelMarker)
  return {
    marker,
    labelMarker,
  }
}

interface CreateLabelMarkerOptions {
  lat: number
  lng: number
  label: HTMLElement
  className?: string
  offsetX?: number
  offsetY?: number
}
const createLabelMarker = (options: CreateLabelMarkerOptions) => {
  const { lat, lng, label, className = "", offsetX = 20, offsetY = 0 } = options
  return new BMapGL.CustomOverlay(() => label, {
    point: new BMapGL.Point(lng, lat),
    offsetX,
    offsetY,
  })
}

const createDOM = (payload: string[], lat: number, lng: number) => {
  const div = document.createElement("div")
  div.style.position = "relative"
  div.style.minWidth = "2rem"
  div.style.backgroundColor = "#fff"
  div.style.color = "#333"
  div.style.padding = "2px"
  div.style.whiteSpace = "nowrap"
  div.style.userSelect = "none"
  div.style.fontSize = "12px"
  div.style.borderRadius = "10px"
  div.style.display = "flex"
  div.style.justifyContent = "center"
  div.style.alignItems = "center"
  div.style.flexDirection = "column"
  div.style.padding = ".2rem"
  div.style.borderRadius = "4em"
  div.style.boxShadow =
    "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"

  const tagWrap = document.createElement("div")
  payload.forEach((e) => {
    const el = document.createElement("span")
    el.innerHTML = e
    el.style.background = "#e55e34"
    el.style.color = "#fff"
    el.style.borderRadius = "50%"
    el.style.width = "1.6rem"
    el.style.height = "1.6rem"
    el.style.display = "inline-flex"
    el.style.alignItems = "center"
    el.style.justifyContent = "center"
    el.style.boxSizing = "border-box"
    tagWrap.appendChild(el)
  })
  tagWrap.style.display = "flex"
  tagWrap.style.gap = ".4rem"
  div.appendChild(tagWrap)
  var arrow = document.createElement("div")
  arrow.style.position = "absolute"
  arrow.style.bottom = "-1.2rem"
  arrow.style.left = "50%"
  arrow.style.transform = "translateX(-50%)"
  arrow.style.width = "0"
  arrow.style.height = "0"
  arrow.style.borderColor = "white transparent transparent transparent"
  arrow.style.borderStyle = "solid"
  arrow.style.borderWidth = "10px"
  arrow.style.overflow = "hidden"
  div.appendChild(arrow)
  const marker = new BMapGL.CustomOverlay(() => div, {
    point: new BMapGL.Point(lng, lat),
  })
  return marker
}

const getPolygonCenter = (coordinates: number[][]): number[] => {
  let x = 0
  let y = 0
  coordinates.forEach((coord) => {
    x += coord[0]
    y += coord[1]
  })
  return [x / coordinates.length, y / coordinates.length]
}

export function renderLinNp(
  lineData: any[],
  options = { maxZoom: 14, minZoom: 3 },
) {
  const data = {
    features: lineData.map((e) => {
      return {
        ...e,
        type: "Feature",
      }
    }),
    type: "FeatureCollection",
  } as const
  console.log(data)
}

export { setCenterMarkLabel, createDOM, getPolygonCenter, createLabelMarker }
