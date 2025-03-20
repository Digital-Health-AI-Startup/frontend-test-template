import { Stack } from "@mui/material";

import { PatientHeader } from "./components/PatientHeader";

function App() {
	return (
		<Stack
			spacing={2}
			sx={{
				p: 5,
			}}
		>
			<PatientHeader />
		</Stack>
	);
}

export default App;
