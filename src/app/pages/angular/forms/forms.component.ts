import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {constants} from '../../../сonstants/constants';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {


  form: FormGroup;
  errorsForm: object = constants;

  constructor() {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(3), Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      skills: new FormArray([]),
      address: new FormGroup({
        country: new FormControl('ru'),
        city: new FormControl('', Validators.required),
      })
    });
  }

  submit(): any {
    if (this.form.valid) {
      const formData = {...this.form.value};
      console.log('form: ', formData);
    }
  }

  setCapital(): any {
    const cityMap = {
      ru: 'Moscow',
      ua: 'Kyiv',
      by: 'Minsk',
    };
    const cityKey = this.form.get('address').get('country').value;
    const city = cityMap[cityKey];

    this.form.patchValue({address: {city}});
  }
  addSkills(): any {
    const control = new FormControl('', Validators.required);
    (this.form.get('skills') as FormArray).push(control);
  }
}
