import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UserPlantService } from '../user-plant.service';
import { UserPlant } from '../userPlant';
import { UserService } from '../user.service';

declare var gapi: any;
declare var GoogleAuth: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  [x: string]: any;
  userPlants: UserPlant[];
  userId = sessionStorage.getItem('ID:');
  loggedIn: boolean = false;
  currentUser: string = 'Please Log In';
  picVar: string = '/assets/plants2.jpg';

  SCOPE = 'https://www.googleapis.com/auth/drive.metadata.readonly';

  constructor(
    private userPlantService: UserPlantService,
    public userService: UserService
  ) {}
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('ID:') === null) {
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
      this.currentUser = 'Welcome ' + sessionStorage.getItem('Name:');
      this.picVar = sessionStorage.getItem('Picture:');
      this.getUserPlants();
    }
    console.log(gapi);
  }

  getUserPlants(): void {
    this.userPlantService.getUserPlants().subscribe((result) => {
      let filteredResult = result.filter((c) => c.plantUserID == this.userId);
      this.userPlants = filteredResult;
    });
  }

  // Initialize the gapi.client object, which app uses to make API requests.
  // Get API key and client ID from API Console.
  // 'scope' field specifies space-delimited list of access scopes.
  //   gapi.client
  //     .init({
  //       apiKey: 'AIzaSyCzFfJTTTyZdN2T9PGo7Mfe5fVpiEKF2Ck',
  //       clientId:
  //         '1053501146404-gn60miljv5ffee22rsnrhhfl41blh9kh.apps.googleusercontent.com',
  //       discoveryDocs: [discoveryUrl],
  //       scope: 'https://www.googleapis.com/auth/drive.metadata.readonly',
  //     })
  //     .then(function () {
  //       GoogleAuth = gapi.auth2.getAuthInstance();

  //       GoogleAuth.isSignedIn.listen(this.updateSigninStatus);

  //       this.updateSigninStatus();
  //     })
  //     .catch((err) => console.log(err));
  // }
  // updateSigninStatus() {
  //   console.log(GoogleAuth.currentUser.get());
}
