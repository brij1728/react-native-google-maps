export type IProps = {
  position: {
    latitude: number;
    longitude: number;
  };
  region: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
  onLoad?: () => void;
  onUnmount?: () => void;
  name?: string;
  address?: string;
  id?: string | null;
  activeMarker?: string | null;
  setActiveMarker: (marker: any) => void | null;
};
