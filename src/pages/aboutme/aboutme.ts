import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FriendsPage } from '../friends/friends';
import { SocialSharing } from '@ionic-native/social-sharing';
/**
 * Generated class for the AboutmePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aboutme',
  templateUrl: 'aboutme.html',
})
export class AboutmePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private socialSharing: SocialSharing) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutmePage');
  }

  goToFriends(){
    this.navCtrl.push(FriendsPage);
  }

  send(){
    // Check if sharing via email is supported
this.socialSharing.canShareViaEmail().then(() => {
  // Sharing via email is possible
}).catch(() => {
  // Sharing via email is not possible
});

// Share via email
this.socialSharing.shareViaEmail('รายละเอียด', 'หัวข้อ', ['naphatsawanrkp.22@gmail.com']).then(() => {
  // Success!
}).catch(() => {
  // Error!
});
  }
}
