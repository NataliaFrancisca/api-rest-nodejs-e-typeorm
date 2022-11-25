interface IUser{
    name: string,
    email: string,
    age: number
}

class CreateUserService{
    execute({name, email, age}: IUser){
        const data = [];

        data.push({name, email, age});

        return data;
    }
}

export { CreateUserService }