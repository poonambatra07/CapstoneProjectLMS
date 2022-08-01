import { environment } from "src/environments/environment";

export const baseUrl=environment.production ? 'http://localhost:9091/api/':'http://localhost:9091/api';

export const baseUrlJsonServer=environment.production ? 'http://localhost:3000':'http://localhost:3000';


export const productUrl=baseUrl+'/medicine/getAllMedicine';

export const cartUrl=baseUrl+'/cart';

export const MedicineUrl=baseUrl+'/medicine';

export const UserUrl=baseUrl+'/user';


export const wishlistUrl=baseUrlJsonServer+'/wishlist'

export const userUrllogin=baseUrl+'/user/signIn'

export const userUrlregister=baseUrl+'/user/signUp'

export const EditproductUrl=baseUrl+'/medicine/updateMedicine';

export const AddproductUrl=baseUrl+'/medicine/storeMedicine';

export const DeleteProductUrl=baseUrl+'/medicine/deleteMedicine';

export const AllUsersUrl=baseUrl+'/user/AllUsers';

export const UsersUrl=baseUrl+'/user/getUser';

export const UpdateUsersUrl=baseUrl+'/user/updateUser';

export const UpdateUserBalanceUrl=baseUrl+'/user/updateUserBalance';

export const CheckoutBase=baseUrl+'/order';

export const findProductByID=baseUrl+'/medicine/findMedicine';