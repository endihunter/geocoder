import { AxiosInstance } from 'axios';
import { ReverseCommand } from '../../../command';
import { ReverseQuery } from '../../../model';
import { MapQuestReverseQueryInterface } from '../interface';
import { MapQuestCommonCommandMixin } from './mixin';

/**
 * @link {https://developer.mapquest.com/documentation/geocoding-api/reverse/get/}
 */
export class MapQuestReverseCommand extends MapQuestCommonCommandMixin(ReverseCommand)<MapQuestReverseQueryInterface> {
    constructor(httpClient: AxiosInstance, private readonly apiKey: string) {
        // @ts-ignore
        super(httpClient, apiKey);
    }

    static getUrl(): string {
        return 'https://www.mapquestapi.com/geocoding/v1/reverse';
    }

    protected async buildQuery(query: ReverseQuery): Promise<MapQuestReverseQueryInterface> {
        return {
            key: this.apiKey,
            location: `${query.lat},${query.lon}`,
            thumbMaps: false,
            outFormat: 'json',
        };
    }
}
