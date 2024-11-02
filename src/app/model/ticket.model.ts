import { Category } from "./category.model";
import { User } from "./user.model";

export interface Ticket {
    id: number | undefined,
    title: string,
    description: string,
    status: TicketStatusEnum,
    waitingDate: number | Date,
    userId: number,
    categoryId: number,
    finishedDate: number | Date,
    createdDate: number | Date,
    user: User,
    employee: User | undefined,
    category: Category
}

export enum TicketStatusEnum {
    NEW = 'Novo',
    NOT_STARTED = 'Não iniciado',
    IN_PROGRESS = 'Em andamento',
    FINISHED = 'Resolvido',
    CANCELED = 'cancelado'
}