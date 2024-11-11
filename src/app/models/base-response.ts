import { Planet } from './planet';

export interface BaseResponse {
    data: any[];
    status: number;
    validationErrors: []
}