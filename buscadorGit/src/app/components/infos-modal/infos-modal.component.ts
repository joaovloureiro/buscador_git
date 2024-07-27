import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GitService } from 'src/app/services/api/git.service';

@Component({
  selector: 'app-infos-modal',
  templateUrl: './infos-modal.component.html',
  styleUrls: ['./infos-modal.component.scss'],
})
export class InfosModalComponent implements OnInit {
  user: any;

  constructor(
    private dialogRef: MatDialogRef<InfosModalComponent>,
    private apiGit: GitService,
    @Inject(MAT_DIALOG_DATA) private data: string,
  ) {}

  ngOnInit(): void {
    this.getUser(this.data);
  }

  getUser(user: string) {
    this.apiGit.getUser(user).subscribe((resp: any) => {
      console.log(resp);

      this.user = {
        name: resp?.name || resp?.login,
        login: resp?.login,
        avatar: resp?.avatar_url,
        link: `https://github.com/${resp.login}`,
        created_at: resp?.created_at,
        followers: resp?.followers,
        following: resp?.following,
      };
    });
  }

  close() {
    this.dialogRef.close();
  }
}
