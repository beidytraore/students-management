import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Result} from '../../model/result.model';
import {ResultService} from '../../service/result.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-result',
  templateUrl: './add-result.component.html',
  styleUrls: ['./add-result.component.scss']
})
export class AddResultComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private resultService: ResultService,
    private snackBar: MatSnackBar
  ) { }
  isSubmitted = false
  isSucceed = false
  isFailed = false
  feedbackMessage = ""

  addResultForm = this.formBuilder.group({
    id: [null],
    roll: [null, [Validators.required, Validators.min(100000), Validators.max(9999999999)]],
    bangla: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
    english: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
    math: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
    computer: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
    physics: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
    chemistry: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
    biology: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
  })

  ngOnInit(){
  }
  onSubmit(value: Result){
    this.isSubmitted = true
    try{
      this
        .resultService
        .postOneResult(value)
        .subscribe(
          (response) => {
            if(response == null){
               // failed: duplicate roll
              this.isSucceed = false
              this.isFailed = true
              this.feedbackMessage = "Rôle Duplique !"
              this.showSnackBar(this.feedbackMessage, 'Close')

            } else if(response != null && response.roll != value.roll){
              // server error: failed
              this.isSucceed = false
              this.isFailed = true
              this.feedbackMessage = "Server error!"
              this.showSnackBar(this.feedbackMessage, 'Close')

            } else if(response != null && response.roll == value.roll){
              this.isSucceed = true
              this.isFailed = false
              this.feedbackMessage = "Resultat ajouter avec succès!"
              this.showSnackBar(this.feedbackMessage, 'Bien')
            }
          },
          (error) => {
            this.isSucceed = false
            this.isFailed = true
            this.feedbackMessage = "Server error!"
            this.showSnackBar(this.feedbackMessage, 'Close')
          }
        )
    }catch (e){
      this.isSucceed = false
      this.isFailed = true
      this.feedbackMessage = "Error occurred!"
      this.showSnackBar(this.feedbackMessage, 'Close')
    }
    this.addResultForm.reset()
  }
  showSnackBar(message: string, action: string): void{
    this.snackBar.open(message, action, {duration: 5000})
  }
  refreshPage(): void{
    window.location.reload()
  }
  // getters
  get id(){
    return this.addResultForm.get('id')
  }
  get roll(){
    return this.addResultForm.get('roll')
  }
  get bangla(){
    return this.addResultForm.get('bangla')
  }
  get english(){
    return this.addResultForm.get('english')
  }
  get math(){
    return this.addResultForm.get('math')
  }
  get computer(){
    return this.addResultForm.get('computer')
  }
  get physics(){
    return this.addResultForm.get('physics')
  }
  get chemistry(){
    return this.addResultForm.get('chemistry')
  }
  get biology(){
    return this.addResultForm.get('biology')
  }
}
