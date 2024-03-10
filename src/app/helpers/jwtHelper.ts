import jwt, { JwtPayload, Secret } from 'jsonwebtoken'

const createToken = (
  payload: Record<string, unknown>,
  secrect: Secret,
  expireTime: string,
): string => {
  return jwt.sign(payload, secrect, { expiresIn: expireTime })
}

const decodeToken = (token: string): JwtPayload => {
  return jwt.decode(token) as JwtPayload
}

export const jwtHelpers = { createToken, decodeToken }
