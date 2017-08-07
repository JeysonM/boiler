import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import { FileChooser } from '@ionic-native/file-chooser';
import { MediaPlugin, FileChooser} from 'ionic-native';
//import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nativepath: string;
  file;
  //nativeAudio;

  constructor(public navCtrl: NavController) {

  }

  filechooser() {
    FileChooser.open()
    .then(uri => {
      (<any>window).Filepath.resolveNativePath(uri, (result) => {
        this.nativepath = result;
        this.audioplay();
      }, (err) => {
        alert(err);
      })
    
    })
    .catch(e => console.log(e));
  }



  audioplay() {
    var pathalone = this.nativepath.substring(8);

    this.file = new MediaPlugin(pathalone,(status) => {

    });

    ///src/sound/
    //this.file = this.media.create('../sound/Hydrogen.mp3');
    this.file.play(); 

    //var audio = new Audio('../sound/Hydrogen.mp3'');
    //audio.play();
    //this.nativeAudio.preloadSimple('uniqueId1', '../sound/Hydrogen.mp3');
    //this.nativeAudio.play('uniqueId1', () => console.log('uniqueId1 is done playing'));
  }

  // playsound(){
  //   this.file.play();
  // }

}
