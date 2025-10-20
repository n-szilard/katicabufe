export interface Product {
    id: number;
    termekNev: string;
    nettoAr: number;
    egyseg: string;
    kategoriaId: number;
    kategoriaNev?: string;
}