import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../../../service/email.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {

  public subscription: Subscription;
  newsletterForm: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private _emailService: EmailService) {
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

    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.newsletterForm.value));
    let user = {
      name: this.newsletterForm.value.name,
      email: this.newsletterForm.value.email
    }
    this.subscription = this._emailService.sendEmail(user).
      subscribe(data => {
        let msg = data['message']
        alert(msg);
        // console.log(data, "success");
      }, error => {
        console.error(error, "error");
      });
  }

}
