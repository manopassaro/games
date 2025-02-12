import { ApiProfiles } from "./api";

export interface AuthProviderData {
	logged: boolean;
	login: (params: Auth) => void;
	logout: () => void;
	currentUser: Auth | undefined;
}

export interface Auth {
	token: string;
	user: CurrentUser;
}

export interface CurrentUser {
	id: string;
	name: string;
	email?: string;
	cpf?: string;
	isAdmin?: boolean;
	profile: ApiProfiles[];
	createdAt?: string;
	updatedAt?: string;
}

export interface IDataUser {
	id: string;
	name: string;
	email: string;
	createdAt: string;
	updatedAt?: string;
}

export interface DataType {
	name?: string;
	email?: string;
	password?: string;
	cpf?: string;
	isAdmin?: boolean;
}
