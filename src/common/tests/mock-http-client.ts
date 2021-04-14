import { HttpGetClient } from "common/httpClient";

export class HttpGetClientSpy implements HttpGetClient {
    apiKey?: string;
    url?: string;

    get(apiKey: string, url: string): Promise<void> {
        this.apiKey = apiKey;
        this.url = url;
        return Promise.resolve()
    }

}
