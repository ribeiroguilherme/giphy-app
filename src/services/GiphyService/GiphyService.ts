import ICategory from '@/models/ICategory';
import IGifItem from '@/models/IGifItem';

interface ICategoryApiResponse {
  data: ICategory[];
}

interface ISearchApiResponse {
  data: IGifItem[];
}

export interface IGiphyService {
  fetchCategories(subCategory?: string): Promise<ICategory[]>;
  searchGifs(searchTerm: string): Promise<IGifItem[]>;
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

  public async searchGifs(searchTerm: string) {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${searchTerm}`);

    if (!response.ok) {
      throw Error('GiphyService#searchGifs(): Something went wrong');
    }

    const searchApiResponse = (await response.json()) as ISearchApiResponse;

    return searchApiResponse.data;
  }
}

export default GiphyService;
