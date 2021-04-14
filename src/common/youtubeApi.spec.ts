import { HttpGetClientSpy } from "./tests/mock-http-client";
import { YoutubeAPI } from "./youtubeApi";
import faker from 'faker';

type SutTypes ={
    sut: YoutubeAPI;
    httpGetClientSpy: HttpGetClientSpy;
}

const makeSut = (url:string = faker.internet.url(), apiKey: string = "be161e4a-849a-4073-954d-978ee68d2be5"): SutTypes => {
    const httpGetClientSpy = new HttpGetClientSpy();
    const sut = new YoutubeAPI(apiKey, url, httpGetClientSpy);

    return {sut, httpGetClientSpy}

}

describe('YoutubeApi', () => {
    it('Should call httpGetClient with correct URL', async (): Promise<void> => {
        const url = faker.internet.url();
        const { sut, httpGetClientSpy } = makeSut(url);
        await sut.emAlta()
        expect(httpGetClientSpy.url).toEqual(url);

    })
})
