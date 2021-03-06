import { ClassTransformOptions, plainToClass } from 'class-transformer';
import { LocationInterface } from '../interface';
import { AbstractHttpProvider, Location } from '../model';
import { WorldCountry, WorldCountryQueryInterface, WorldCountryUtil } from '../util/world-country';
import { AbstractTransformer } from './abstract-transformer';

export abstract class AbstractLocationTransformer<HttpProviderClass extends AbstractHttpProvider = any, ProviderRawEntryType = any> extends AbstractTransformer<
    HttpProviderClass,
    ProviderRawEntryType
> {
    abstract async getFormattedAddress(): Promise<LocationInterface['formattedAddress']>;
    abstract async getLongitude(): Promise<LocationInterface['longitude']>;
    abstract async getLatitude(): Promise<LocationInterface['latitude']>;
    abstract async getCountry(): Promise<LocationInterface['country']>;
    abstract async getCountryCode(): Promise<LocationInterface['countryCode']>;
    abstract async getState(): Promise<LocationInterface['state']>;
    abstract async getStateCode(): Promise<LocationInterface['stateCode']>;
    abstract async getCity(): Promise<LocationInterface['city']>;
    abstract async getStreetName(): Promise<LocationInterface['streetName']>;
    abstract async getHouseNumber(): Promise<LocationInterface['houseNumber']>;
    abstract async getPostalCode(): Promise<LocationInterface['postalCode']>;
    abstract async getPlaceId(): Promise<LocationInterface['placeId']>;

    async transform(options?: ClassTransformOptions): Promise<Location<ProviderRawEntryType>> {
        const location: Location = new Location<ProviderRawEntryType>();

        location.provider = this.provider;
        location.formattedAddress = await this.getFormattedAddress();
        location.longitude = await this.getLongitude();
        location.latitude = await this.getLatitude();
        location.country = await this.getCountry();
        location.countryCode = await this.getCountryCode();
        location.state = await this.getState();
        location.stateCode = await this.getStateCode();
        location.city = await this.getCity();
        location.streetName = await this.getStreetName();
        location.houseNumber = await this.getHouseNumber();
        location.postalCode = await this.getPostalCode();
        location.placeId = await this.getPlaceId();
        location.raw = this.raw;

        if (!location.formattedAddress) {
            location.formattedAddress = location.generateFormattedAddress();
        }

        return plainToClass<Location<ProviderRawEntryType>, LocationInterface<ProviderRawEntryType>>(Location, location, options);
    }

    protected async getWorldCountry(query: WorldCountryQueryInterface): Promise<WorldCountry | undefined> {
        return WorldCountryUtil.find(query);
    }
}
