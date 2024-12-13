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

![WhatsApp Image 2024-12-13 at 6 31 32 PM (2)](https://github.com/user-attachments/assets/5c577667-8802-4f95-8113-59c052205322)
![WhatsApp Image 2024-12-13 at 6 31 32 PM (1)](https://github.com/user-attachments/assets/8beebfed-b554-4b1f-a5eb-63ea0387641a)
![WhatsApp Image 2024-12-13 at 6 31 32 PM](https://github.com/user-attachments/assets/f3e0ef95-be7b-4dde-8317-b3ffc7b4d70b)
![WhatsApp Image 2024-12-13 at 6 31 31 PM (1)](https://github.com/user-attachments/assets/364d6896-3af1-4e75-b04e-530511313204)
![WhatsApp Image 2024-12-13 at 6 31 31 PM](https://github.com/user-attachments/assets/80068424-7390-4f61-8374-42ffdde747cc)
![WhatsApp Image 2024-12-13 at 6 31 30 PM (1)](https://github.com/user-attachments/assets/cc860ecf-0c1c-41c4-bd8d-7c20fcbe6e45)
![WhatsApp Image 2024-12-13 at 6 31 30 PM](https://github.com/user-attachments/assets/a6e2cb71-b9f7-438d-8b51-f252ccd65638)


<img src="https://github.com/user-attachments/assets/5c577667-8802-4f95-8113-59c052205322" alt="WhatsApp Image 2024-12-13 at 6 31 32 PM (2)" width="200" />
<img src="https://github.com/user-attachments/assets/8beebfed-b554-4b1f-a5eb-63ea0387641a" alt="WhatsApp Image 2024-12-13 at 6 31 32 PM (1)" width="200" />
<img src="https://github.com/user-attachments/assets/f3e0ef95-be7b-4dde-8317-b3ffc7b4d70b" alt="WhatsApp Image 2024-12-13 at 6 31 32 PM" width="200" />
<img src="https://github.com/user-attachments/assets/364d6896-3af1-4e75-b04e-530511313204" alt="WhatsApp Image 2024-12-13 at 6 31 31 PM (1)" width="200" />
<img src="https://github.com/user-attachments/assets/80068424-7390-4f61-8374-42ffdde747cc" alt="WhatsApp Image 2024-12-13 at 6 31 31 PM" width="200" />
<img src="https://github.com/user-attachments/assets/cc860ecf-0c1c-41c4-bd8d-7c20fcbe6e45" alt="WhatsApp Image 2024-12-13 at 6 31 30 PM (1)" width="200" />
<img src="https://github.com/user-attachments/assets/a6e2cb71-b9f7-438d-8b51-f252ccd65638" alt="WhatsApp Image 2024-12-13 at 6 31 30 PM" width="200" />













