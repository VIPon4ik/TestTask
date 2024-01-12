export interface User {
  name: { [key: string]: string },
  gender: string,
  picture: { [key: string]: string },
  location: { coordinates: { [key: string]: number } },
  email: string,
  weather?: object,
}
