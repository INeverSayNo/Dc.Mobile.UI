import { ShallowRef } from 'vue';
import { DMapIProps, DMapEmits } from '../type';
export default function useSatelliteMap(props: DMapIProps, emits: DMapEmits, mapInstance: ShallowRef<BMapGL.Map | null>): void;
