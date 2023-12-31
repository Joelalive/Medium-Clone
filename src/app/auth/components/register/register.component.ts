import { Component } from "@angular/core";
import { ReactiveFormsModule, Validators, FormBuilder } from "@angular/forms";
import { Store } from "@ngrx/store";
import { register } from "../../store/actions";
import { RegisterRequestInterface } from "../../types/registerRequest.interface";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'mc-register',
    templateUrl: './register.component.html',
    standalone: true,
    imports: [ReactiveFormsModule, RouterLink]
})

export class RegisterComponent {

    form = this.fb.nonNullable.group({
        userName: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required]
    });

    constructor(private fb: FormBuilder, private store: Store) {}


    onSubmit() {
        const request: RegisterRequestInterface = {
            user: this.form.getRawValue() }
        this.store.dispatch(register({request}));
        console.log(request);
    }
}