import { createSlice } from "@reduxjs/toolkit";

export const matchSlice = createSlice({
	name: "matchSlice",
	initialState: {
		matches: [],
	},
	reducers: {
		setMatch: (state, action) => {
			// so many annoying checks
			if (!(action.payload instanceof Array))		console.log("WARNING! Expected key-value array");
			if (typeof action.payload[0] !== "string")	console.log("WARNING! Expected key to be string.");
			if (action.payload.length !== 2)			console.log("WARNING! Expected key-value array to have two items.");

			// key-values are stored in the format [key, value]
			const key = action.payload[0];
			const value = action.payload[1];

			const payloadIndex = state.keyPairValues.findIndex(v => v[0] === key);

			// if the key isn't in the state yet...
			if (payloadIndex === -1) {
				// push it real good
				state.keyPairValues.push([key, value]);
			} else {
				// otherwise, just modify the value of the existing key
				state.keyPairValues[payloadIndex][1] = value;
			}
		},

		setDefault: (state, action) => {
			if (!(action.payload instanceof Array))		console.log("WARNING! Expected key-value array");
			if (typeof action.payload[0] !== "string")	console.log("WARNING! Expected key to be string.");
			if (action.payload.length !== 2)			console.log("WARNING! Expected key-value array to have two items.");

			const key = action.payload[0];
			const value = action.payload[1];

			const payloadIndex = state.keyPairValues.findIndex(v => v[0] === key);

			if (payloadIndex === -1) state.keyPairValues.push([key, value]);
		}
	},
});

export const { setKeyPair, setDefault } = matchSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectData = state => state.data.keyPairValues;

export default matchSlice.reducer;
