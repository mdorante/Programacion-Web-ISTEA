import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  public episodes: any

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.getEpisodes()
  }

  getEpisodes() {
    this.data.getEpisodes().subscribe(
      (data) => {
        this.episodes = data["results"];
      },
      (err) => console.log(err)
    );
  }

}
