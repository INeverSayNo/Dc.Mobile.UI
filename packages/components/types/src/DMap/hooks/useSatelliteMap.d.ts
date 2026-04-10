import { ShallowRef } from 'vue';
import { IProps, IEmits } from '../type';
export default function useSatelliteMap(props: IProps, emits: IEmits, mapInstance: ShallowRef<BMapGL.Map | null>): void;
