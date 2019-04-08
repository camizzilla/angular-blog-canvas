import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {

  newsletterForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.newsletterForm = fb.group({
      name: ["",
        [
          Validators.required,
          Validators.maxLength(30)
        ]
      ],
      email: ["",
        Validators.required
      ]
    });
  }

  ngOnInit() {
  }

  getValueNewsletter() {
    console.log(this.newsletterForm.value);
    console.log(this.newsletterForm.controls.name.value);
  }

}
