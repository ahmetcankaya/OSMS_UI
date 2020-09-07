import { PipeTransform, Pipe } from '@angular/core'
import { Student } from '../models/student'

@Pipe({
    name:'filter'
})

export class StudentFilterPipe implements PipeTransform {
    transform(students:Student[], searchName:string): Student[]{
        if(!students || !searchName){
            return students
        }
        
        return students.filter(student=> {
           var studentName= student.Name.toLowerCase().indexOf(searchName.toLowerCase()) !== -1
           var studentSureName= student.SureName.toLowerCase().indexOf(searchName.toLowerCase()) !== -1
           return studentName || studentSureName
        })
    }
}