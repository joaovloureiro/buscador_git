import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SearchDataService } from 'src/app/services/tools/search-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() outputData = new EventEmitter<string>();

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private searchData: SearchDataService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.createForm();
    const params = this.route.snapshot.queryParams;
    if (params['q']) {
      this.form.get('text')?.setValue(params['q']);
    }
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
