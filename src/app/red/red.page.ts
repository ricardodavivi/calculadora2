import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeRewardVideoConfig,  } from '@ionic-native/admob-free/ngx';
import { AlertController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-red',
  templateUrl: 'red.page.html',
  styleUrls: ['red.page.scss'],
})
export class RedPage {

  task: any;
  name:string;
  date: Date;
  tasks: any[]=[];
  
  


  constructor(private alertCtrl: AlertController,
    private admobFree: AdMobFree,) {
    let tasksJson = localStorage.getItem('tasksDb');
      if (tasksJson != null) {
        this.tasks = JSON.parse(tasksJson);
    } 
  }
  async ngOnInit() {  
    
    const bannerConfig: AdMobFreeBannerConfig = {
      // add your config here
      // for the sake of this example we will just use the test config
      id:'ca-app-pub-9717608211927606/9263592523',
      isTesting:false,
      autoShow: true,
      bannerAtTop:false,
      overlap:true
     }
     this.admobFree.banner.config(bannerConfig);
     
     this.admobFree.banner.prepare().then(()=>
     { });
     
    
      
  } 
  

  display = 0;
  memory = 0;
  state = 'number';
  operator = '+';
  decimal = false;
  decimals = 0;
  

  clickNumber(n: number) {
    switch (this.state) {
      case 'number':
        if (this.decimal) {
          this.decimals++;
          this.display = this.display + n * Math.pow(10, -this.decimals);
        } else {
          this.display = this.display * 10 + n;
        }
        break;
      case 'operator':
        this.display = n;
        this.state = 'number';
        break;
      case 'result':
        this.memory = 0;
        this.display = n;
        this.state = 'number';
        
    }
    console.log(this.display);
  }


  clickOperator(o: string) {
    // console.log('clickOperator inicio');
    this.calculate();
    this.operator = o;
    this.memory = this.display;
    this.state = 'operator';
    // console.log('clickOperator fin');
  }
  

  calculate() {
    // tslint:disable-next-line:no-eval
    // console.log('calculate inicio');
    // console.log('' + '' + this.memory + this.operator + '(' + this.display + ')');
    this.display = eval('' + this.memory + this.operator + '(' + this.display + ')');
    this.memory = 0;
    this.state = 'result';
    this.operator = '+';
    this.decimal = false;
    this.decimals = 0;
    console.log(this.display);
  }

  buttonClearClick() { 
    this.display = this.display.valueOf();  

  }

  adPercent() {
    this.display = (this.display * this.memory)/100;  
    
  }

  resetLastNumber() {
    this.display = 0;
    this.state = 'number';
    this.decimal = false;
    this.decimals = 0;
  }

  reset() {
    this.display = 0;
    this.memory = 0;
    this.state = 'number';
    this.operator = '+';
    this.decimal = false;
    this.decimals = 0;
  }

  changeSign() {
    this.display = this.display * -1;
  }

  setDecimal() {
    this.decimal = true;
  }
  async showAdd() {
    const alert = await this.alertCtrl.create({
      header: 'A que conta se refere?',
      inputs: [
        {
          name: 'taskToDo',
          type: 'text',
          placeholder: 'Descreva'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'primary',
          handler: () => {            
            console.log('clicked cancel')
          }
        },
        {
          text: 'Adicionar',
          handler: (form) => {
            this.salvarTask(form.taskToDo);
          }
        } 
      ]
    });
    await alert.present();
  }

  async salvarTask(taskToDo: string) {
    let task = {
      name: taskToDo,
      display: this.display,      
      date: new Date(),
    };
    this.tasks.push(task);
    localStorage.setItem('tasksDb', JSON.stringify(this.tasks));
    console.log(task);
  }
  showAdMobFreeRewardVideoAds()
    {
      const rewardVideoConfig:AdMobFreeRewardVideoConfig=
      {
        id:'ca-app-pub-9717608211927606/3770365338',
        isTesting:false,
        autoShow:true,
      }
      this.admobFree.rewardVideo.config(rewardVideoConfig);
      this.admobFree.rewardVideo.prepare().then(()=>
      {
      });
    }
}