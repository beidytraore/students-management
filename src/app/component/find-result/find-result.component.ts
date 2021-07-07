import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Result} from '../../model/result.model';
import {ResultService} from '../../service/result.service';

@Component({
  selector: 'app-find-result',
  templateUrl: './find-result.component.html',
  styleUrls: ['./find-result.component.scss']
})
export class FindResultComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private resultService: ResultService
  ) { }
  result: Result | null = null
  isFailed = false
  isSucceed = false
  isSubmitted = false
  feedbackMessage = ""

  searchStudentForm = this.formBuilder.group({
    roll: [null, [Validators.required, Validators.min(100000), Validators.max(9999999999)]],
    reg: [null, [Validators.required, Validators.min(100000), Validators.max(9999999999)]]
  })

  ngOnInit(): void {
  }
  onSubmit(value: any): void{
    this.isSubmitted = true
    try{
      this
        .resultService
        .getResultByRoll(value.roll)
        .subscribe(
          (response) => {
            this.result = response
            if(this.result == null){
              // result not found
              this.isFailed = true
              this.isSucceed = false
              this.feedbackMessage = "Etudiant introuvable!"
              this.showSnackBar(this.feedbackMessage)

            } else if(this.result != null && this.result.roll != value.roll){
              this.isFailed = true
              this.isSucceed = false
              this.feedbackMessage = "Rôle introuvable!"
              this.showSnackBar(this.feedbackMessage)

            } else if(this.result != null && this.result.roll == value.roll){
              this.isFailed = false
              this.isSucceed = true
              this.feedbackMessage = "Resultat!"
              this.showSnackBar(this.feedbackMessage)

            }
          },
          (error) => {
            this.isFailed = true
            this.isSucceed = false
            this.feedbackMessage = "Server Error!"
            this.showSnackBar(this.feedbackMessage)
          }
        )

    }catch (e){
      this.isFailed = true
      this.isSucceed = false
      this.feedbackMessage = "Error occurred!"
      this.showSnackBar(this.feedbackMessage)
    }
    this.searchStudentForm.reset()
  }
  refreshPage(): void{
    window.location.reload()
  }
  showSnackBar(message: string): void{
    this.snackBar.open(message, 'Fermer', {duration: 5000})
  }
  // getters
  get roll(){
    return this.searchStudentForm.get('roll')
  }
  get reg(){
    return this.searchStudentForm.get('reg')
  }
}
