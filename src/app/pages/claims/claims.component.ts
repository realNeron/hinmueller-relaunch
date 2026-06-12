import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface ClaimFormData {
  claimType: 'sachschaden' | 'personenschaden' | 'kfz' | '';
  occurrenceDate: string;
  description: string;
  damagedItems: string;
  estimatedCost: string;
  witnessesExist: 'ja' | 'nein' | '';
  witnessInfo: string;
  policeInvolved: 'ja' | 'nein' | '';
  policeDetails: string;
  
  // Personal & Insurance
  name: string;
  address: string;
  phone: string;
  email: string;
  callbackDesired: 'ja' | 'nein' | '';
  insuranceNumber: string;
  bankAccount: string;
  taxDeductible: 'ja' | 'nein' | '';
  additionalInfo: string;
  
  // Security & Legal
  captchaInput: string;
  privacyAccepted: boolean;
}

@Component({
  selector: 'app-claims',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './claims.component.html',
  styleUrl: './claims.component.css'
})
export class ClaimsComponent {
  currentStep: number = 1;
  captchaCode: string = '';
  isSubmitted: boolean = false;

  formData: ClaimFormData = {
    claimType: '',
    occurrenceDate: '',
    description: '',
    damagedItems: '',
    estimatedCost: '',
    witnessesExist: '',
    witnessInfo: '',
    policeInvolved: '',
    policeDetails: '',
    name: '',
    address: '',
    phone: '',
    email: '',
    callbackDesired: '',
    insuranceNumber: '',
    bankAccount: '',
    taxDeductible: '',
    additionalInfo: '',
    captchaInput: '',
    privacyAccepted: false
  };

  constructor() {
    this.generateCaptcha();
  }

  generateCaptcha(): void {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 5; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    this.captchaCode = code;
  }

  nextStep(): void {
    if (this.currentStep < 4) {
      this.currentStep++;
      window.scrollTo(0, 300);
    }
  }

  prevStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
      window.scrollTo(0, 300);
    }
  }

  submitClaim(): void {
    if (this.formData.captchaInput.toUpperCase() !== this.captchaCode) {
      alert('Der eingegebene Sicherheitscode stimmt nicht überein. Bitte versuchen Sie es erneut.');
      this.generateCaptcha();
      this.formData.captchaInput = '';
      return;
    }

    if (!this.formData.privacyAccepted) {
      alert('Bitte stimmen Sie der Datenschutzerklärung zu, um fortzufahren.');
      return;
    }

    // Mocking the API response
    this.isSubmitted = true;
    this.currentStep = 5;
    window.scrollTo(0, 300);
  }

  resetForm(): void {
    this.isSubmitted = false;
    this.currentStep = 1;
    this.formData = {
      claimType: '',
      occurrenceDate: '',
      description: '',
      damagedItems: '',
      estimatedCost: '',
      witnessesExist: '',
      witnessInfo: '',
      policeInvolved: '',
      policeDetails: '',
      name: '',
      address: '',
      phone: '',
      email: '',
      callbackDesired: '',
      insuranceNumber: '',
      bankAccount: '',
      taxDeductible: '',
      additionalInfo: '',
      captchaInput: '',
      privacyAccepted: false
    };
    this.generateCaptcha();
  }
}
