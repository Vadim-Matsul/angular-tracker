import { Injectable } from '@angular/core';
import { Subject, type Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UIService {
  private subject: Subject<any> = new Subject<any>();
  private displayForm: boolean = false;

  toggleDisplayForm() {
    this.displayForm = !this.displayForm;
    this.subject.next(this.displayForm);
  }

  onToggleDisplayForm(): Observable<any> {
    return this.subject.asObservable();
  }
}
