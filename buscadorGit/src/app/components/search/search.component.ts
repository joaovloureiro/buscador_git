import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchDataService } from 'src/app/services/tools/search-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() outputData = new EventEmitter<string>();

  form!: FormGroup;

  constructor(private fb: FormBuilder, private searchData: SearchDataService) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      text: [''],
    });
  }

  onSubmit() {
    this.searchData.setSearchData(this.form.get('text')?.value);
  }
}
