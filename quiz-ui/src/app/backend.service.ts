import {Headers, Http, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Injectable} from '@angular/core';
import {Intrebare} from './models/Intrebare';
import {TraducereIntrebare} from './models/TraducereIntrebare';
import {Raspuns} from './models/Raspuns';
import {TraducereRaspuns} from './models/TraducereRaspuns';
import {Utilizator} from './models/Utilizator';

@Injectable()
export class BackendService {

  headers = new Headers({'Content-Type': 'application/json'});
  options = new RequestOptions({headers: this.headers});
  user = 'test';

  constructor(private http: Http) {
  }

  public getAllQuestions(): Observable<Intrebare[]> {
    return this.http.get('http://localhost:9090/getIntrebari', this.options).map(response => response.json()).catch(this.handleError);
  }

  public test(): Observable<any> {
    return this.http.get('http://localhost:9090/getIntrebari', this.options).map(response => {
      return response.json();
    }).catch(this.handleError);
  }

  public updateQuestion(question: Intrebare): Observable<string> {
    return this.http.put('http://localhost:9090/updateIntrebare', question, this.options).map(response => response.toString());
  }

  public addQuestion(question: Intrebare): Observable<any> {
    return this.http.put('http://localhost:9090/createIntrebare', question, this.options).map(response => response.json()).catch(this.handleError);
  }

  public addQuestionTrans(question: TraducereIntrebare): Observable<any> {
    return this.http.put('http://localhost:9090/createIntrebariTraduse', question, this.options).map(response => response.json()).catch(this.handleError);
  }

  public addAnswer(raspuns: Raspuns): Observable<any> {
    return this.http.put('http://localhost:9090/createRaspuns', raspuns, this.options).map(response => response.json()).catch(this.handleError);
  }

  public addAnswerTrans(raspuns: TraducereRaspuns): Observable<any> {
    return this.http.put('http://localhost:9090/createRaspunsTraduse', raspuns, this.options).map(response => response.json()).catch(this.handleError);
  }

  public getAnswersByQuestion(id: number): Observable<any> {
    const link = 'http://localhost:9090/getRaspunsByIntrebare/' + id;
    return this.http.get(link).map(response => response.json()).catch(this.handleError);
  }

  public getTranslationsOfQuestion(id: number): Observable<any> {
    const link = 'http://localhost:9090/getIntrebariTraduseByIntrebare/' + id;
    return this.http.get(link).map(response => response.json()).catch(this.handleError);
  }

  public getTranslationsOfAnswer(id: number): Observable<any> {
    const link = 'http://localhost:9090/getRaspunsTraduseByRaspuns/' + id;
    return this.http.get(link).map(response => {
      return response.json();
    }).catch(this.handleError);
  }

  public deleteQuestion(id: number) {
    const link = 'http://localhost:9090/deleteIntrebare/' + id;
    return this.http.get(link);
  }

  private handleError(error: any): Observable<any> {
    // console.error(error);
    return error.message || error;
  }

  public filterQuestions(nivelDif: number[], limbaj: string, tehnologie: string, domeniu: string, nrRasp: number[], dupaCuv: string, caseSens: boolean, limba: string): Observable<Intrebare[]> {
    let niv = '';
    let nrR = '';
    for (let i = 0; i < nivelDif.length; i++) {
      if (i < nivelDif.length - 1) {
        niv += nivelDif[i] + ',';
      }
      else {
        niv += nivelDif[i];
      }
    }
    if (niv.length == 0) {
      niv = '___';
    }
    if (limbaj.length == 0) {
      limbaj = '___';
    }
    if (tehnologie.length == 0) {
      tehnologie = '___';
    }
    if (domeniu.length == 0) {
      domeniu = '___';
    }
    for (let i = 0; i < nrRasp.length; i++) {
      if (i < nrRasp.length - 1) {
        nrR += nrRasp[i] + ',';
      }
      else {
        nrR += nrRasp[i];
      }
    }
    if (nrR.length == 0) {
      nrR = '___';
    }

    if (dupaCuv.length == 0) {
      dupaCuv = '___';
    }
    const link = 'http://localhost:9090/filter/' + niv + '/' + limbaj + '/' + domeniu + '/' + tehnologie + '/' + nrR + '/' + dupaCuv + '/' + caseSens + '/' + limba;
    console.log(link);
    return this.http.get(link, this.options).map(response => response.json()).catch(this.handleError);
  }

  login(username: string, encodedPass: string): Observable<any> {
    const link = 'http://localhost:9090/login/' + username + '/' + encodedPass;
    return this.http.get(link, this.options).map(response => response.json()).catch(this.handleError);
  }

  public createUser(user: Utilizator): Observable<any> {
    return this.http.put('http://localhost:9090/create', user, this.options).map(response => response.json()).catch(this.handleError);
  }
}
