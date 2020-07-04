import ICategory from '@/models/ICategory';

interface ICategoryApiResponse {
  data: ICategory[];
}

export interface IGiphyService {
  fetchCategories(subCategory?: string): Promise<ICategory[]>;
}

class GiphyService implements IGiphyService {
  private readonly apiKey: string;

  public constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  public async fetchCategories(subCategory?: string) {
    const response = await fetch(`https://api.giphy.com/v1/gifs/categories${subCategory ? `/${subCategory}` : ''}?api_key=${this.apiKey}`);

    if (!response.ok) {
      throw Error('GiphyService#fetchCategories(): Something went wrong');
    }

    const categoryApiResponse = (await response.json()) as ICategoryApiResponse;

    return categoryApiResponse.data;
  }
}

export default GiphyService;
