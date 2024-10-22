import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, ValidatorFn, AbstractControl, ValidationErrors, Form} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  public message!: FormGroup;
  showModal: boolean = false;


  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.createFormControl()
  }
  createFormControl(): void {
    this.message = this._fb.group({
      name: [null, this.onInputFieldValidation()],
      email: [null, this.onInputFieldValidation()],
      view: [null]
      

    });
  }
  onInputFieldValidation(): ValidatorFn {
    return (nameControl: AbstractControl): ValidationErrors | null => {
      if (null == nameControl.value || ('' == nameControl.value)) {
        return {
          inputFieldValidation: {
            message: "*Required"
          }

        }
      }
      return null;
    }
  }
  onFormSubmitClick(): void {
    if(this.message.valid){
      console.log(this.message.value);
      this.showModal = true;
      this.message.reset();
    }else{
      this.message.markAllAsTouched();
    }
  }

  closeModal() {
    this.showModal = false; // Close the modal
  }

  


}
