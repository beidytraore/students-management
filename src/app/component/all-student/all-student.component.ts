import { Component, OnInit } from '@angular/core';
import {Student} from '../../model/student.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrls: ['./all-student.component.scss']
})
export class AllStudentComponent implements OnInit {

  constructor(
    private studentService: StudentService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  isLoading = true
  students: Student[] = []
  isStudentsEmpty: boolean = (this.students == []) ? true : false
  studentColumns = ["nom", "rôle", "reg", "departement", "semestre", "editer", "supprimer"]

  // ripple data >>
  rippleUnbounded = true
  rippleCentered = false
  rippleRadius = 30

  ngOnInit(): void {
   this.updateStudents()
  }

  updateStudents(): void{
    this.isLoading = true
    try {
      console.log('La mise à jour des étudiants Commencés....')
      this.studentService.getAllStudent().subscribe(
        (response) => {
          // got a response can be empty and full of data
          // loading completed
          this.students = response
          this.isLoading = false
        },
        (error) => {
          // error
          // loading completed
          this.isLoading = false
        }
      )
    }catch (e){
      console.log(e.message)
    }
  }
  reload(){
    window.location.reload()
  }
  deleteStudent(id: number){
    this.isLoading = true
    this.studentService.deleteStudentStudentById(id).subscribe(
      (response) => {
        console.log(response)
        this.updateStudents()
        this.snackBar.open(response.toString(), 'Fermer',{duration: 5000})
      },
      (error) => {
        this.isLoading = false
        this.students = []
        this.updateStudents()
      }
    )
  }
  goToEditPage(id: number){
    try{
      this.router.navigate(['/dashboard/edit-student', id])
    }catch (e) {
      console.log(e.message)
    }
  }
}
