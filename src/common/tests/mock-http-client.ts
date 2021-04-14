import { HttpGetClient, HttpGetParams } from "common/httpClient";

export class HttpGetClientSpy implements HttpGetClient {
    apiKey?: string;
    url?: string;

    async get(params: HttpGetParams): Promise<void> {
        this.apiKey = params.apiKey;
        this.url = params.url;
        return Promise.resolve()
    }

}
