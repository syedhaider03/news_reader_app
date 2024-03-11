declare module RequestOptions {
  type CountryCode =
    | 'ae'
    | 'ar'
    | 'at'
    | 'au'
    | 'be'
    | 'bg'
    | 'br'
    | 'ca'
    | 'ch'
    | 'cn'
    | 'co'
    | 'cu'
    | 'cz'
    | 'de'
    | 'eg'
    | 'fr'
    | 'gb'
    | 'gr'
    | 'hk'
    | 'hu'
    | 'id'
    | 'ie'
    | 'il'
    | 'in'
    | 'it'
    | 'jp'
    | 'kr'
    | 'lt'
    | 'lv'
    | 'ma'
    | 'mx'
    | 'my'
    | 'ng'
    | 'nl'
    | 'no'
    | 'nz'
    | 'ph'
    | 'pl'
    | 'pt'
    | 'ro'
    | 'rs'
    | 'ru'
    | 'sa'
    | 'se'
    | 'sg'
    | 'si'
    | 'sk'
    | 'th'
    | 'tr'
    | 'tw'
    | 'ua'
    | 'us'
    | 've'
    | 'za';

  type Category =
    | 'business'
    | 'entertainment'
    | 'general'
    | 'health'
    | 'science'
    | 'sports'
    | 'technology';

  type SourceID = string;

  type Query = string;

  type PageSize = number;

  type Page = number;

  type searchQuery = string;

  type SearchIn = 'title' | 'description' | 'content';

  type Sources = string; // Comma-separated string of identifiers (maximum 20)

  type Domains = string; // Comma-separated string of domains

  type excludeDomains = string; // Comma-separated string of domains

  type FromDate = string; // Date and optional time in ISO 8601 format

  type ToDate = string; // Date and optional time in ISO 8601 format

  type Language =
    | 'ar'
    | 'de'
    | 'en'
    | 'es'
    | 'fr'
    | 'he'
    | 'it'
    | 'nl'
    | 'no'
    | 'pt'
    | 'ru'
    | 'sv'
    | 'ud'
    | 'zh';

  type SortBy = 'relevancy' | 'popularity' | 'publishedAt';

  type PageSize = number;

  type page = number;

  type AllNews = {
    q?: searchQuery;
    searchIn?: SearchIn;
    sources?: Sources;
    domains?: Domains;
    excludeDomains?: excludeDomains;
    from?: FromDate;
    to?: ToDate;
    language?: Language;
    sortBy?: SortBy;
    pageSize?: PageSize;
    page?: page;
  };

  type TopHeadlines = {
    country?: CountryCode;
    category?: Category;
    sources?: Sources;
    q?: searchQuery;
    pageSize?: PageSize;
    page?: page;
  };

  type TopHeadlinesSources = {
    category?: Category;
    language?: Language;
    country?: CountryCode;
  };
}

interface ResponseHandler<T> {
  articles: T;
  status: string;
  totalResults: number;
}

interface ValidationErrors {
  errorMessage: string;
  field_errors: Record<string, string>;
}

declare module Response {
  export interface Everything {
    title: string;
    author: string;
    source: Source;
    publishedAt: string;
    url: string;
  }

  export interface Source {
    id: any;
    name: string;
  }

  export interface TopHeadlines {
    title: string;
    author: string;
    source: Source;
    publishedAt: string;
    url: string;
  }

  export interface TopHeadlineSources {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
  }
}
