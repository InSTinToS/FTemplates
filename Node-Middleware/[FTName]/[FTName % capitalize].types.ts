import { RequestHandler } from 'express'

interface IRequest {}

interface IResponse {}

type T[FTName % capitalize] = RequestHandler<void, IResponse, IRequest>

export type { IRequest, IResponse, T[FTName % capitalize] }
