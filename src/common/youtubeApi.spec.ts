import { HttpGetClientSpy } from "./tests/mock-http-client";
import { YoutubeAPI } from "./youtubeApi";

type SutTypes ={
    sut: YoutubeAPI;
    httpGetClientSpy: HttpGetClientSpy;
}

const makeSut = (url:string = 'any_url', apiKey: string = "apiK"): SutTypes => {
    const httpGetClientSpy = new HttpGetClientSpy();
    const sut = new YoutubeAPI(apiKey, url, httpGetClientSpy);

    return {sut, httpGetClientSpy}

}

describe('YoutubeApi', () => {
    it('Should call httpGetClient with correct URL', async (): Promise<void> => {
        const url = 'other_url';
        const { sut, httpGetClientSpy } = makeSut(url);
        await sut.emAlta()
        expect(httpGetClientSpy.url).toEqual(url);

    })
})
