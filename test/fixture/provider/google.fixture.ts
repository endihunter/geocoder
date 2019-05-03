import { LocationInterface, PlaceDetailsQueryInterface, SuggestionInterface } from '../../../src/interface';
import { placeDetailsQueryFixture } from '../model/query.fixture';

const providerRawLocationResponse: Readonly<any> = Object.freeze({
    results: [
        {
            address_components: [
                { long_name: '1158', short_name: '1158', types: ['street_number'] },
                { long_name: 'East 89th Street', short_name: 'E 89th St', types: ['route'] },
                { long_name: 'Burnside', short_name: 'Burnside', types: ['neighborhood', 'political'] },
                { long_name: 'Chicago', short_name: 'Chicago', types: ['locality', 'political'] },
                { long_name: 'Cook County', short_name: 'Cook County', types: ['administrative_area_level_2', 'political'] },
                { long_name: 'Illinois', short_name: 'IL', types: ['administrative_area_level_1', 'political'] },
                { long_name: 'United States', short_name: 'US', types: ['country', 'political'] },
                { long_name: '60619', short_name: '60619', types: ['postal_code'] },
                { long_name: '7017', short_name: '7017', types: ['postal_code_suffix'] },
            ],
            formatted_address: '1158 E 89th St, Chicago, IL 60619, USA',
            geometry: {
                location: { lat: 41.7340186, lng: -87.5960762 },
                location_type: 'RANGE_INTERPOLATED',
                viewport: {
                    northeast: { lat: 41.73536758029149, lng: -87.59472721970849 },
                    southwest: { lat: 41.7326696197085, lng: -87.59742518029151 },
                },
            },
            place_id: 'EicxMTU4IEVhc3QgODl0aCBTdHJlZXQsIENoaWNhZ28sIElMLCBVU0EiMRIvChQKEgmfSpDiICYOiBGJDfMooYwZwBCGCSoUChIJCQJVUComDogR4NP62uoauTA',
            types: ['street_address'],
        },
    ],
    status: 'OK',
});

const providerParsedLocationResponse: ReadonlyArray<LocationInterface> = Object.freeze<LocationInterface>([
    {
        formattedAddress: '1158 E 89th St, Chicago, IL 60619, USA',
        latitude: 41.7340186,
        longitude: -87.5960762,
        country: 'United States',
        countryCode: 'US',
        state: 'Illinois',
        stateCode: 'IL',
        city: 'Chicago',
        streetName: 'East 89th Street',
        houseNumber: '1158',
        postalCode: '60619',
        provider: 'GoogleMapsProvider',
        placeId: providerRawLocationResponse.results[0].place_id,
        raw: providerRawLocationResponse.results[0],
    },
]);

export const providerRawGeocodeResponse: Readonly<any> = providerRawLocationResponse;
export const providerParsedGeocodeResponse: ReadonlyArray<LocationInterface> = providerParsedLocationResponse;

export const providerRawReverseResponse: Readonly<any> = providerRawLocationResponse;
export const providerParsedReverseResponse: ReadonlyArray<LocationInterface> = providerParsedLocationResponse;

export const providerRawSuggestResponse: Readonly<any> = Object.freeze({
    predictions: [
        {
            description: '1158 East 89th Street, Chicago, IL, USA',
            id: 'e0a391cdbe024898ee821d3de48d13600934bed4',
            matched_substrings: [
                {
                    length: 21,
                    offset: 0,
                },
            ],
            place_id: 'EicxMTU4IEVhc3QgODl0aCBTdHJlZXQsIENoaWNhZ28sIElMLCBVU0EiMRIvChQKEgmfSpDiICYOiBGJDfMooYwZwBCGCSoUChIJCQJVUComDogR4NP62uoauTA',
            reference: 'EicxMTU4IEVhc3QgODl0aCBTdHJlZXQsIENoaWNhZ28sIElMLCBVU0EiMRIvChQKEgmfSpDiICYOiBGJDfMooYwZwBCGCSoUChIJCQJVUComDogR4NP62uoauTA',
            structured_formatting: {
                main_text: '1158 East 89th Street',
                main_text_matched_substrings: [
                    {
                        length: 21,
                        offset: 0,
                    },
                ],
                secondary_text: 'Chicago, IL, USA',
            },
            terms: [
                {
                    offset: 0,
                    value: '1158 East 89th Street',
                },
                {
                    offset: 23,
                    value: 'Chicago',
                },
                {
                    offset: 32,
                    value: 'IL',
                },
                {
                    offset: 36,
                    value: 'USA',
                },
            ],
            types: ['route', 'geocode'],
        },
    ],
    status: 'OK',
});

export const providerParsedSuggestResponse: ReadonlyArray<SuggestionInterface> = Object.freeze<SuggestionInterface>([
    {
        formattedAddress: providerRawSuggestResponse.predictions[0].description,
        placeId: providerRawSuggestResponse.predictions[0].place_id,
        provider: 'GoogleMapsProvider',
        raw: providerRawSuggestResponse.predictions[0],
    },
]);

export const providerPlaceDetailsQueryFixture: Readonly<PlaceDetailsQueryInterface> = Object.freeze<PlaceDetailsQueryInterface>({
    ...placeDetailsQueryFixture,
    ...{
        placeId: providerParsedSuggestResponse[0].placeId,
    },
});

export const providerRawPlaceDetailsResponse: Readonly<any> = Object.freeze({
    html_attributions: [],
    result: {
        address_components: [
            {
                long_name: '1158',
                short_name: '1158',
                types: ['street_number'],
            },
            {
                long_name: 'East 89th Street',
                short_name: 'E 89th St',
                types: ['route'],
            },
            {
                long_name: 'Burnside',
                short_name: 'Burnside',
                types: ['neighborhood', 'political'],
            },
            {
                long_name: 'Chicago',
                short_name: 'Chicago',
                types: ['locality', 'political'],
            },
            {
                long_name: 'Cook County',
                short_name: 'Cook County',
                types: ['administrative_area_level_2', 'political'],
            },
            {
                long_name: 'Illinois',
                short_name: 'IL',
                types: ['administrative_area_level_1', 'political'],
            },
            {
                long_name: 'United States',
                short_name: 'US',
                types: ['country', 'political'],
            },
            {
                long_name: '60619',
                short_name: '60619',
                types: ['postal_code'],
            },
            {
                long_name: '7017',
                short_name: '7017',
                types: ['postal_code_suffix'],
            },
        ],
        adr_address:
            '<span class="street-address">1158 E 89th St</span>, <span class="locality">Chicago</span>, <span class="region">IL</span> <span class="postal-code">60619-7017</span>, <span class="country-name">USA</span>',
        formatted_address: '1158 E 89th St, Chicago, IL 60619, USA',
        geometry: {
            location: {
                lat: 41.7340226,
                lng: -87.5960578,
            },
            viewport: {
                northeast: {
                    lat: 41.73492828029151,
                    lng: -87.59470091970849,
                },
                southwest: {
                    lat: 41.73223031970851,
                    lng: -87.5973988802915,
                },
            },
        },
        icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/geocode-71.png',
        id: 'bbbfd42eed9385648e42f6f331d54eac2d61cbca',
        name: '1158 E 89th St',
        place_id: 'EiYxMTU4IEUgODl0aCBTdCwgQ2hpY2FnbywgSUwgNjA2MTksIFVTQSIxEi8KFAoSCZ9KkOIgJg6IEYkN8yihjBnAEIYJKhQKEgkJAlVQKiYOiBHg0_ra6hq5MA',
        reference: 'EiYxMTU4IEUgODl0aCBTdCwgQ2hpY2FnbywgSUwgNjA2MTksIFVTQSIxEi8KFAoSCZ9KkOIgJg6IEYkN8yihjBnAEIYJKhQKEgkJAlVQKiYOiBHg0_ra6hq5MA',
        scope: 'GOOGLE',
        types: ['street_address'],
        url: 'https://maps.google.com/?q=1158+E+89th+St,+Chicago,+IL+60619,+USA&ftid=0x880e2620e2904a9f:0x8850f56fdf8a5429',
        utc_offset: -300,
        vicinity: 'Chicago',
    },
    status: 'OK',
});

export const providerParsedPlaceDetailsResponse: Readonly<LocationInterface> = Object.freeze<LocationInterface>({
    formattedAddress: '1158 E 89th St, Chicago, IL 60619, USA',
    latitude: 41.7340226,
    longitude: -87.5960578,
    country: 'United States',
    countryCode: 'US',
    state: 'Illinois',
    stateCode: 'IL',
    city: 'Chicago',
    postalCode: '60619',
    streetName: 'East 89th Street',
    houseNumber: '1158',
    placeId: providerRawPlaceDetailsResponse.result.place_id,
    provider: 'GoogleMapsProvider',
    raw: providerRawPlaceDetailsResponse.result,
});
