import { Injectable } from '@angular/core';
import axios from 'axios';
import { apiRES } from '../interfaces/apiRES';


@Injectable({
    providedIn: 'root'

})


export class ApiService {
    SERVER = 'http://localhost:3000'
    constructor() { }

    //GET ALL record from 'table'
    async selectAll(table: string): Promise<apiRES> {
        try {
            const response = await axios.get(`${this.SERVER}/${table}`);
            return {
                status: 200,
                data: response.data
            }
        }
        catch (error: any) {
            return {
                status: 500,
                message: "Hiba az ön készülékében van - ALL"
            }
        }
    }


    // GET ONE record fron table by id -> http://localhost:3000/users/5
    async select(table: string, id: number) {
        try {
            const response = await axios.get(`${this.SERVER}/${table}/${id}`);
            return {
                status: 200,
                data: response.data
            }
        }
        catch (error: any) {
            return {
                status: 500,
                message: "Hiba az ön készülékében van - SELECT"
            }
        }
    }

    // POST new record to 'table'
    async insert(table: string, data: any) {
        try {
            const response = await axios.post(`${this.SERVER}/${table}`, data);
            return {
                status: 200,
                message: 'A rekord felvéve!',
                data: response.data // nem kötelező 
            }
        }
        catch (error: any) {
            return {
                status: 500,
                message: "Hiba az ön készülékében van - INSERT"
            }
        }
    }

    //UPDATE record from 'table'
    async update(table: string, id: number, data: any) {
        try {
            const response = await axios.patch(`${this.SERVER}/${table}/${id}`, data);
            return {
                status: 200,
                message: 'A rekord módosítva!',
                data: response.data // nem kötelező 
            }
        }
        catch (error: any) {
            return {
                status: 500,
                message: "Hiba az ön készülékében van - UPDATE"
            }
        }
    }


    //DELETE ONE record from 'table by id
    async delete(table: string, id: number) {
        try {
            const response = await axios.delete(`${this.SERVER}/${table}/${id}`);
            return {
                status: 200,
                message: "A rekord sikeresen törölve"
            }
        }
        catch (error: any) {
            return {
                status: 500,
                message: "Hiba az ön készülékében van - DELETE"
            }
        }
    }

    //DELETE ALL 
    async deleteAll(table: string) {
        try {
            const response = await axios.delete(`${this.SERVER}/${table}`);
            return {
                status: 200,
                message: "Összes rekord törölve."
            }
        }
        catch (error: any) {
            return {
                status: 500,
                message: "Hiba az ön készülékében van - DROP"
            }
        }
    }
}

