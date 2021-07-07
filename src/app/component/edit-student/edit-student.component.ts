import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Student} from '../../model/student.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormBuilder, Validators} from '@angular/forms';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService,
    private router: Router,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder
  ) { }
  studentId: number | null = null
  student: Student | null = null
  isLoading = true
  isSubmitted = false
  isSucceed = false

  departments = ['Computer', 'Civil', 'Electrical', 'Electronics']
  semesters = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth']

  updateStudentForm = this.formBuilder.group({
    id: [0],
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    roll: [null, [Validators.required, Validators.min(100000), Validators.max(9999999999)]],
    reg: [null, [Validators.required, Validators.min(100000), Validators.max(9999999999)]],
    email: ['', [Validators.required, Validators.email]],
    department: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    semester: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]]
  })

  ngOnInit(): void {
    this.studentId = this.activatedRoute.snapshot.params.id
    if(this.studentId == null){
      this.snackBar.open('Etudiant introuvable', 'Fermer', {duration: 5000})
    }else if(this.studentId != null){
      this.updateStudent(this.studentId)
    }
  }
  updateStudent(id: number): void{
    try{
      this
        .studentService
        .getStudentById(id)
        .subscribe(
          (response) => {
            this.student = response
            this.isLoading = false
            // null
            if(this.student == null){
              this.snackBar.open('Etudiant introuvable', 'Fermer', {duration: 5000})
            }else if(this.student != null && this.student.id == id){
              this.updateStudentForm.setValue(this.student)
            }
          },
          (error) => {
            this.isLoading = false
            this.snackBar.open('Server Error', 'Fermer', {duration: 5000})
          }
        )
    }catch (e) {
      console.log(e.message)
    }
  }
  goToAllStudentsPage(): void {
    this.router.navigate(['/dashboard/all-student'])
  }
  onSubmit(value: Student): void{
    this.isSubmitted = true
    try{
      this.studentService
        .updateStudentByObj(value)
        .subscribe(
          (response) => {
            if(response == null){
              this.isSucceed = false
              this.snackBar.open('Sauvegarder echouer!', 'Fermer', {duration: 5000})

            }else if(response != null && response.id != value.id){
              this.isSucceed = false
              this.snackBar.open('Error Occurred!', 'Fermer', {duration: 5000})

            }else if(response != null && response.id == value.id){
              this.isSucceed = true
              this.snackBar.open('Etudiant sauvegarder avec succès', 'Bien', {duration: 5000})
              this.router.navigate(['/dashboard/all-student'])
            }
          },
          (error) => {
            this.isSucceed = false
            this.snackBar.open('Server Error!', 'Fermer', {duration: 5000})
          }
        )
    }catch (e) {
      console.log(e.message)
    }
    this.updateStudentForm.reset()
  }

  // getters
  get id(){
    return this.updateStudentForm.get('id')
  }
  get name(){
    return this.updateStudentForm.get('name')
  }
  get roll(){
    return this.updateStudentForm.get('roll')
  }
  get reg(){
    return this.updateStudentForm.get('reg')
  }
  get email(){
    return this.updateStudentForm.get('email')
  }
  get department(){
    return this.updateStudentForm.get('department')
  }
  get semester(){
    return this.updateStudentForm.get('semester')
  }
}
