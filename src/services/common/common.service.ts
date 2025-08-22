import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class CommonService {
    constructor(private readonly httpService: HttpService) { }

    async getLocationFromIp(ip: string) {
        try {
            console.log('ip', ip);
            const response = await lastValueFrom(
                this.httpService.get(`http://ip-api.com/json/${ip}`)
            );
            return response.data; // Contains country, city, lat, lon, etc.
        } catch (error) {
            console.error('Error fetching location:', error);
            return null;
        }
    }

}
