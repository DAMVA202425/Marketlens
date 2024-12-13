# Marketlens

Una aplicación en React Native para la visualización en tiempo real de datos del mercado bursátil, tasas de cambio de monedas, así como de monedas virtuales como Bitcoin, utilizando las APIs de Finnhub, Alpha Vantage y Coingecko.

## Índice
1. [Acerca del proyecto](#cerca-del-proyecto)
2. [Introducción](#introducción)
3. [Instalación](#instalación)
4. [Uso](#uso)

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
- Una clave API de Firebase (regístrese gratis en [Firebase](https://firebase.google.com/)).
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

## Instalación
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/yourusername/marketlens.git
   ```
2. Navegar al directorio del proyecto:
   ```bash
   cd marketlens
   ```
3. Installar las dependencias:
   ```bash
   npm install
   ```

4. Configurar las variables de entorno en el fichero .env:
   ```bash
   EXPO_PUBLIC_APP_ID=tu_id
   EXPO_PUBLIC_ALPHA_VANTAGE_API_KEY=tu_api_key
   EXPO_PUBLIC_FINNHUB_API_KEY=tu_api_key
   EXPO_PUBLIC_COINGECKO_BASE_URL=https://api.coingecko.com/api/v3
   ```
5. Iniciar la aplicación:
   ```bash
   npm start
   ```

## Uso
1. Abra la aplicación en su dispositivo/emulador.
2. Click en Noticias para obtener una lista de noticias bursátiles.
3. Click en Activos para obtener una lista de Acciones.
4. En la pestaña de acciones, para obtener la información detallada de cada acción hacer click en la acción deseada.

<img src="https://github.com/user-attachments/assets/e9a06a94-48f2-45bb-97eb-10d072480f8e" alt="WhatsApp Image" width="300" />
<img src="https://github.com/user-attachments/assets/fdaa2419-be4f-43ec-9053-67887622b7d4" alt="WhatsApp Image" width="300" />
<img src="https://github.com/user-attachments/assets/66d68811-b08b-4ff5-b02b-2887016ddb74" alt="WhatsApp Image" width="300" />
<img src="https://github.com/user-attachments/assets/579717d1-eb54-4e97-8415-23bfa41630bb" alt="WhatsApp Image" width="300" />
<img src="https://github.com/user-attachments/assets/6a84b8ec-b0a7-4c5d-a990-a24e8b242ce0" alt="WhatsApp Image" width="300" />
<img src="https://github.com/user-attachments/assets/9bfffee9-8024-4aea-96dd-fb76e91210b1" alt="WhatsApp Image" width="300" />
<img src="https://github.com/user-attachments/assets/eb58d0c2-0985-4187-b03b-c87a9c3616be" alt="WhatsApp Image" width="300" />













