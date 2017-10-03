const config = {
  apiUrl: 'http://api.berneau.at'
}

export enum mode {
  new,
  edit,
  delete
}

export function setConfig(obj) {
  return true
}

export function getConfig() {
  return config
}

export function writeToLS(obj) {
  for (let key in obj) {
    localStorage.setItem(key, obj[key])
  }
}

export function readFromLS() {
  return localStorage
}

export function removeTokenFromLS() {
  if (localStorage.getItem('token')) {
    localStorage.removeItem('token')
  }
}

export function isTokenValid(): boolean {
  const token = localStorage.getItem('token')

  if (!token) return false

  // TODO: wait for expiration implementation
  return true

  // // JWT Token has three components which are seperated by a dot.
  // // 1. Header 2. Payload 3. Signature
  // // The Payload is base64 encoded
  // const dataBase64 = token.split('.')[1]
  // const data = JSON.parse(atob(dataBase64))
  // // get expiration time of token and transfer it to java date object
  // return new Date(data.exp * 1000) > new Date()
}
