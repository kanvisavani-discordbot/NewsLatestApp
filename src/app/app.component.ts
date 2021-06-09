import { Component } from "@angular/core";
import { NewsService } from "./_services/news.service";
import * as sampleSize from "lodash/sampleSize";

import { SourcesResponse, Source, Article } from "./_models/news/Source";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "News App";
  articles: Article[];

  constructor(private news: NewsService) {}

  ngOnInit() {
    this.news.sources().subscribe(data => {
      this.articles = sampleSize(data.articles, 3);
    });
  }
}
