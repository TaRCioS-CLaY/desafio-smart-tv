import { HttpGetClient } from "./httpCliente";
import { YoutubeAPI } from "./youtubeApi";


describe('YoutubeApi', () => {
    it('Should call httpGetClient with correct URL', async (): Promise<void> => {
        class HttpGetClientSpy implements HttpGetClient {
            apiKey?: string;
            url?: string;

            get(apiKey: string, url: string): Promise<void> {
                this.apiKey = apiKey;
                this.url = url;
                return Promise.resolve()
            }

        }
        const url = 'url/teste';
        const httpGetClient = new HttpGetClientSpy();
        const apiKey = 'apiK';

        const sut = new YoutubeAPI(apiKey, url, httpGetClient);
        await sut.emAlta()
        expect(httpGetClient.url).toEqual(url);

    })
})
