// import { Injectable } from "@angular/core";
// import 'rxjs/add/operator/toPromise';
// // import { AngularFirestore } from 'angularfire2/firestore';


// @Injectable()
// export class FirebaseService {

//   constructor(
//     // public afs: AngularFirestore,
//   ){

//   }

//     addUser(value){
//       return new Promise<any>((resolve, reject) => {
//         this.afs.collection('/users').add({
//            username: value.name,
//            company: value.company,
//           teamname : value.teamname
//         })
//         .then(
//           (res) => {
//             resolve(res)
//           },
//           err => reject(err)
//         )
//       })
//     }

// }