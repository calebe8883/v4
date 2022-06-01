import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef<any>()

export function navigate<T>(name: string, params?: T) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
