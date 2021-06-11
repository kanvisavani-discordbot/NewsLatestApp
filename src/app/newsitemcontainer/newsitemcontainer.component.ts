import { Component, OnInit } from "@angular/core";
import { NewsService } from "../_services/news.service";
import {Article, Source, SourcesResponse} from '../_models/news/Source';
import { NewsItem } from "../_models/news/NewsItem";

import * as _ from "lodash";

@Component({
  selector: "news-item-container",
  inputs: ["article"],
  templateUrl: "./newsitemcontainer.component.html",
  styleUrls: ["./newsitemcontainer.component.css"]
})
export class NewsitemcontainerComponent implements OnInit {
  newsitems: NewsItem[];
  article: Article;

  constructor(private news: NewsService) {}

  ngOnInit() {}

}
