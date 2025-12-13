interface User {
    name:string;
    age : number;
    email:string;
    password :string;
}

type someData = Pick<User,'email' | 'password'>;
type someDataOptional = Partial<someData>;     // optional , not para is compulsory


const displayUserProfile = function(user:someData):void{
    console.log(`name is ${user.email} and password is ${user.password}`)
}

displayUserProfile({email:"asdfa",password:"asdf21s"});





interface User2 {
    readonly name:string;        //only can be read, not changed
    readonly age : number;       //only can be read, not changed
}













