import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface ContactFormData {
  salutation: 'frau' | 'herr' | '';
  name: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  subject: string;
  message: string;
  callbackDesired: 'ja' | 'nein' | '';
  appointmentDesired: 'ja' | 'nein' | '';
  preferredDate: string;
  captchaInput: string;
  privacyAccepted: boolean;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  isSubmitted: boolean = false;
  captchaCode: string = '';
  
  formData: ContactFormData = {
    salutation: '',
    name: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    subject: 'Allgemeine Anfrage',
    message: '',
    callbackDesired: '',
    appointmentDesired: '',
    preferredDate: '',
    captchaInput: '',
    privacyAccepted: false
  };

  constructor(private route: ActivatedRoute) {
    this.generateCaptcha();
  }

  ngOnInit(): void {
    // Check if query params have a specific service
    this.route.queryParams.subscribe(params => {
      if (params['service']) {
        const serviceId = params['service'];
        this.formData.subject = `Beratungsanfrage zu: ${this.capitalizeString(serviceId)}`;
        this.formData.appointmentDesired = 'ja';
      }
    });
  }

  generateCaptcha(): void {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 5; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    this.captchaCode = code;
  }

  submitForm(): void {
    if (this.formData.captchaInput.toUpperCase() !== this.captchaCode) {
      alert('Der eingegebene Sicherheitscode ist nicht korrekt. Bitte versuchen Sie es erneut.');
      this.generateCaptcha();
      this.formData.captchaInput = '';
      return;
    }

    if (!this.formData.privacyAccepted) {
      alert('Bitte stimmen Sie der Datenschutzerklärung zu.');
      return;
    }

    this.isSubmitted = true;
    window.scrollTo(0, 300);
  }

  resetForm(): void {
    this.isSubmitted = false;
    this.formData = {
      salutation: '',
      name: '',
      email: '',
      phone: '',
      street: '',
      city: '',
      subject: 'Allgemeine Anfrage',
      message: '',
      callbackDesired: '',
      appointmentDesired: '',
      preferredDate: '',
      captchaInput: '',
      privacyAccepted: false
    };
    this.generateCaptcha();
  }

  private capitalizeString(val: string): string {
    if (!val) return '';
    return val.charAt(0).toUpperCase() + val.slice(1).replace(/_/g, ' ');
  }
}
