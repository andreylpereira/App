interface Response {
    token: string;
    user: {
        name: string;
        provider: Boolean;
        email: string;
        password: string;
    }
}

export function signIn(): Promise<Response> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IlRoaWFnbyIsInN1YiI6IjEzIiwianRpIjoiZDBlMGFkZDItOTlkMC00NWY1LThlYzEtY2FiYzIwZjkxMGYyIiwiaWF0IjoxNTAwMDMzMjE0LCJKd3RWYWxpZGF0aW9uIjoiVXN1YXJpbyIsIm5iZiI6MTUwMDAzMzIxMywiZXhwIjoxNTAwMDMzMjczLCJpc3MiOiJJc3N1ZXIiLCJhdWQiOiJBdWRpZW5jZSJ9.SmjuyXgloA2RUhIlAEetrQwfC0EhBmhu-xOMzyY3Y_Q',
                user: {
                    name: 'Andrey Luiz',
                    provider: true,
                    email: 'gigapp@gmail.com',
                    password: 'teste'
                },
            })
        }, 1000);
    });
}