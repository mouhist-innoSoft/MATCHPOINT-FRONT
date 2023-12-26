import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.matchpoint.app',
  appName: 'matchpoint',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
