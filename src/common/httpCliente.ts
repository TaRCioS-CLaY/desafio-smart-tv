export interface HttpGetClient {
    get(apiKey: string, url: string): Promise<void>
}
