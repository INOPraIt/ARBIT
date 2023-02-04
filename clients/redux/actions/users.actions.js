import { createActionFactory } from "../../common/store/helper";

const factory = createActionFactory('USERS');

export const createUser = factory.create('CREATE_USER');
export const createUserAsync = factory.createAsync('CREATE_USER_ASYNC');
