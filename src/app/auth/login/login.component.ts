import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
@Component({
    selector: 'app',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})
 
export class LoginComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    loading = false;
    constructor(private formBuilder: FormBuilder) { }
 
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }
 
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
 
    onSubmit() {
        this.submitted = true;
 
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
 
        alert('SUCCESS!! :-)')
    }
}