import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Student} from '../../model/student.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.scss']
})
export class SearchStudentComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private snackBar: MatSnackBar
  ) { }

  student: Student | null = null
  isSubmitted = false
  isSucceed = false
  isFailed = false
  feedbackMessage = ""

  searchStudentForm = this.formBuilder.group({
    roll: [null, [Validators.required, Validators.min(100000), Validators.max(9999999999)]],
    reg: [null, [Validators.required, Validators.min(100000), Validators.max(9999999999)]]
  })

  ngOnInit(): void {
  }
  onSubmit(value: any): void{
    this.isSubmitted = true
    try {
      this
        .studentService
        .getStudentByRoll(value.roll)
        .subscribe(
          (response) => {
            this.student = response
            if(this.student == null){
              // no student found
              this.isSucceed = false
              this.isFailed = true
              this.feedbackMessage = "Student profile not found!"
              this.showSnackBar(this.feedbackMessage)

            } else if(this.student != null && this.student.reg != value.reg){
              // student found but reg mismatched
              this.isSucceed = false
              this.isFailed = true
              this.feedbackMessage = "Reg no mismatched!"
              this.showSnackBar(this.feedbackMessage)

            } else if(this.student != null && this.student.reg == value.reg && this.student.roll == value.roll){
              // succeed
              this.isSucceed = true
              this.isFailed = false
              this.feedbackMessage = "Student Found!"
              this.showSnackBar(this.feedbackMessage)
            }
          },
          (error) => {
            // failed
            // server error
            this.isSucceed = false
            this.isFailed = true
            this.feedbackMessage = "Server Error!"
            this.showSnackBar(this.feedbackMessage)
          }
        )
    }catch (e){
      console.log(e.message)
      this.showSnackBar('Error Occurred')
    }
    this.searchStudentForm.reset()
  }
  showSnackBar(message: string): void{
    this.snackBar.open(message, 'Close', {duration: 5000})
  }
  refreshPage(): void{
    window.location.reload()
  }
  // getters
  get roll(){
    return this.searchStudentForm.get('roll')
  }
  get reg(){
    return this.searchStudentForm.get('reg')
  }
}
