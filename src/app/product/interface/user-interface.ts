export interface Iuser {
    [key: string]: any;
    userId: string;
    userName: string;
    userExpense: number;
    userImg?:string;
    uniqueKey?:string;
}

    /* 
    If you want to suppress the implicit any index errors for your entire project, you can do that in your tsconfig.json file.
    
    -- tsconfig.json -->
        {
            "compilerOptions": {
                "suppressImplicitAnyIndexErrors": true,
                // ... rest
            }
        }
                OR
    Use an object with an index signature to store key-value pairs while creating interface
    */