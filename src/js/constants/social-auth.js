import { BaseUrl } from './urls'

export const AUTH_TYPES = {
  GITHUB: 'github'
}

export const GITHUB = {
  CLIENT_ID: '7591be8163338af322eb',
  CLIENT_SECRET: 'd112c24ff434c797af5d3ba0271e66fd241f88d1',
  REDIRECT_URI: `${BaseUrl}/#github-auth`,
  API_URL: `/github-api`
}

export const CAS = {
  REDIRECT_URI: `https://cev3.pramati.com:8080/#cas-auth`
}