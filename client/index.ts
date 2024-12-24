import { createTRPCProxyClient, CreateTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from '../server';


const trpc = createTRPCProxyClient<AppRouter>({
    links:[
        httpBatchLink({
            url: 'http://localhost:3000',
        }),
    ],
});

async function main(){
    let response = await trpc.createTodo.mutate({
        title: 'New Todo',
        description: 'This is a new todo',
    })

    console.log(response);
}

main();