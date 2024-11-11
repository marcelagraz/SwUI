import { Planet } from './planet';

export interface BaseResponse {
    data: Planet[];
    status: number;
    validationErrors: []
}