import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { GitService } from 'src/app/services/api/git.service';

interface UserProps {
  name: string;
  login: string;
  avatar: string;
  link: string;
  created_at: Date | string;
  followers: number;
  following: number;
}

@Component({
  selector: 'app-infos-modal',
  templateUrl: './infos-modal.component.html',
  styleUrls: ['./infos-modal.component.scss'],
})
export class InfosModalComponent implements OnInit {
  user: UserProps | null = null;

  constructor(
    private dialogRef: MatDialogRef<InfosModalComponent>,
    private apiGit: GitService,
    @Inject(MAT_DIALOG_DATA) private data: string,
    private spinner: NgxSpinnerService,
  ) {}

  ngOnInit(): void {
    this.getUser(this.data);
  }

  getUser(user: string) {
    this.spinner.show();
    this.apiGit.getUser(user).subscribe((resp: any) => {
      this.user = {
        name: resp?.name || resp?.login,
        login: resp?.login,
        avatar: resp?.avatar_url,
        link: `https://github.com/${resp.login}`,
        created_at: resp?.created_at,
        followers: resp?.followers,
        following: resp?.following,
      };

      this.spinner.hide();
    });
  }

  close() {
    this.dialogRef.close();
  }
}
