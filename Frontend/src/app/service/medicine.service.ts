import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicine } from '../model/medicine.model';
import { MedicineUrl, productUrl,EditproductUrl ,AddproductUrl, DeleteProductUrl,findProductByID} from 'src/app/config/api';


@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(public http:HttpClient) { }

  loadAllMedicine():Observable<Medicine[]>{
    return this.http.get<Medicine[]>(productUrl);
  }

  editProductByID(product:any):Observable<any>{
    return this.http.put(EditproductUrl,product);
  }

  addProduct(product:any):Observable<any>{
    return this.http.post(AddproductUrl,product);
  }
  deleteProduct(pid:number):Observable<any>{
    return this.http.delete(DeleteProductUrl+'/'+pid);
  }
  findProductByID(pid:number):Observable<any>{
    return this.http.get(findProductByID+'/'+pid)
  }
  getProductTotal(){
    return this.http.get(MedicineUrl+'/getTotal');
  }

  getMultipleProductInfo(pids:any){
    return this.http.get(MedicineUrl+'/findProducts/'+pids)
  }
}
