console.log('before');

getUser(1,(user)=>{
    console.log("user is", user);

    //get the repository
    getRepository(user.Username, (repos)=>{
        console.log('Repos are ', repos);
    });

    //CALLBACK HELL
});

console.log('After');

function getUser(id, callbacks){
    setTimeout(() => {
        console.log('Reading a user from database...'); 
        callbacks({id:id, Username:'Rjjkaushal'}) ;
    }, 2000);
}

function getRepository(Username,callbacks){
    setTimeout(() => {
        console.log('calling github api....');
        callbacks (['repo1','repo2','repo3']);
    }, 2000);
}