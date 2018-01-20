import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '../quiz/translate.service';
import {QuestionPageComponent} from '../question-page/question-page.component';
import {Utilizator} from '../models/Utilizator';

class menuItem {
  url: string;
  text: string;
  active: boolean;
}


@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuPageComponent implements OnInit {

  urls: menuItem[];


  constructor(private route: ActivatedRoute, private router: Router, private translateService: TranslateService,
              private questionPageComponent: QuestionPageComponent) {
  }

  ChangeLanguage(Language: string) {
    this.translateService.Language = Language;
    this.questionPageComponent.ngOnInit();
    this.ngOnInit();
  }

  ngOnInit() {
    const data = sessionStorage.length;
    sessionStorage.getItem(sessionStorage.key(0));
    if (data === 1) {
      this.removeComponent({active: false, url: 'login', text: 'Login'});
      this.removeComponent({active: false, url: 'create-user-page', text: 'Create user'});
      this.addComponent({active: false, url: 'logout-page', text: 'Logout'});
      this.addComponent({active: false, url: 'generateQuiz', text: 'Generate Quiz'});
      this.addComponent({active: false, url: 'question-page', text: 'Filter and list questions'});
      this.addComponent({active: false, url: 'history', text: 'History'});
      const obj = JSON.parse(sessionStorage.getItem(sessionStorage.key(0)));
      if (obj.rangacces === 1) {
        this.addComponent({active: false, url: 'create-question-page', text: 'Add Question'});
      }
      this.router.navigate(['/login/' + obj.username + '/' + obj.parola]);
    } else {
      this.removeComponent({active: false, url: 'generateQuiz', text: 'Generate Quiz'});
      this.removeComponent({active: false, url: 'question-page', text: 'Filter and list questions'});
      this.removeComponent({active: false, url: 'create-question-page', text: 'Add Question'});
      this.removeComponent({active: false, url: 'history', text: 'History'});
      this.removeComponent({active: false, url: 'logout-page', text: 'Logout'});
    }
      console.log(this.urls);
    this.urls = [
      {
        active: false,
        url: 'question-page',
        text: this.translateService.GetTranslations('lbl.question-page')
      },
      {
        active: false,
        url: 'create-question-page',
        text: this.translateService.GetTranslations('lbl.create-question-page')
      },
      {
        active: false,
        url: 'generateQuiz',
        text: this.translateService.GetTranslations('lbl.generateQuiz')
      },
      {
        active: false,
        url: 'create-user-page',
        text: this.translateService.GetTranslations('lbl.create-user-page')
      },
      {active: false, url: 'logout-page', text: this.translateService.GetTranslations('lbl.logout-page')},
      {active: false, url: 'history', text: this.translateService.GetTranslations('lbl.History')}
    ];

  }

  navigate(url: menuItem) {
    const data = sessionStorage.length;
    for (let i = 0; i < this.urls.length; i++) {
      this.urls[i].active = false;
    }
    this.urls[this.urls.indexOf(url)].active = true;
    this.router.navigate(['/' + url.url]);
    if (url.text === 'Logout') {
      window.location.reload();
    }
  }
  addComponent(url: menuItem): void {
    this.urls.push(url);
  }
  removeComponent(url: menuItem): void {
    const index = this.urls.findIndex(x => x.text === url.text);
    if (index !== -1) {
      this.urls.splice(index, 1);
    }
  }
}
