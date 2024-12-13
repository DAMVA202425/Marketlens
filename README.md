# Marketlens

Una aplicación en React Native para la visualización en tiempo real de datos del mercado bursátil, tasas de cambio de monedas, así como de monedas virtuales como Bitcoin, utilizando las APIs de Finnhub, Alpha Vantage y Coingecko.

## Índice
1. [Acerca del proyecto](#cerca-del-proyecto)
2. [Introducción](#introducción)
3. [Instalación](#installation)
4. [Uso](#usage)
5. [Contribución](#contributing)
6. [Licencia](#license)
7. [Agradecimientos](#acknowledgements)

## Acerca del proyecto
MarketLens es una aplicación móvil diseñada para que los usuarios puedan estar al correinte de las tendencias del mercado de valores ya que permite:
- Ver los precios de las acciones en tiempo real.
- Hacer un seguimiento de los valores de ciertas monedas.
- Hacer un seguimiento de los valores de las criptomonedas.
- Analizar las tendencias del mercado mediante gráficos visuales.

## Introducción
### Requisitos previos
- Node.js (v20.0+)
- React Native Expo
- Una clave API de Alpha Vantage (regístrese gratis en [Alpha Vantage](https://alphavantage.co)).
- Una clave API de Finnhub (regístrese gratis en [Finnhub](https://finnhub.io)).
- Una clave API de Coingecko (regístrese gratis en [Coingecko](https://api.coingecko.com)).
  
### Dependencias
Las siguientes bibliotecas se utilizan en este proyecto. Sigue las instrucciones para instalarlas:

#### 1. **NativeWind v4**
Permite usar **Tailwind CSS** en React Native:
```bash
npm install nativewind
```

#### 2. **React Navigation - Stack Navigator**
Biblioteca para gestionar la navegación entre pantallas:
```bash
npm install @react-navigation/native @react-navigation/stack react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated
```
No olvides seguir la configuración oficial en [React Navigation Docs](https://reactnavigation.org/docs/getting-started).

#### 3. **Zustand**
Gestión de estados sencilla y eficiente:
```bash
npm install zustand
```

#### 4. **Firebase**
Se utiliza para autenticación y backend. Instala Firebase con:
```bash
npm install firebase
```
Configura tu proyecto en [Firebase Console](https://console.firebase.google.com/) y añade el archivo `google-services.json` o `GoogleService-Info.plist` según tu plataforma.

#### 5. **Expo Secure Store**
Almacenamiento seguro para datos sensibles:
```bash
npm install expo-secure-store
```

#### 6. **React Native Chart Kit**
Biblioteca para gráficos:
```bash
npm install react-native-chart-kit
```

#### 7. **React Native SVG**
Dependencia para trabajar con gráficos basados en SVG:
```bash
npm install react-native-svg
```

## Installation
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/yourusername/marketlens.git
   ```
2. Navegar al directorio del proyecto:
   ```bash
   cd marketlens
   ```
   


