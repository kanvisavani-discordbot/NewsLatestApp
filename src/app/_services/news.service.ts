import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { SourcesResponse, NewsApiResponse, Article } from "../_models/news/Source";
import { NewsItem } from "../_models/news/NewsItem";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  constructor(private http: HttpClient) {}

  sources(): Observable<NewsApiResponse> {
    return this.http
      .get<NewsApiResponse>("https://newsapi.org/v2/top-headlines?country=ca&apiKey=3d7db8d60b83485292be15b60fd47e25")
      .pipe(map((res: NewsApiResponse) => res));
  }

  headlines(source: string): Observable<NewsItem> {
    return this.http
      .get<NewsItem>("https://newsapi.org/v2/top-headlines?country=ca&apiKey=3d7db8d60b83485292be15b60fd47e25" + source)
      .pipe(map((res: any) => res.articles));
  }
}
