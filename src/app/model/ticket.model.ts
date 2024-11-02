import { Category } from "./category.model";
import { User } from "./user.model";

export interface Ticket {
    id: number | undefined,
    title: string,
    description: string,
    status: TicketStatusEnum | undefined,
    waitingDate: number | Date | undefined,
    userId: number | undefined,
    categoryId: number | undefined,
    finishedDate: number | Date | undefined,
    createdDate: number | Date | undefined,
    user: User | undefined,
    employee: User | undefined,
    category: Category | undefined
}

export enum TicketStatusEnum {
    NEW = 'Novo',
    NOT_STARTED = 'Não iniciado',
    IN_PROGRESS = 'Em andamento',
    FINISHED = 'Resolvido',
    CANCELED = 'Cancelado'
}