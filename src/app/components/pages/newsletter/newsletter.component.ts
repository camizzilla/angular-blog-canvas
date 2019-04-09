import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {

  newsletterForm: FormGroup;
  submitted: boolean = false;

  constructor(fb: FormBuilder) {
    this.newsletterForm = fb.group({
      name: ["",
        [
          Validators.required,
          Validators.maxLength(30)
        ]
      ],
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
    });
  }

  ngOnInit() {
  }

  get f() {
    return this.newsletterForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.newsletterForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.newsletterForm.value))
  }

}
