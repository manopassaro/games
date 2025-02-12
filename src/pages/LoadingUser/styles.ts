import mixings from "src/assets/styles/mixins";
import styled from "styled-components";

export const LoadingUserStyle = styled.div`
	background: ${mixings.colors.baseBg1Dark};
	width: 100%;
	height: 100vh;
	max-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		width: 80rem;
	}
`;
