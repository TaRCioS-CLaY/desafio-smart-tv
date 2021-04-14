import { HttpGetClient } from "./httpClient";

export class YoutubeAPI {
    constructor(
        private readonly apiKey: string,
        private readonly url: string,
        private readonly httpGetClient: HttpGetClient
    ) { }

    async emAlta(): Promise<void> {
        await this.httpGetClient.get({ apiKey: this.apiKey, url: this.url })
    }

}
