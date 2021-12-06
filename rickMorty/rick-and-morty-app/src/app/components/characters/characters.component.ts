import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  public characters: any;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.data.getCharacters().subscribe(
      (data) => {
        this.characters = data["results"];
      },
      (err) => console.log(err)
    );
  }

  // print(){
  //   console.log(this.characters)
  // }
}
