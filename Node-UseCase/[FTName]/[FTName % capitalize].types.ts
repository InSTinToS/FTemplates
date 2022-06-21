import { RequestHandler } from 'express'

interface IRequest {}

interface IResponse {}

type THandle = RequestHandler<void, IResponse, IRequest>;

type TExecute = (data: IRequest) => Promise<IResponse>;

export type { THandle, IRequest, IResponse, TExecute };
