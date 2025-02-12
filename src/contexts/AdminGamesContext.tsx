import { AllProvidersProps } from "../types/interfaces/system";
import { IAdminGames, ICardGames } from "../types/interfaces/games";
import { createContext, useContext } from "react";
import { useAuth } from "./AccountContext";
import { api } from "../helpers/Api";

const AdminGameContext = createContext({} as IAdminGames);

export const AdminGamesProvider = ({ children }: AllProvidersProps): JSX.Element => {
	const { logged, currentUser } = useAuth();

	const createGame = async ({ title, image, year, description, score, trailer, gameplay, genreId }: ICardGames): Promise<void> => {
		const data: ICardGames = {
			title,
			image,
			year,
			description,
			score,
			trailer,
			gameplay,
			genreId,
		};
		if (logged && currentUser) {
			const headers = {
				headers: {
					Authorization: `Bearer ${currentUser.token}`,
				},
			};
			api.post(`/games`, data, headers)
				.then((res): void => {
					console.log(res);
				})
				.catch(error => {
					console.log(error);
				});
		}
	};

	const editGame = async (id: string, { title, image, year, description, score, trailer, gameplay, genreId }: ICardGames): Promise<void> => {
		const data: ICardGames = {};
		if (logged && currentUser) {
			if (title) data.title = title;
			if (image) data.image = image;
			if (year) data.year = year;
			if (description) data.description = description;
			if (score) data.score = score;
			if (trailer) data.trailer = trailer;
			if (gameplay) data.gameplay = gameplay;
			if (genreId) data.genreId = genreId;
			const headers = {
				headers: {
					Authorization: `Bearer ${currentUser.token}`,
				},
			};
			api.patch(`/games/${id}`, data, headers)
				.then((res): void => {
					console.log(res);
				})
				.catch(error => console.log(error));
		}
	};

	const deleteGame = async (id: string): Promise<void> => {
		if (logged && currentUser) {
			const headers = {
				headers: {
					Authorization: `Bearer ${currentUser.token}`,
				},
			};
			api.delete(`/games/${id}`, headers)
				.then((res): void => {
					console.log(res);
				})
				.catch(err => {
					console.log(err);
				});
		}
	};

	return (
		<AdminGameContext.Provider
			value={{
				createGame,
				editGame,
				deleteGame,
			}}
		>
			{children}
		</AdminGameContext.Provider>
	);
};

export const UseAdminGames = (): IAdminGames => useContext(AdminGameContext);
