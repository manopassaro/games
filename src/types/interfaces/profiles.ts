import { ApiProfiles } from "./api";

export interface IProfiles {
	userProfiles: ApiProfiles[];
	currentProfile: ApiProfiles | undefined;
	currentProfileId: string;
	setCurrentProfileId: React.Dispatch<React.SetStateAction<string>>;
	getAllProfiles: () => void;
	createProfile: (title: string, imageUrl: string) => void;
	editProfile: (id: string, title: string, imageUrl: string) => void;
	deleteProfile: (id: string) => void;
	selectProfile: (profile: ApiProfiles) => void;
}

export interface IProfilePatcher {
	title?: string;
	imageUrl?: string;
	userId?: string;
}
