export interface User {
    id:string
    name: string;
    icon: string;
    createdAt: Date;
    order?: Number; //ユーザ番号の管理
}
